import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';

import { COLLECTION } from '@/types/firebase.d';
import { History } from '@/types/histories.d';
import { db } from '@/utils/db';

import { createHistoryDoc } from '@/app/api/histories/services';

/** 방명록 - 아이돌 등 해당 카테고리 전체 기록을 정렬해서 불러옴 */
const historiesQuery = (targetCategory: string, order: 'asc' | 'desc', limitCount: number) =>
  query(
    collection(db, COLLECTION.HISTORIES),
    where('targetCategory', '==', targetCategory),
    orderBy('createdAt', order),
    limit(limitCount),
  );

/** 카테고리 내 타겟 내 모든 기록을 정렬해서 불러옴 */
const historiesInTargetQuery = (targetCategory: string, targetId: string, order: 'asc' | 'desc', limitCount: number) =>
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
  targetCategory: string,
  targetSubCategory: string,
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

interface GetHistoriesParams {
  targetCategory: string;
  targetId: string;
  targetSubCategory: string;
}

const getHistories = async (props: GetHistoriesParams) => {
  const { targetCategory, targetId, targetSubCategory } = props;

  let q;
  if (targetId === 'undefined') {
    q = historiesQuery(targetCategory, 'desc', 1000);
  } else {
    q =
      targetSubCategory === 'undefined'
        ? historiesInTargetQuery(targetCategory, targetId, 'desc', 1000)
        : historiesInTargetQueryWithSubCategory(targetCategory, targetSubCategory, targetId, 'desc', 1000);
  }

  const snapshot = await getDocs(q);
  return snapshot.docs.map((item) => {
    return {
      ...item.data(),
      id: item.id,
    } as History;
  });
};

// export const getHistoriesInTargetRealtime = (
//   targetCategory: TargetCategoryTypes,
//   targetId: string,
//   setHistories: Dispatch<SetStateAction<History[]>>,
//   targetSubCategory?: SubTargetCategoryTypes,
// ) => {
//   const q = targetSubCategory
//     ? historiesInTargetQueryWithSubCategory(targetCategory, targetSubCategory, targetId, 'desc', 1000)
//     : historiesInTargetQuery(targetCategory, targetId, 'desc', 1000);
//   return onSnapshot(q, (querySnapshot) => {
//     const histories = querySnapshot.docs
//       .filter((item) => !item.metadata.hasPendingWrites)
//       .sort((a, b) => b.data().createdAt - a.data().createdAt)
//       .map((item) => {
//         return {
//           ...item.data(),
//           id: item.id,
//         } as History;
//       });
//     setHistories(histories);
//   });
// };

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const targetCategory = searchParams.get('targetCategory') ?? '';
  const targetSubCategory = searchParams.get('targetSubCategory') ?? '';
  const targetId = searchParams.get('targetId') ?? '';

  const data = await getHistories({ targetCategory, targetSubCategory, targetId });
  return NextResponse.json(data);
};

export const POST = async (request: NextRequest) => {
  await createHistoryDoc(await request.json());
  return new Response();
};
