import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag') || '/';
  revalidateTag(tag);
  // 로컬에서 했을 경우, 프로덕션도 해준다.
  if (process.env.ENVIRONMENT !== 'production') {
    fetch(`https://miriya.net/api/revalidate/tag?tag=${tag}`);
  }
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
