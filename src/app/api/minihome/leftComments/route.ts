import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs, limit, orderBy, query, Timestamp, where } from 'firebase/firestore';

import { db } from '@/utils/db';
import { COLLECTION } from '@/types/firebase.d';

/** 모든 댓글을 삭제된걸 제외하고 정렬해서 불러옴 */
const allCommentsQuery = (order: 'asc' | 'desc', limitCount: number) =>
  query(
    collection(db, COLLECTION.COMMENTS),
    where('deletedAt', '==', new Timestamp(0, 0)),
    orderBy('createdAt', order), // inequality 오더는 항상 맨 위에 와야함
    limit(limitCount),
  );

const getRecentComments = async (limitCount: number) => {
  const snapshot = await getDocs(allCommentsQuery('desc', limitCount));
  return snapshot.docs.map((item) => {
    return item.data() as Comment;
  });
};

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const limitCount = searchParams.get('limitCount') ?? 0;
  const data = await getRecentComments(Number(limitCount));
  return NextResponse.json(data);
};
