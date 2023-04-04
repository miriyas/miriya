// import { nanoid } from 'nanoid';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

import { db } from '@/utils/firebase';
import { IdolType, YearDescType } from '@/types/idols.d';
import { COLLECTION } from '@/types/firebase.d';

const COLLECTION_NAMES = {
  IDOLS: 'idols',
  IDOL_YEARS: 'idolYears',
} as const;

export const getIdols = async (): Promise<IdolType[]> => {
  const idolsCol = collection(db, COLLECTION.IDOLS, 'data', COLLECTION_NAMES.IDOLS);
  const idolsSnapshot = await getDocs(idolsCol);
  const idolsList = idolsSnapshot.docs.map((item) => item.data() as IdolType);
  return idolsList;
};

export const getIdolYears = async (): Promise<YearDescType[]> => {
  const idolYearsCol = collection(db, COLLECTION.IDOLS, 'data', COLLECTION_NAMES.IDOL_YEARS);
  const idolYearsSnapshot = await getDocs(idolYearsCol);
  const idolYearsList = idolYearsSnapshot.docs.map((item) => item.data() as YearDescType);
  return idolYearsList;
};

const getIdolDocRef = (name: string) => {
  return doc(db, COLLECTION.IDOLS, 'data', COLLECTION_NAMES.IDOLS, name);
};

const getIdolYearDocRef = (year: string) => {
  return doc(db, COLLECTION.IDOLS, 'data', COLLECTION_NAMES.IDOL_YEARS, year);
};

export const createIdolDoc = async (idol: IdolType) => {
  const ref = getIdolDocRef(idol.name);
  const docSnap = await getDoc(ref);

  if (!docSnap.exists()) {
    await setDoc(ref, idol);
  }
};

export const createIdolYearDoc = async (yearDesc: YearDescType) => {
  const ref = getIdolYearDocRef(String(yearDesc.year));
  const docSnap = await getDoc(ref);

  if (!docSnap.exists()) {
    await setDoc(ref, yearDesc);
  }
};
