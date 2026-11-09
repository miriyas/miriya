import { OpsLevel, OpsMetric, OpsRun, OpsSource } from '@/types/ops';

export const REFRESH_SECONDS = 60;

export const LEVEL_LABEL: Record<OpsLevel, string> = { ok: '정상', warn: '주의', error: '오류' };

// All times in the JSON are UTC. Show them in Korean time.
const kst = new Intl.DateTimeFormat('ko-KR', {
  timeZone: 'Asia/Seoul',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});
export const formatTime = (iso: string | null | undefined) => (iso ? kst.format(new Date(iso)) : '-');

export const minutesAgo = (iso: string, now: string) => Math.round((Date.parse(now) - Date.parse(iso)) / 60000);

/** "방금", "5분 전", "3시간 전", "2일 전". */
export const relativeTime = (iso: string, now: string) => {
  const min = minutesAgo(iso, now);
  if (min < 1) return '방금';
  if (min < 60) return `${min}분 전`;
  if (min < 48 * 60) return `${Math.floor(min / 60)}시간 전`;
  return `${Math.floor(min / 1440)}일 전`;
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
        text: `${m.label}: ${m.value.toLocaleString('ko-KR')}${m.unit}${m.hint ? ` (${m.hint})` : ''}`,
      }),
    );
  source.data?.jobs
    .filter((j) => j.status !== 'ok')
    .forEach((j) =>
      items.push({ level: j.status, text: `${j.label}: ${j.note ?? j.lastRun?.error ?? LEVEL_LABEL[j.status]}` }),
    );
  return items;
};
