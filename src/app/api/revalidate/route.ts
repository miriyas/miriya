import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/';
  revalidatePath(path);
  // 로컬에서 했을 경우, 프로덕션도 해준다.
  if (process.env.ENVIRONMENT !== 'production') {
    fetch(`https://miriya.net/api/revalidate?path=${path}`);
  }
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
