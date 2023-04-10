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
const historiesQuery = (targetCategory: TargetCategoryTypes, order: 'asc' | 'desc', limitCount: number) =>
  query(
    collection(db, COLLECTION.HISTORIES),
    where('targetCategory', '==', targetCategory),
    orderBy('createdAt', order),
    limit(limitCount),
  );

/** 카테고리 내 타겟 내 모든 기록을 정렬해서 불러옴 */
const historiesInTargetQuery = (
  targetCategory: TargetCategoryTypes,
  targetId: string,
  order: 'asc' | 'desc',
  limitCount: number,
) =>
  query(
    collection(db, COLLECTION.HISTORIES),
    where('targetCategory', '==', targetCategory),
    where('targetId', '==', targetId),
    orderBy('createdAt', order),
    limit(limitCount),
  );

/** 카테고리 내 서브 카테고리 내 타겟 내 모든 기록을 정렬해서 불러옴
 * 펜탁스에서 사용 */
const historiesInTargetQueryWithSubCategory = (
  targetCategory: TargetCategoryTypes,
  targetSubCategory: SubTargetCategoryTypes,
  targetId: string,
  order: 'asc' | 'desc',
  limitCount: number,
) =>
  query(
    collection(db, COLLECTION.HISTORIES),
    where('targetCategory', '==', targetCategory),
    where('targetSubCategory', '==', targetSubCategory),
    where('targetId', '==', targetId),
    orderBy('createdAt', order),
    limit(limitCount),
  );

const getHistoriesSnapshot = async (targetCategory: TargetCategoryTypes, order: 'asc' | 'desc', limitCount: number) => {
  const snapshot = await getDocs(historiesQuery(targetCategory, order, limitCount));
  return snapshot;
};

/** 방명록 - 아이돌 등 해당 카테고리 전체 기록을 가져올때 */
export const getHistories = async (targetCategory: TargetCategoryTypes, limitCount: number) => {
  const snapshot = await getHistoriesSnapshot(targetCategory, 'desc', limitCount);
  return snapshot.docs.map((item) => {
    return {
      ...item.data(),
      id: item.id,
    } as History;
  });
};

export const getHistoriesInTargetRealtime = (
  targetCategory: TargetCategoryTypes,
  targetId: string,
  setHistories: Dispatch<SetStateAction<History[]>>,
  targetSubCategory?: SubTargetCategoryTypes,
) => {
  const q = targetSubCategory
    ? historiesInTargetQueryWithSubCategory(targetCategory, targetSubCategory, targetId, 'desc', 1000)
    : historiesInTargetQuery(targetCategory, targetId, 'desc', 1000);
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

export const createHistoryDoc = async (
  body: string,
  targetCategory: TargetCategoryTypes,
  targetId: string,
  targetName: string,
  targetSubCategory?: SubTargetCategoryTypes,
) => {
  if (targetSubCategory) {
    await addDoc(collection(db, COLLECTION.HISTORIES), {
      body,
      targetCategory,
      targetSubCategory,
      targetId,
      targetName,
      createdAt: serverTimestamp(),
    });
  } else {
    await addDoc(collection(db, COLLECTION.HISTORIES), {
      body,
      targetCategory,
      targetId,
      targetName,
      createdAt: serverTimestamp(),
    });
  }
};
