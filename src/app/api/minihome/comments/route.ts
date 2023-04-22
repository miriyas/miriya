import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs, limit, orderBy, query, Timestamp, where } from 'firebase/firestore';

import { db } from '@/utils/firebase';
import { Comment } from '@/types/comments.d';
import { COLLECTION } from '@/types/firebase.d';

/** 카테고리 내 모든 댓글을 삭제된걸 제외하고 정렬해서 불러옴 */
const commentsQuery = (category: string, order: 'asc' | 'desc', limitCount: number) =>
  query(
    collection(db, COLLECTION.COMMENTS),
    where('targetCategory', '==', category),
    where('deletedAt', '==', new Timestamp(0, 0)),
    orderBy('createdAt', order), // inequality 오더는 항상 맨 위에 와야함
    limit(limitCount),
  );
const getCommentsSnapshot = async (category: string, order: 'asc' | 'desc', limitCount: number) => {
  const snapshot = await getDocs(commentsQuery(category, order, limitCount));
  return snapshot;
};

/** 방명록 - 아이돌 등 해당 카테고리 전체를 가져올때 */
const getComments = async (category: string, limitCount: number) => {
  const snapshot = await getCommentsSnapshot(category, 'desc', limitCount);
  return snapshot.docs.map((item) => {
    return {
      ...item.data(),
      id: item.id,
    } as Comment;
  });
};

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') ?? '';
  const limitCount = searchParams.get('limitCount') ?? '';
  const data = await getComments(category, Number(limitCount));
  return NextResponse.json(data);
};
