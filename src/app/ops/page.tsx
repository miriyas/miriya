import { Suspense } from 'react';

import { Loading, Section } from '@/containers/ops/parts';
import { ProjectCard, Problems } from '@/containers/ops/sections';
import styles from '@/containers/ops/index.module.scss';
import { PROJECTS } from './data';

import { requireAdmin } from './auth';

export const dynamic = 'force-dynamic';

/** Overview: the problem list first, then one card per project. */
const OpsOverviewPage = async () => {
  await requireAdmin();
  const now = new Date().toISOString();
  return (
    <>
      <Section title='확인할 문제'>
        <Suspense fallback={<Loading label='문제 목록' />}>
          <Problems now={now} />
        </Suspense>
      </Section>
      <div className={styles.cards}>
        {PROJECTS.map((p) => (
          <Suspense key={p.key} fallback={<div className={styles.cardLoading}>{p.name} 불러오는 중…</div>}>
            <ProjectCard projectKey={p.key} now={now} />
          </Suspense>
        ))}
      </div>
    </>
  );
};

export default OpsOverviewPage;
