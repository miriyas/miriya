import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

import { db } from '@/utils/firebase';
import { FBIdolType, IdolType, YearDescType } from '@/types/idols.d';
import { COLLECTION } from '@/types/firebase.d';

export const IDOL_COLLECTION_NAMES = {
  IDOLS: 'idols',
  IDOL_YEARS: 'idolYears',
} as const;

export const getIdols = async (): Promise<FBIdolType[]> => {
  const idolsCol = collection(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS);
  const snapshot = await getDocs(idolsCol);
  return snapshot.docs.map((item) => item.data() as FBIdolType);
};

export const getIdolYears = async (): Promise<YearDescType[]> => {
  const idolYearsCol = collection(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOL_YEARS);
  const idolYearsSnapshot = await getDocs(idolYearsCol);
  const idolYearsList = idolYearsSnapshot.docs.map((item) => item.data() as YearDescType);
  return idolYearsList;
};

// 아래는 배치 업데이트용

export const getIdolDocRef = (name: string) => {
  return doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS, name);
};

const getIdolYearDocRef = (year: string) => {
  return doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOL_YEARS, year);
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
