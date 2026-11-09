import { Suspense } from 'react';

import { Loading, Section } from '@/containers/ops/parts';
import { AiSection } from '@/containers/ops/sections';

import { requireAdmin } from '../auth';

export const dynamic = 'force-dynamic';

/** AI cost across projects (the data comes from charr's ai_usage table, which also holds Claude Code usage). */
const OpsAiPage = async () => {
  await requireAdmin();
  const now = new Date().toISOString();
  return (
    <Section title='AI 비용'>
      <Suspense fallback={<Loading label='AI 비용' />}>
        <AiSection now={now} />
      </Suspense>
    </Section>
  );
};

export default OpsAiPage;
