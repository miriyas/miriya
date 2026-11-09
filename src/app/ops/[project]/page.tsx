import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import { Loading, Section } from '@/containers/ops/parts';
import { JobsSection, MetricsSection, ProjectHeader, TrafficSection } from '@/containers/ops/sections';

import { requireAdmin } from '../auth';
import { findProject } from '../data';

export const dynamic = 'force-dynamic';

/** One project: 상태, 트래픽, 데이터, 작업, 비용. Each box streams on its own. */
const OpsProjectPage = async ({ params }: { params: Promise<{ project: string }> }) => {
  await requireAdmin();
  const project = findProject((await params).project);
  if (!project) notFound();
  const now = new Date().toISOString();
  const { key } = project;
  const wait = (label: string) => (
    <Section title={label}>
      <Loading label={label} />
    </Section>
  );
  return (
    <>
      <Suspense fallback={<Loading label={project.name} />}>
        <ProjectHeader projectKey={key} now={now} />
      </Suspense>
      <Suspense fallback={wait('상태')}>
        <MetricsSection projectKey={key} group='status' />
      </Suspense>
      {project.ga && (
        <Suspense fallback={wait('트래픽')}>
          <TrafficSection projectKey={key} />
        </Suspense>
      )}
      <Suspense fallback={wait('데이터')}>
        <MetricsSection projectKey={key} group='data' />
      </Suspense>
      <Suspense fallback={wait('작업')}>
        <JobsSection projectKey={key} now={now} />
      </Suspense>
      <Suspense fallback={null}>
        <MetricsSection projectKey={key} group='cost' />
      </Suspense>
    </>
  );
};

export default OpsProjectPage;
