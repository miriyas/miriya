import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag') || '/';
  revalidateTag(tag, 'max');
  // 로컬에서 했을 경우, 프로덕션도 해준다.
  // NODE_ENV must be the check: ENVIRONMENT is not set anywhere, so production called itself
  // again and again without end (each call started the next one).
  if (process.env.NODE_ENV === 'development') {
    fetch(`https://miriya.net/api/revalidate/tag?tag=${encodeURIComponent(tag)}`);
  }
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
