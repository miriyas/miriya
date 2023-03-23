import { NextRequest, NextResponse } from 'next/server';

import { getCameraDataFromURL } from '../utils';

interface Props {
  params: {
    id: string;
  };
}

export async function GET(_: NextRequest, { params }: Props) {
  const data = await getCameraDataFromURL(params.id);
  return NextResponse.json(data);
}
