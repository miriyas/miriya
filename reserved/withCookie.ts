import { cookies } from 'next/headers';

import { apiBe } from '@/services';

interface Cookie {
  name: string;
  value: string;
}

const cookiesToString = (rawCookies: Cookie[]) => {
  return rawCookies.map((cookie) => `${cookie.name}=${cookie.value}`).join('; ');
};

apiBe.interceptors.request.use((config) => {
  const cookieStore = cookies();
  const cookiesString = cookiesToString(cookieStore.getAll());
  config.headers.Cookie = cookiesString;
  return config;
});
