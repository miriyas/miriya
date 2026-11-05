import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import { getMeApi } from '@/services/auth';
import { ROLE } from '@/types/auth';
import { cookiesToString } from '@/utils/cookie';
import OpsDashboard from '@/containers/ops';
import { getOpsSources } from './data';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Ops | MIRIYA',
  robots: { index: false, follow: false },
};

/** Only the admin sees this page. Everyone else gets 404, so the page does not show that it exists. */
const isAdmin = async () => {
  const cookieStore = await cookies();
  if (!cookieStore.get('session')) return false;
  try {
    const me = await getMeApi(cookiesToString(cookieStore.getAll())).then((res) => res.data);
    return me?.role === ROLE.ADMIN;
  } catch {
    return false;
  }
};

const OpsPage = async () => {
  if (!(await isAdmin())) notFound();
  const sources = await getOpsSources();
  return <OpsDashboard sources={sources} renderedAt={new Date().toISOString()} />;
};

export default OpsPage;
