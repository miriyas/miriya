// https://wneild.medium.com/tracking-document-timestamps-with-firestore-638a5522753c

import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';

import { db } from '@/utils/firebase';
import { SubTargetCategoryTypes, TargetCategoryTypes } from '@/types/comments.d';
import { COLLECTION } from '@/types/firebase.d';
import { History } from '@/types/histories.d';

// Query ============================

/** 카테고리 내 모든 기록을 정렬해서 불러옴 */
const historiesQuery = (category: TargetCategoryTypes, order: 'asc' | 'desc', limitCount: number) =>
  query(
    collection(db, COLLECTION.HISTORIES),
    where('targetCategory', '==', category),
    orderBy('createdAt', order),
    limit(limitCount),
  );

/** 카테고리 내 타겟 내 모든 기록을 정렬해서 불러옴 */
const historiesInTargetQuery = (
  category: TargetCategoryTypes,
  targetId: string,
  order: 'asc' | 'desc',
  limitCount: number,
) =>
  query(
    collection(db, COLLECTION.HISTORIES),
    where('targetCategory', '==', category),
    where('targetId', '==', targetId),
    orderBy('createdAt', order),
    limit(limitCount),
  );

/** 카테고리 내 서브 카테고리 내 타겟 내 모든 기록을 정렬해서 불러옴
 * 펜탁스에서 사용 */
const historiesInTargetQueryWithSubCategory = (
  category: TargetCategoryTypes,
  subCategory: SubTargetCategoryTypes,
  targetId: string,
  order: 'asc' | 'desc',
  limitCount: number,
) =>
  query(
    collection(db, COLLECTION.HISTORIES),
    where('targetCategory', '==', category),
    where('targetSubCategory', '==', subCategory),
    where('targetId', '==', targetId),
    orderBy('createdAt', order),
    limit(limitCount),
  );

const getHistoriesSnapshot = async (category: TargetCategoryTypes, order: 'asc' | 'desc', limitCount: number) => {
  const snapshot = await getDocs(historiesQuery(category, order, limitCount));
  return snapshot;
};

/** 방명록 - 아이돌 등 해당 카테고리 전체 기록을 가져올때 */
export const getHistories = async (category: TargetCategoryTypes, limitCount: number) => {
  const snapshot = await getHistoriesSnapshot(category, 'desc', limitCount);
  return snapshot.docs.map((item) => {
    return {
      ...item.data(),
      id: item.id,
    } as History;
  });
};

export const getHistoriesInTargetRealtime = (
  category: TargetCategoryTypes,
  targetId: string,
  setHistories: Dispatch<SetStateAction<History[]>>,
  subCategory?: SubTargetCategoryTypes,
) => {
  const q = subCategory
    ? historiesInTargetQueryWithSubCategory(category, subCategory, targetId, 'desc', 1000)
    : historiesInTargetQuery(category, targetId, 'desc', 1000);
  return onSnapshot(q, (querySnapshot) => {
    const histories = querySnapshot.docs
      .filter((item) => !item.metadata.hasPendingWrites)
      .sort((a, b) => b.data().createdAt - a.data().createdAt)
      .map((item) => {
        return {
          ...item.data(),
          id: item.id,
        } as History;
      });
    setHistories(histories);
  });
};

export const createHistoryDoc = async (body: string, targetCategory: TargetCategoryTypes, targetId: string) => {
  await addDoc(collection(db, COLLECTION.HISTORIES), {
    body,
    targetCategory,
    targetId,
    createdAt: serverTimestamp(),
  });
};
