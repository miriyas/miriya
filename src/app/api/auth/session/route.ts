import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { getMeApi } from '@/services/auth';

interface Cookie {
  name: string;
  value: string;
}

const cookiesToString = (rawCookies: Cookie[]) => {
  return rawCookies.map((cookie) => `${cookie.name}=${cookie.value}`).join('; ');
};

export const GET = async () => {
  const cookieStore = cookies();
  const cookiesString = cookiesToString(cookieStore.getAll());

  let currentUser = null;
  try {
    currentUser = await getMeApi(cookiesString).then((res) => res.data);
  } catch (error) {
    // do nothing
  }
  return NextResponse.json(currentUser);
};
