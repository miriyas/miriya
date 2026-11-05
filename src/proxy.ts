import { NextRequest, NextResponse } from 'next/server';

// Next 16 renamed middleware to proxy.
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/example/middleware') {
    const sessionCookie = request.cookies.get('session');
    return NextResponse.redirect(
      new URL(`/example/middleware/redirected?cookie=${sessionCookie?.value ?? '로그인 안됨'}`, request.url),
    );
  }
  return NextResponse.next();
}

export const config = {
  // Only the example page uses it. (Before, every /api request went through it for nothing.)
  matcher: ['/example/middleware'],
};

export default proxy;
