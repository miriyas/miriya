// import { nanoid } from 'nanoid';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

import db from '@/utils/firebase';
import { IdolType, YearDescType } from '@/types/idols';

const ROOT = 'idolsPage';

const COLLECTION_NAMES = {
  IDOLS: 'idols',
  IDOL_YEARS: 'idolYears',
} as const;

export const getIdols = async (): Promise<IdolType[]> => {
  const idolsCol = collection(db, ROOT, 'data', COLLECTION_NAMES.IDOLS);
  const idolsSnapshot = await getDocs(idolsCol);
  const idolsList = idolsSnapshot.docs.map((item) => item.data() as IdolType);
  return idolsList;
};

export const getIdolYears = async (): Promise<YearDescType[]> => {
  const idolYearsCol = collection(db, ROOT, 'data', COLLECTION_NAMES.IDOL_YEARS);
  const idolYearsSnapshot = await getDocs(idolYearsCol);
  const idolYearsList = idolYearsSnapshot.docs.map((item) => item.data() as YearDescType);
  return idolYearsList;
};

const getIdolDocRef = (name: string) => {
  return doc(db, ROOT, 'data', COLLECTION_NAMES.IDOLS, name);
};

const getIdolYearDocRef = (year: string) => {
  return doc(db, ROOT, 'data', COLLECTION_NAMES.IDOL_YEARS, year);
};

// export const uploadIsols = async () => {

//   // IDOLS.forEach((idol) => {});

//   // // Set the value of 'NYC'

//   // // Update the population of 'SF'
//   // const sfRef = doc(db, 'cities', 'SF');
//   // batch.update(sfRef, { population: 1000000 });

//   // // Delete the city 'LA'
//   // const laRef = doc(db, 'cities', 'LA');
//   // batch.delete(laRef);

//   // Commit the batch
//   await batch.commit();
// };

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

// 다음 쿼리는 주가 CA인 모든 도시를 반환합니다.
// // Create a reference to the cities collection
// import { collection, query, where } from "firebase/firestore";
// const citiesRef = collection(db, "cities");

// // Create a query against the collection.
// const q = query(citiesRef, where("state", "==", "CA"));

// 다음 쿼리는 모든 수도를 반환합니다.
// import { collection, query, where } from "firebase/firestore";
// const citiesRef = collection(db, "cities");

// const q = query(citiesRef, where("capital", "==", true));
