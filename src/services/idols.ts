import {
  collection,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { User } from 'firebase/auth';
import { Dispatch, SetStateAction } from 'react';

import { db } from '@/utils/firebase';
import { FBIdolType, IDOL_COLLECTION_NAMES, YearDescType } from '@/types/idols.d';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { COLLECTION } from '@/types/firebase.d';
import { createSystemCommentDoc } from '@/services/comments';
import { getUserName } from '@/utils';

const getIdolsSnapshot = async (order: 'asc' | 'desc', limitCount: number) => {
  const q = query(
    collection(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS),
    orderBy('debutYear', order),
    orderBy('name', order),
    limit(limitCount),
  );
  const snapshot = await getDocs(q);
  return snapshot;
};

export const getIdols = async (): Promise<FBIdolType[]> => {
  const snapshot = await getIdolsSnapshot('asc', 1000);
  return snapshot.docs.map((item) => item.data() as FBIdolType);
};

export const getIdolsRealtime = (setIdols: Dispatch<SetStateAction<FBIdolType[]>>) => {
  const q = query(
    collection(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS),
    orderBy('debutYear', 'asc'),
    orderBy('name', 'asc'),
    limit(1000),
  );
  return onSnapshot(q, (querySnapshot) => {
    const idols = querySnapshot.docs
      .sort((a, b) => b.data().debutYear - a.data().debutYear)
      .map((item) => {
        return item.data() as FBIdolType;
      });
    setIdols(idols);
  });
};

export const getIdolYears = async (): Promise<YearDescType[]> => {
  const idolYearsCol = collection(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOL_YEARS);
  const idolYearsSnapshot = await getDocs(idolYearsCol);
  const idolYearsList = idolYearsSnapshot.docs.map((item) => item.data() as YearDescType);
  return idolYearsList;
};

export const editIdolDoc = async (newIdol: FBIdolType, changed: string[], user: User) => {
  const ref = doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS, newIdol.name);
  updateDoc(ref, {
    category: newIdol.category,
    debutYear: newIdol.debutYear,
    desc: newIdol.desc,
    endYear: newIdol.endYear,
    youtube: newIdol.youtube,
    updatedAt: serverTimestamp(),
  }).then(() => {
    createSystemCommentDoc(
      `${changed.join(', ')} 항목을 ${getUserName(user)} 님이 수정했습니다.`,
      TARGET_CATEGORY.IDOLS,
      newIdol.name,
    );
  });
};

// 아래는 배치 업데이트용

// export const getIdolDocRef = (name: string) => {
//   return doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS, name);
// };

// const getIdolYearDocRef = (year: string) => {
//   return doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOL_YEARS, year);
// };

// export const createIdolDoc = async (idol: IdolType) => {
//   const ref = getIdolDocRef(idol.name);
//   const docSnap = await getDoc(ref);

//   if (!docSnap.exists()) {
//     await setDoc(ref, idol);
//   }
// };

// export const createIdolYearDoc = async (yearDesc: YearDescType) => {
//   const ref = getIdolYearDocRef(String(yearDesc.year));
//   const docSnap = await getDoc(ref);

//   if (!docSnap.exists()) {
//     await setDoc(ref, yearDesc);
//   }
// };

// 1. idol 다 돌며 commentsLength 전부 0으로 초기화
// export const batchUpdateIdols = async () => {
//   const q = query(collection(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS));
//   const snapshot = await getDocs(q);
//   snapshot.docs.forEach((item) => {
//     updateDoc(item.ref, {
//       commentsLength: 0,
//     });
//   });
// };
