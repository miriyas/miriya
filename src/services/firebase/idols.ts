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
import { FBIdolType, YearDescType } from '@/types/idols.d';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { COLLECTION, IDOL_COLLECTION_NAMES } from '@/types/firebase.d';
import { getUserName } from '@/utils';
import { createHistoryDoc } from '@/services/firebase/histories';

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
    createHistoryDoc(
      `${changed.join(', ')} 항목을 ${getUserName(user)} 님이 수정했습니다.`,
      TARGET_CATEGORY.IDOLS,
      newIdol.name,
    );
  });
};
