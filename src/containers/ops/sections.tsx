import Link from 'next/link';
import cx from 'clsx';

import { findProject, getSource, getTraffic, getVisitors, PROJECTS, ProjectKey } from '@/app/ops/data';
import AiUsageChart from './AiUsageChart';
import { formatTime, freshness, metricGroup, MetricGroup, problemsOf } from './format';
import { Badge, JobsTable, MetricGrid, RunsList, Section, StaleNote } from './parts';
import TrafficView from './TrafficView';
import VisitorChart from './VisitorChart';
import styles from './index.module.scss';

// Server components. Each one awaits only its own data, so the page streams: a slow source
// leaves only its own boxes on "불러오는 중", and the rest shows at once.

/* ---------- overview (/ops) ---------- */

export const Problems = async ({ now }: { now: string }) => {
  const sources = await Promise.all(PROJECTS.map((p) => getSource(p.key)));
  const items = sources.flatMap((s) => problemsOf(s, now).map((item) => ({ ...item, project: s.name, key: s.key })));
  if (items.length === 0) return <p className={styles.allOk}>문제 없음. 모든 프로젝트가 정상입니다.</p>;
  return (
    <ul className={styles.problems}>
      {items.map((item) => (
        <li key={`${item.key}-${item.text}`}>
          <Badge level={item.level} />
          <Link href={`/ops/${item.key}`}>{item.project}</Link>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
};

export const ProjectCard = async ({ projectKey, now }: { projectKey: ProjectKey; now: string }) => {
  const project = findProject(projectKey)!;
  const [source, visitors] = await Promise.all([getSource(projectKey), project.ga ? getVisitors() : null]);
  const f = freshness(source, now);
  const problems = problemsOf(source, now).length;
  const deploy = source.data?.metrics.find((m) => m.key === 'deployAge');
  const days = visitors?.[projectKey]?.days;
  return (
    <Link href={`/ops/${projectKey}`} className={cx(styles.card, styles[f.level])}>
      <header>
        <h2>{project.name}</h2>
        <Badge level={f.level} />
      </header>
      <dl>
        <div>
          <dt>문제</dt>
          <dd>{problems}건</dd>
        </div>
        {days && (
          <div>
            <dt>오늘 방문자</dt>
            <dd>{days[days.length - 1].users.toLocaleString('ko-KR')}명</dd>
          </div>
        )}
        {deploy && (
          <div>
            <dt>마지막 배포</dt>
            <dd>
              {deploy.value}
              {deploy.unit}
            </dd>
          </div>
        )}
      </dl>
      <p className={styles.cardTime}>
        {source.data ? `${formatTime(source.data.generatedAt)} 기준` : source.error}
        {f.failed && source.data && ' (연결 실패, 이전 값)'}
      </p>
    </Link>
  );
};

/* ---------- project page (/ops/<key>) ---------- */

export const ProjectHeader = async ({ projectKey, now }: { projectKey: ProjectKey; now: string }) => {
  const source = await getSource(projectKey);
  const f = freshness(source, now);
  const { data } = source;
  return (
    <div className={styles.projectHeader}>
      <h2>{data ? <a href={data.url} target='_blank' rel='noreferrer'>{data.title}</a> : source.name}</h2>
      <Badge level={f.level} />
      {data && <span className={styles.generated}>{formatTime(data.generatedAt)} 기준</span>}
      {data?.adminUrl && (
        <a className={styles.adminLink} href={data.adminUrl} target='_blank' rel='noreferrer'>
          운영자 화면
        </a>
      )}
      <StaleNote source={source} now={now} />
    </div>
  );
};

const TITLES: Record<MetricGroup, string> = { status: '상태', data: '데이터', cost: '비용' };

/** One group of metrics. Renders nothing when the project has none in this group. */
export const MetricsSection = async ({ projectKey, group }: { projectKey: ProjectKey; group: MetricGroup }) => {
  const source = await getSource(projectKey);
  const metrics = source.data?.metrics.filter((m) => metricGroup(m) === group) ?? [];
  if (metrics.length === 0) return null;
  return (
    <Section
      title={TITLES[group]}
      aside={
        group === 'cost' && source.data?.aiUsage ? (
          <Link className={styles.adminLink} href='/ops/ai'>
            일별 AI 비용
          </Link>
        ) : undefined
      }
    >
      <div className={cx({ [styles.dim]: source.error })}>
        <MetricGrid metrics={metrics} />
      </div>
    </Section>
  );
};

export const JobsSection = async ({ projectKey }: { projectKey: ProjectKey }) => {
  const source = await getSource(projectKey);
  const { data } = source;
  if (!data || (data.jobs.length === 0 && data.runs.length === 0)) return null;
  return (
    <Section title='작업'>
      <div className={cx({ [styles.dim]: source.error })}>
        {data.jobs.length > 0 && <JobsTable jobs={data.jobs} />}
        {data.runs.length > 0 && <RunsList runs={data.runs} />}
      </div>
    </Section>
  );
};

export const TrafficSection = async ({ projectKey }: { projectKey: ProjectKey }) => {
  const [visitors, traffic] = await Promise.all([getVisitors(), getTraffic(projectKey)]);
  const site = visitors[projectKey];
  return (
    <Section title='트래픽'>
      {site && <VisitorChart site={site} />}
      <TrafficView traffic={traffic} />
    </Section>
  );
};

/* ---------- AI cost (/ops/ai) ---------- */

export const AiSection = async ({ now }: { now: string }) => {
  const source = await getSource('charr');
  const usage = source.data?.aiUsage;
  if (!usage?.length) return <p className={styles.staleNote}>{source.error ?? 'AI 사용 기록이 없습니다.'}</p>;
  const costs = source.data!.metrics.filter((m) => metricGroup(m) === 'cost');
  return (
    <>
      <StaleNote source={source} now={now} />
      <MetricGrid metrics={costs} />
      <AiUsageChart usage={usage} now={now} />
    </>
  );
};
