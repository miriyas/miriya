import { NextRequest } from 'next/server';

import { createHistoryDoc } from '@/app/api/histories/services';

export const POST = async (request: NextRequest) => {
  await createHistoryDoc(await request.json());
  return new Response();
};
