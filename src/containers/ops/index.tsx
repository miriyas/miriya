import { ReactNode } from 'react';
import cx from 'clsx';

import { OpsLevel, OpsRun, OpsSource, OpsStatus } from '@/types/ops';

import AiUsageChart from './AiUsageChart';
import AutoRefresh from './AutoRefresh';
import styles from './index.module.scss';

const REFRESH_SECONDS = 60;
// Data older than this is shown as stale (the producer may have stopped).
const STALE_MINUTES = 5;

const LEVEL_LABEL: Record<OpsLevel, string> = { ok: '정상', warn: '주의', error: '오류' };

// All times in the JSON are UTC. Show them in Korean time.
const kst = new Intl.DateTimeFormat('ko-KR', {
  timeZone: 'Asia/Seoul',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});
const formatTime = (iso: string | null) => (iso ? kst.format(new Date(iso)) : '-');

const minutesAgo = (iso: string, now: string) => Math.round((Date.parse(now) - Date.parse(iso)) / 60000);

const duration = (run: OpsRun) => {
  if (!run.finishedAt) return '실행 중';
  const sec = Math.round((Date.parse(run.finishedAt) - Date.parse(run.startedAt)) / 1000);
  if (sec < 1) return '-';
  return sec < 120 ? `${sec}초` : `${Math.round(sec / 60)}분`;
};

const runResult = (run: OpsRun): OpsLevel => {
  if (!run.finishedAt || run.ok === null) return 'warn';
  return run.ok ? 'ok' : 'error';
};

const Badge = ({ level, children }: { level: OpsLevel; children?: ReactNode }) => (
  <span className={cx(styles.badge, styles[level])}>{children ?? LEVEL_LABEL[level]}</span>
);

const Panel = ({ data, now }: { data: OpsStatus; now: string }) => {
  const age = minutesAgo(data.generatedAt, now);
  const stale = age > STALE_MINUTES;

  return (
    <section className={styles.panel}>
      <header className={styles.panelHeader}>
        <h2>
          <a href={data.url} target='_blank' rel='noreferrer'>
            {data.title}
          </a>
        </h2>
        <Badge level={data.status} />
        <span className={cx(styles.generated, { [styles.stale]: stale })}>
          {formatTime(data.generatedAt)} 기준{stale && ` (${age}분 전 데이터)`}
        </span>
        {data.adminUrl && (
          <a className={styles.adminLink} href={data.adminUrl} target='_blank' rel='noreferrer'>
            운영자 화면
          </a>
        )}
      </header>

      <ul className={styles.metrics}>
        {data.metrics.map((m) => (
          <li key={m.key} className={styles[m.level ?? 'ok']}>
            <p className={styles.metricLabel}>{m.label}</p>
            <p className={styles.metricValue}>
              {m.value.toLocaleString('ko-KR')}
              <span>{m.unit}</span>
            </p>
            {m.hint && <p className={styles.metricHint}>{m.hint}</p>}
          </li>
        ))}
      </ul>

      {data.aiUsage && data.aiUsage.length > 0 && <AiUsageChart usage={data.aiUsage} now={now} />}

      {data.jobs.length > 0 && (
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
            {data.jobs.map((job) => (
              <tr key={job.name}>
                <td>{job.label}</td>
                <td>{job.schedule ?? '-'}</td>
                <td>
                  <Badge level={job.status} />
                </td>
                <td>{formatTime(job.lastRun?.startedAt ?? null)}</td>
                <td>{job.lastRun ? duration(job.lastRun) : '-'}</td>
                <td className={styles.note}>{job.note ?? job.lastRun?.error ?? job.lastRun?.summary ?? '기록 없음'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {data.runs.length > 0 && (
        <details className={styles.runs}>
          <summary>최근 실행 {data.runs.length}개</summary>
          <table className={styles.table}>
            <tbody>
              {data.runs.map((run) => (
                <tr key={`${run.job}-${run.startedAt}`}>
                  <td>{formatTime(run.startedAt)}</td>
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
      )}
    </section>
  );
};

interface Props {
  sources: OpsSource[];
  renderedAt: string;
}

const OpsDashboard = ({ sources, renderedAt }: Props) => (
  <main className={styles.ops}>
    <AutoRefresh seconds={REFRESH_SECONDS} />
    <div className={styles.centering}>
      <h1>운영 상태</h1>
      <p className={styles.sub}>
        {formatTime(renderedAt)} 갱신 · {REFRESH_SECONDS}초마다 자동 갱신 · 시각은 한국 시간
      </p>
      {sources.map((source) =>
        source.data ? (
          <Panel key={source.name} data={source.data} now={renderedAt} />
        ) : (
          <section key={source.name} className={cx(styles.panel, styles.failed)}>
            <header className={styles.panelHeader}>
              <h2>{source.name}</h2>
              <Badge level='error' />
            </header>
            <p className={styles.note}>{source.error}</p>
          </section>
        ),
      )}
      <section className={styles.panel}>
        <header className={styles.panelHeader}>
          <h2>카카오톡 모임 통계</h2>
          <a href='https://bung-analytics.vercel.app' target='_blank' rel='noopener noreferrer'>
            새 탭에서 열기
          </a>
        </header>
        <iframe
          className={styles.meetupDashboard}
          src='https://bung-analytics.vercel.app'
          title='카카오톡 모임 참석 통계'
          referrerPolicy='no-referrer'
        />
      </section>
    </div>
  </main>
);

export default OpsDashboard;
