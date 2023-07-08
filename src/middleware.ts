import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/example/middleware') {
    const sessionCookie = request.cookies.get('session');
    return NextResponse.redirect(
      new URL(`/example/middleware/redirected?cookie=${sessionCookie?.value ?? '로그인 안됨'}`, request.url),
    );
  }
  return null;
}

export const config = {
  matcher: ['/api/:path*', '/example/:path*'],
};
