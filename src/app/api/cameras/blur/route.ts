import { NextRequest, NextResponse } from 'next/server';
import { getPlaiceholder } from 'plaiceholder';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const maker = searchParams.get('maker');
  const id = searchParams.get('id');
  const url = `${process.env.NEXT_PUBLIC_CDN_URL}/cameras/${maker}/${id}.jpg`;

  // console.log('get!~!!');

  const { base64 } = await getPlaiceholder(url, { size: 14 });
  return NextResponse.json(base64);
}
