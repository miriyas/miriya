import { OpsAiUsage } from '@/types/ops';

import styles from './AiUsageChart.module.scss';

const DAYS = 31;

// Fixed colors per source, so a source keeps its color between refreshes.
const SOURCE_COLORS: Record<string, string> = {
  'claude-code': 'var(--color-blue)',
  'charr:summarize': 'var(--color-orange)',
};
const OTHER_COLORS = ['var(--color-teal)', 'var(--color-purple)', 'var(--color-pink)', 'var(--color-indigo)'];

const SOURCE_LABELS: Record<string, string> = {
  'claude-code': 'Claude Code (구독을 API 요금으로 환산)',
  'charr:summarize': '차르르 후기 요약 (API)',
};

const usd = (v: number) => `$${v.toLocaleString('en-US', { maximumFractionDigits: v < 10 ? 2 : 0 })}`;

/** The last DAYS Korean dates, oldest first (YYYY-MM-DD). */
const lastDays = (now: string) => {
  const fmt = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }); // en-CA gives YYYY-MM-DD
  const end = Date.parse(now);
  return Array.from({ length: DAYS }, (_, i) => fmt.format(new Date(end - (DAYS - 1 - i) * 86400000)));
};

interface Props {
  usage: OpsAiUsage[];
  now: string;
}

/** Daily cost bars (last 31 days), one stacked color per source. Server-rendered, no chart library. */
const AiUsageChart = ({ usage, now }: Props) => {
  const days = lastDays(now);
  const sources = [...new Set(usage.map((u) => u.source))].sort();
  const colorOf = (source: string) =>
    SOURCE_COLORS[source] ?? OTHER_COLORS[sources.indexOf(source) % OTHER_COLORS.length];

  // day -> source -> cost
  const byDay = new Map<string, Map<string, number>>();
  usage.forEach((u) => {
    const day = byDay.get(u.day) ?? new Map<string, number>();
    day.set(u.source, (day.get(u.source) ?? 0) + u.costUsd);
    byDay.set(u.day, day);
  });
  const dayTotal = (day: string) => [...(byDay.get(day)?.values() ?? [])].reduce((a, b) => a + b, 0);
  const max = Math.max(...days.map(dayTotal), 0.01);
  const sourceTotal = (source: string) =>
    usage.filter((u) => u.source === source && days.includes(u.day)).reduce((a, u) => a + u.costUsd, 0);

  return (
    <div className={styles.aiUsage}>
      <div className={styles.head}>
        <h3>AI 사용 비용 (최근 {DAYS}일)</h3>
        <p>요금표로 계산한 추정값입니다. 실제 청구 금액이 아닙니다.</p>
      </div>
      <ul className={styles.legend}>
        {sources.map((source) => (
          <li key={source}>
            <i style={{ backgroundColor: colorOf(source) }} />
            {SOURCE_LABELS[source] ?? source} <b>{usd(sourceTotal(source))}</b>
          </li>
        ))}
      </ul>
      <div className={styles.chart}>
        <span className={styles.max}>{usd(max)}</span>
        {days.map((day) => {
          const total = dayTotal(day);
          return (
            <div key={day} className={styles.bar} title={`${day}  ${usd(total)}`}>
              <div className={styles.stack} style={{ height: `${(total / max) * 100}%` }}>
                {sources.map((source) => {
                  const cost = byDay.get(day)?.get(source) ?? 0;
                  if (!cost) return null;
                  return (
                    <span
                      key={source}
                      style={{ flexGrow: cost, backgroundColor: colorOf(source) }}
                      title={`${day}  ${SOURCE_LABELS[source] ?? source}  ${usd(cost)}`}
                    />
                  );
                })}
              </div>
              <span className={styles.day}>{Number(day.slice(8))}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AiUsageChart;
