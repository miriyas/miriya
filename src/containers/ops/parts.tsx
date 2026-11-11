import { ReactNode } from 'react';
import cx from 'clsx';

import { OpsJob, OpsLevel, OpsMetric, OpsRun, OpsSource } from '@/types/ops';

import { duration, formatTime, freshness, LEVEL_LABEL, metricAgoIso, relativeTime, runResult } from './format';
import styles from './index.module.scss';

export const Badge = ({ level, children }: { level: OpsLevel; children?: ReactNode }) => (
  <span className={cx(styles.badge, styles[level])}>{children ?? LEVEL_LABEL[level]}</span>
);

/** A titled block on a project page. */
export const Section = ({ title, children, aside }: { title: string; children: ReactNode; aside?: ReactNode }) => (
  <section className={styles.panel}>
    <header className={styles.sectionHeader}>
      <h2>{title}</h2>
      {aside}
    </header>
    {children}
  </section>
);

export const Loading = ({ label }: { label: string }) => <p className={styles.loading}>{label} 불러오는 중…</p>;

/** Shown above old data when the last fetch failed, or when the producer stopped sending. */
export const StaleNote = ({ source, now }: { source: OpsSource; now: string }) => {
  const f = freshness(source, now);
  if (f.failed && source.data) {
    return (
      <p className={styles.staleNote}>
        {source.error} 아래는 {formatTime(source.staleSince)}에 받은 값입니다.
      </p>
    );
  }
  if (f.failed) return <p className={styles.staleNote}>{source.error}</p>;
  if (f.stale) return <p className={styles.staleNote}>{f.ageMinutes}분 동안 새 데이터가 없습니다.</p>;
  return null;
};

/** Relative time ("10시간 30분 전"); the absolute Korean time ("2026/11/11 14:14") shows on mouse hover. */
export const When = ({ iso, now }: { iso: string | null | undefined; now: string }) =>
  iso ? (
    <time dateTime={iso} title={formatTime(iso)} className={styles.when}>
      {relativeTime(iso, now)}
    </time>
  ) : (
    <>-</>
  );

export const MetricGrid = ({ metrics, now }: { metrics: OpsMetric[]; now: string }) => (
  <ul className={styles.metrics}>
    {metrics.map((m) => (
      <li key={m.key} className={styles[m.level ?? 'ok']}>
        <p className={styles.metricLabel}>{m.label}</p>
        <p className={styles.metricValue}>
          {metricAgoIso(m, now) ? (
            <When iso={metricAgoIso(m, now)} now={now} />
          ) : (
            <>
              {m.value.toLocaleString('ko-KR')}
              <span>{m.unit}</span>
            </>
          )}
        </p>
        {m.hint && <p className={styles.metricHint}>{m.hint}</p>}
      </li>
    ))}
  </ul>
);

export const JobsTable = ({ jobs, now }: { jobs: OpsJob[]; now: string }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>작업</th>
        <th>일정</th>
        <th>상태</th>
        <th>마지막 실행</th>
        <th>걸린 시간</th>
        <th>내용</th>
      </tr>
    </thead>
    <tbody>
      {jobs.map((job) => (
        <tr key={job.name}>
          <td>{job.label}</td>
          <td>{job.schedule ?? '-'}</td>
          <td>
            <Badge level={job.status} />
          </td>
          <td>
            <When iso={job.lastRun?.startedAt} now={now} />
          </td>
          <td>{job.lastRun ? duration(job.lastRun) : '-'}</td>
          <td className={styles.note}>{job.note ?? job.lastRun?.error ?? job.lastRun?.summary ?? '기록 없음'}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const RunsList = ({ runs, now }: { runs: OpsRun[]; now: string }) => (
  <details className={styles.runs}>
    <summary>최근 실행 {runs.length}개</summary>
    <table className={styles.table}>
      <tbody>
        {runs.map((run) => (
          <tr key={`${run.job}-${run.startedAt}`}>
            <td>
              <When iso={run.startedAt} now={now} />
            </td>
            <td>{run.job}</td>
            <td>
              <Badge level={runResult(run)}>{run.finishedAt ? undefined : '실행 중'}</Badge>
            </td>
            <td>{duration(run)}</td>
            <td className={styles.note}>{run.error ?? run.summary ?? ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </details>
);
