import 'server-only';

import { NextResponse } from 'next/server';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '@/utils/db';
import { YearDescType } from '@/types/idols.d';
import { COLLECTION, IDOL_COLLECTION_NAMES } from '@/types/firebase.d';

const getIdolYears = async (): Promise<YearDescType[]> => {
  const idolYearsCol = collection(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOL_YEARS);
  const idolYearsSnapshot = await getDocs(idolYearsCol);
  const idolYearsList = idolYearsSnapshot.docs.map((item) => item.data() as YearDescType);
  return idolYearsList;
};

export const GET = async () => {
  const data = await getIdolYears();
  return NextResponse.json(data);
};
