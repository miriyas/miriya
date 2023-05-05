// eslint-disable-next-line camelcase
import { NextRequest, NextResponse, unstable_revalidateTag } from 'next/server';

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag');
  if (tag) unstable_revalidateTag(tag);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
