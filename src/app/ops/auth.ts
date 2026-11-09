import 'server-only';

import { cache } from 'react';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import { getMeApi } from '@/services/auth';
import { ROLE } from '@/types/auth';
import { cookiesToString } from '@/utils/cookie';

const isAdmin = cache(async () => {
  const cookieStore = await cookies();
  if (!cookieStore.get('session')) return false;
  try {
    const me = await getMeApi(cookiesToString(cookieStore.getAll())).then((res) => res.data);
    return me?.role === ROLE.ADMIN;
  } catch {
    return false;
  }
});

/**
 * Only the admin sees /ops. Everyone else gets 404, so the pages do not show that they exist.
 * Every page calls this too, not only the layout: a client navigation renders the page without the layout.
 */
export const requireAdmin = async () => {
  if (!(await isAdmin())) notFound();
};
