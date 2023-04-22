import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { collection, getCountFromServer, orderBy, query, Timestamp, where } from 'firebase/firestore';

import { db } from '@/utils/db';
import { COLLECTION } from '@/types/firebase.d';
import { getTSBefore } from '@/utils/date';

/** 카테고리 내 모든 댓글을 삭제된걸 제외하고 정렬 없이 불러옴 */
const commentsCounterQuery = (category: string) =>
  query(
    collection(db, COLLECTION.COMMENTS),
    where('targetCategory', '==', category),
    where('deletedAt', '==', new Timestamp(0, 0)),
  );

/** 카테고리 내 모든 댓글을 삭제된걸 제외하고 24시간내 작성된 것만 불러옴 */
const commentsCounterTodayQuery = (category: string) =>
  query(
    collection(db, COLLECTION.COMMENTS),
    where('targetCategory', '==', category),
    where('deletedAt', '==', new Timestamp(0, 0)),
    where('createdAt', '>=', getTSBefore(1, 'day')),
    orderBy('createdAt', 'desc'), // inequality 필터는 항상 맨 위에 와야함
  );

/** 방명록 홈 등에서 카테고리내 전체 댓글 갯수 불러올때 */
const getCommentsCountInTarget = async (category: string) => {
  const snapshotToday = await getCountFromServer(commentsCounterTodayQuery(category));
  const snapshotTotal = await getCountFromServer(commentsCounterQuery(category));
  return {
    today: snapshotToday.data().count,
    total: snapshotTotal.data().count,
  };
};

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') ?? '';
  const data = await getCommentsCountInTarget(category);
  return NextResponse.json(data);
};
