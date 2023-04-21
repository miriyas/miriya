import 'server-only';

import { NextResponse } from 'next/server';

import { getCamerasSnapshot } from '@/services/firebase/cameras';

export const GET = async () => {
  const data = await getCamerasSnapshot();
  return NextResponse.json(data);
};
