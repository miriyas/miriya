// https://wneild.medium.com/tracking-document-timestamps-with-firestore-638a5522753c

import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

import { db } from '@/utils/firebase';
import { TargetCategoryTypes } from '@/types/comments.d';
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
