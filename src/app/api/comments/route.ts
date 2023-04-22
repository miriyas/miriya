import admin from 'firebase-admin';
import { NextRequest, NextResponse } from 'next/server';
import {
  collection,
  doc,
  getDocs,
  increment,
  limit,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore';

import { CAMERA_COLLECTION_NAMES, COLLECTION, IDOL_COLLECTION_NAMES } from '@/types/firebase.d';
import { Comment, NewComment, TargetCategoryTypes, TARGET_CATEGORY } from '@/types/comments.d';
import { db, initialTs } from '@/utils/firebase';
import { db as adminDb, initialAdminTs } from '@/utils/db';

import { getAdminUsers } from '@/app/api/utils';

/** 카테고리 내 타겟 내 모든 댓글을 삭제된걸 제외하고 정렬해서 불러옴 */
const commentsInTargetQuery = (category: string, targetId: string, order: 'asc' | 'desc', limitCount: number) =>
  query(
    collection(db, COLLECTION.COMMENTS),
    where('targetCategory', '==', category),
    where('targetId', '==', targetId),
    where('deletedAt', '==', new Timestamp(0, 0)),
    orderBy('createdAt', order),
    limit(limitCount),
  );

/** 카테고리 내, 서브 카테고리 내 타겟 내 모든 댓글을 삭제된걸 제외하고 정렬해서 불러옴
 *  펜탁스에서 사용 */
const commentsInTargetQueryWithSubCategory = (
  category: string,
  targetSubCategory: string,
  targetId: string,
  order: 'asc' | 'desc',
  limitCount: number,
) =>
  query(
    collection(db, COLLECTION.COMMENTS),
    where('targetCategory', '==', category),
    where('targetSubCategory', '==', targetSubCategory),
    where('targetId', '==', targetId),
    where('deletedAt', '==', new Timestamp(0, 0)),
    orderBy('createdAt', order),
    limit(limitCount),
  );

interface GetCommentsParams {
  targetCategory: string;
  targetId: string;
  targetSubCategory: string;
}

/** 아이돌 카드 등에서 댓글 불러올때 */
const getComments = async (props: GetCommentsParams) => {
  const { targetCategory, targetId, targetSubCategory } = props;
  const q =
    targetSubCategory === 'undefined'
      ? commentsInTargetQuery(targetCategory, targetId, 'desc', 1000)
      : commentsInTargetQueryWithSubCategory(targetCategory, targetSubCategory, targetId, 'desc', 1000);
  const snapshot = await getDocs(q);
  return snapshot.docs
    .sort((a, b) => b.data().createdAt - a.data().createdAt)
    .map((item) => {
      return {
        ...item.data(),
        id: item.id,
      } as Comment;
    });
};

/** 카테고리 내 모든 댓글을 삭제된걸 제외하고 정렬해서 불러옴 */
const commentsQuery = (category: TargetCategoryTypes, order: 'asc' | 'desc', limitCount: number) =>
  query(
    collection(db, COLLECTION.COMMENTS),
    where('targetCategory', '==', category),
    where('deletedAt', '==', initialTs),
    orderBy('createdAt', order), // inequality 오더는 항상 맨 위에 와야함
    limit(limitCount),
  );

const createCommentDoc = async (comment: NewComment) => {
  const lastCommentSnapshot = await getDocs(commentsQuery(comment.targetCategory, 'desc', 1));
  const lastCommentCount = lastCommentSnapshot.docs[0] ? lastCommentSnapshot.docs[0].data().commentNoInCategory : 0;
  await adminDb.collection(COLLECTION.COMMENTS).add({
    ...comment,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    deletedAt: initialAdminTs,
    commentNoInCategory: lastCommentCount + 1,
  });

  // 타겟의 commentsLength 증가시키기
  if (comment.targetCategory === TARGET_CATEGORY.IDOLS) {
    const parentRef = doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS, comment.targetId!);
    await updateDoc(parentRef, {
      commentsLength: increment(1),
    });
  }
  if (comment.targetCategory === TARGET_CATEGORY.CAMERA) {
    const parentRef = doc(db, COLLECTION.CAMERAS, 'data', CAMERA_COLLECTION_NAMES.CAMERA, comment.targetId!);
    await updateDoc(parentRef, {
      commentsLength: increment(1),
    });
  }
};

const editCommentDoc = async (comment: Comment) => {
  await updateDoc(doc(db, COLLECTION.COMMENTS, comment.id), {
    author: comment.author,
    body: comment.body,
    updatedAt: serverTimestamp(),
  });
};

/** 실제 삭제는 아니고 가짜 삭제 */
const deleteCommentDoc = async (commentId: string, uid: string) => {
  const targetDoc = await adminDb.collection(COLLECTION.COMMENTS).doc(commentId);
  const targetSnapshot = await targetDoc.get();
  const targetData = (await targetSnapshot.data()) as Comment;

  const adminUsers = await getAdminUsers();
  const isAdmin = adminUsers.filter((adminUser) => adminUser.uid === uid);

  if (!isAdmin && uid !== targetData.authorId) return; // TODO: 서버로 기능을 넘겨야함
  adminDb.collection(COLLECTION.COMMENTS).doc(commentId).update({
    deletedAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  // 타겟의 commentsLength 감소시키기
  if (targetData.targetCategory === TARGET_CATEGORY.IDOLS) {
    const parentRef = doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS, targetData.targetId!);
    await updateDoc(parentRef, {
      commentsLength: increment(-1),
    });
  }
  if (targetData.targetCategory === TARGET_CATEGORY.CAMERA) {
    const parentRef = doc(db, COLLECTION.CAMERAS, 'data', CAMERA_COLLECTION_NAMES.CAMERA, targetData.targetId!);
    await updateDoc(parentRef, {
      commentsLength: increment(-1),
    });
  }
};

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const targetCategory = searchParams.get('targetCategory') ?? '';
  const targetSubCategory = searchParams.get('targetSubCategory') ?? '';
  const targetId = searchParams.get('targetId') ?? '';

  const data = await getComments({ targetCategory, targetSubCategory, targetId });
  return NextResponse.json(data);
};

export const POST = async (request: NextRequest) => {
  await createCommentDoc(await request.json());
  return new Response();
};

export const PATCH = async (request: NextRequest) => {
  await editCommentDoc(await request.json());
  return new Response();
};

export const DELETE = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get('uid') ?? '';
  const commentId = searchParams.get('commentId') ?? '';
  await deleteCommentDoc(commentId, uid);
  return new Response();
};
