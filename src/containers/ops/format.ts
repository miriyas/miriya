import { OpsLevel, OpsMetric, OpsRun, OpsSource } from '@/types/ops';

export const REFRESH_SECONDS = 60;

export const LEVEL_LABEL: Record<OpsLevel, string> = { ok: '정상', warn: '주의', error: '오류' };

// All times in the JSON are UTC. Absolute times are Korean time, "2026/11/11 14:14".
const kst = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Seoul',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});
export const formatTime = (iso: string | null | undefined) => {
  if (!iso) return '-';
  const p = Object.fromEntries(kst.formatToParts(new Date(iso)).map((x) => [x.type, x.value]));
  return `${p.year}/${p.month}/${p.day} ${p.hour}:${p.minute}`;
};

export const minutesAgo = (iso: string, now: string) => Math.round((Date.parse(now) - Date.parse(iso)) / 60000);

/** "방금", "5분 전", "10시간 30분 전", "2일 3시간 전". */
export const relativeTime = (iso: string, now: string) => {
  const min = Math.max(0, Math.floor((Date.parse(now) - Date.parse(iso)) / 60000));
  if (min < 1) return '방금';
  if (min < 60) return `${min}분 전`;
  const h = Math.floor(min / 60);
  if (h < 24) return `${h}시간${min % 60 ? ` ${min % 60}분` : ''} 전`;
  const d = Math.floor(h / 24);
  return `${d}일${h % 24 ? ` ${h % 24}시간` : ''} 전`;
};

// Metrics such as "마지막 배포 10.3 시간 전" come as a number of hours (or minutes) ago.
const AGO_UNITS: Record<string, number> = { '시간 전': 3600_000, '분 전': 60_000 };
/** The moment an "N시간 전" metric points to, or null for other metrics. */
export const metricAgoIso = (m: Pick<OpsMetric, 'value' | 'unit'>, now: string) =>
  AGO_UNITS[m.unit] ? new Date(Date.parse(now) - m.value * AGO_UNITS[m.unit]).toISOString() : null;
/** "10시간 30분 전" for time metrics, "1,234건" for the rest. */
export const metricText = (m: Pick<OpsMetric, 'value' | 'unit'>, now: string) => {
  const iso = metricAgoIso(m, now);
  return iso ? relativeTime(iso, now) : `${m.value.toLocaleString('ko-KR')}${m.unit}`;
};

export const duration = (run: OpsRun) => {
  if (!run.finishedAt) return '실행 중';
  const sec = Math.round((Date.parse(run.finishedAt) - Date.parse(run.startedAt)) / 1000);
  if (sec < 1) return '-';
  return sec < 120 ? `${sec}초` : `${Math.round(sec / 60)}분`;
};

export const runResult = (run: OpsRun): OpsLevel => {
  if (!run.finishedAt || run.ok === null) return 'warn';
  return run.ok ? 'ok' : 'error';
};

/** Data older than this is shown as stale (the producer may have stopped). The meetups collector runs hourly. */
const staleMinutes = (project: string) => (project === 'kakao-meetups' ? 75 : 5);

export interface Freshness {
  level: OpsLevel; // the badge to show
  ageMinutes: number;
  stale: boolean; // the producer's data is old
  failed: boolean; // our last fetch failed (data, if any, is the last good value)
}

export const freshness = (source: OpsSource, now: string): Freshness => {
  const { data } = source;
  if (!data) return { level: 'error', ageMinutes: 0, stale: false, failed: true };
  const ageMinutes = minutesAgo(data.generatedAt, now);
  const stale = ageMinutes > staleMinutes(data.project);
  const failed = !!source.error;
  const level = (stale || failed) && data.status === 'ok' ? 'warn' : data.status;
  return { level, ageMinutes, stale, failed };
};

// Which section of a project page a metric goes in. Unknown keys go to "data".
const STATUS_KEYS = new Set(['disk', 'memory', 'load', 'containers', 'deployAge', 'backupAge']);
const COST_KEYS = new Set(['claudeApiMonth', 'claudeCodeToday', 'claudeCodeMonth']);
export type MetricGroup = 'status' | 'data' | 'cost';
export const metricGroup = (m: OpsMetric): MetricGroup => {
  if (STATUS_KEYS.has(m.key)) return 'status';
  if (COST_KEYS.has(m.key)) return 'cost';
  return 'data';
};

/** Things to look at: failed fetches, warn/error metrics and jobs. */
export const problemsOf = (source: OpsSource, now: string) => {
  const items: { level: OpsLevel; text: string }[] = [];
  const f = freshness(source, now);
  if (source.error) items.push({ level: source.data ? 'warn' : 'error', text: source.error });
  if (f.stale) items.push({ level: 'warn', text: `${f.ageMinutes}분 동안 새 데이터가 없습니다.` });
  source.data?.metrics
    .filter((m) => m.level && m.level !== 'ok')
    .forEach((m) =>
      items.push({
        level: m.level!,
        text: `${m.label}: ${metricText(m, now)}${m.hint ? ` (${m.hint})` : ''}`,
      }),
    );
  source.data?.jobs
    .filter((j) => j.status !== 'ok')
    .forEach((j) =>
      items.push({ level: j.status, text: `${j.label}: ${j.note ?? j.lastRun?.error ?? LEVEL_LABEL[j.status]}` }),
    );
  return items;
};
