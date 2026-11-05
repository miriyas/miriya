import { NextRequest, NextResponse } from 'next/server';

/**
 * /ops is for the admin only. The check must run here, before rendering: the root layout
 * streams the page inside <Suspense>, so notFound() in the page can only send a 404 page
 * with status 200. Here a non-admin gets a real 404 (the page also checks again).
 */
const isAdmin = async (request: NextRequest) => {
  const cookie = request.headers.get('cookie');
  if (!request.cookies.get('session') || !cookie) return false;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}/api/auth/session`, {
      headers: { cookie },
      cache: 'no-store',
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return false;
    const me = await res.json();
    return me?.role === 'ADMIN';
  } catch {
    return false;
  }
};

// Next 16 renamed middleware to proxy.
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/ops' || pathname.startsWith('/ops/')) {
    if (await isAdmin(request)) return NextResponse.next();
    // Render the normal not-found page with status 404, without saying that /ops exists.
    return NextResponse.rewrite(new URL('/_not-found', request.url), { status: 404 });
  }

  if (pathname === '/example/middleware') {
    const sessionCookie = request.cookies.get('session');
    return NextResponse.redirect(
      new URL(`/example/middleware/redirected?cookie=${sessionCookie?.value ?? '로그인 안됨'}`, request.url),
    );
  }
  return NextResponse.next();
}

export const config = {
  // Only these pages need it. (Before, every /api request went through it for nothing.)
  matcher: ['/ops', '/ops/:path*', '/example/middleware'],
};

export default proxy;
