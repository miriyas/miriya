// https://wneild.medium.com/tracking-document-timestamps-with-firestore-638a5522753c

import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  getCountFromServer,
  orderBy,
  limit,
  increment,
  Timestamp,
} from 'firebase/firestore';
import { Dispatch } from 'react';
import { SetStateAction } from 'jotai';

import { auth, db, initialTs } from '@/utils/firebase';
import { Comment, NewComment, SubTargetCategoryTypes, TargetCategoryTypes, TARGET_CATEGORY } from '@/types/comments.d';
import { CAMERA_COLLECTION_NAMES, COLLECTION, IDOL_COLLECTION_NAMES } from '@/types/firebase.d';
import { getAdminUsers } from '@/services/firebase/auth';
import { getTSBefore } from '@/utils/date';

// Query ============================

/** 모든 댓글을 삭제된걸 제외하고 정렬해서 불러옴 */
const allCommentsQuery = (order: 'asc' | 'desc', limitCount: number) =>
  query(
    collection(db, COLLECTION.COMMENTS),
    where('deletedAt', '==', new Timestamp(0, 0)),
    orderBy('createdAt', order), // inequality 오더는 항상 맨 위에 와야함
    limit(limitCount),
  );

/** 카테고리 내 모든 댓글을 삭제된걸 제외하고 정렬해서 불러옴 */
const commentsQuery = (category: TargetCategoryTypes, order: 'asc' | 'desc', limitCount: number) =>
  query(
    collection(db, COLLECTION.COMMENTS),
    where('targetCategory', '==', category),
    where('deletedAt', '==', new Timestamp(0, 0)),
    orderBy('createdAt', order), // inequality 오더는 항상 맨 위에 와야함
    limit(limitCount),
  );

/** 카테고리 내 모든 댓글을 삭제된걸 제외하고 정렬 없이 불러옴 */
const commentsCounterQuery = (category: TargetCategoryTypes) =>
  query(
    collection(db, COLLECTION.COMMENTS),
    where('targetCategory', '==', category),
    where('deletedAt', '==', new Timestamp(0, 0)),
  );

/** 카테고리 내 모든 댓글을 삭제된걸 제외하고 24시간내 작성된 것만 불러옴 */
const commentsCounterTodayQuery = (category: TargetCategoryTypes) =>
  query(
    collection(db, COLLECTION.COMMENTS),
    where('targetCategory', '==', category),
    where('deletedAt', '==', new Timestamp(0, 0)),
    where('createdAt', '>=', getTSBefore(1, 'day')),
    orderBy('createdAt', 'desc'), // inequality 필터는 항상 맨 위에 와야함
  );

/** 카테고리 내 타겟 내 모든 댓글을 삭제된걸 제외하고 정렬해서 불러옴 */
const commentsInTargetQuery = (
  category: TargetCategoryTypes,
  targetId: string,
  order: 'asc' | 'desc',
  limitCount: number,
) =>
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
  category: TargetCategoryTypes,
  targetSubCategory: SubTargetCategoryTypes,
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

export const getRecentComments = async (limitCount: number) => {
  const snapshot = await getDocs(allCommentsQuery('desc', limitCount));
  return snapshot.docs.map((item) => {
    return item.data() as Comment;
  });
};

const getCommentsSnapshot = async (category: TargetCategoryTypes, order: 'asc' | 'desc', limitCount: number) => {
  const snapshot = await getDocs(commentsQuery(category, order, limitCount));
  return snapshot;
};

/** 방명록 - 아이돌 등 해당 카테고리 전체를 가져올때 */
export const getComments = async (category: TargetCategoryTypes, limitCount: number) => {
  const snapshot = await getCommentsSnapshot(category, 'desc', limitCount);
  return snapshot.docs.map((item) => {
    return {
      ...item.data(),
      id: item.id,
    } as Comment;
  });
};

/** 아직 안씀 */
export const getCommentsRealtime = (
  category: TargetCategoryTypes,
  setComments: Dispatch<SetStateAction<Comment[]>>,
) => {
  return onSnapshot(commentsQuery(category, 'desc', 1000), (querySnapshot) => {
    const comments = querySnapshot.docs
      .filter((item) => !item.metadata.hasPendingWrites)
      .sort((a, b) => b.data().createdAt - a.data().createdAt)
      .map((item) => {
        return {
          ...item.data(),
          id: item.id,
        } as Comment;
      });
    setComments(comments);
  });
};

/** 아이돌 카드 등에서 댓글 불러올때 */
export const getCommentsInTargetRealtime = (
  category: TargetCategoryTypes,
  targetId: string,
  setComments: Dispatch<SetStateAction<Comment[]>>,
  targetSubCategory?: SubTargetCategoryTypes,
) => {
  const q = targetSubCategory
    ? commentsInTargetQueryWithSubCategory(category, targetSubCategory, targetId, 'desc', 1000)
    : commentsInTargetQuery(category, targetId, 'desc', 1000);
  return onSnapshot(q, (querySnapshot) => {
    const comments = querySnapshot.docs
      .filter((item) => !item.metadata.hasPendingWrites)
      .sort((a, b) => b.data().createdAt - a.data().createdAt)
      .map((item) => {
        return {
          ...item.data(),
          id: item.id,
        } as Comment;
      });
    setComments(comments);
  });
};

/** 방명록 홈 등에서 카테고리내 전체 댓글 갯수 불러올때 */
export const getCommentsCountInTarget = async (category: TargetCategoryTypes) => {
  const snapshotToday = await getCountFromServer(commentsCounterTodayQuery(category));
  const snapshotTotal = await getCountFromServer(commentsCounterQuery(category));
  return {
    today: snapshotToday.data().count,
    total: snapshotTotal.data().count,
  };
};

export const createCommentDoc = async (comment: NewComment) => {
  const lastCommentSnapshot = await getCommentsSnapshot(comment.targetCategory, 'desc', 1);
  const lastCommentCount = lastCommentSnapshot.docs[0] ? lastCommentSnapshot.docs[0].data().commentNoInCategory : 0;
  await addDoc(collection(db, COLLECTION.COMMENTS), {
    ...comment,
    createdAt: serverTimestamp(),
    deletedAt: initialTs,
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

// Ref ============================
const getCommentRef = (commentId: string) => {
  return doc(db, COLLECTION.COMMENTS, commentId);
};

export const editCommentDoc = async (comment: Comment) => {
  await updateDoc(getCommentRef(comment.id), {
    author: comment.author,
    body: comment.body,
    updatedAt: serverTimestamp(),
  });
};

/** 실제 삭제는 아니고 가짜 삭제 */
export const markDeleteComment = async (comment: Comment, authorId: string) => {
  const adminUsers = await getAdminUsers();
  const currentUserId = auth.currentUser?.uid;
  const isAdmin = adminUsers.filter((admin) => admin.uid === currentUserId);

  if (!isAdmin && currentUserId !== authorId) return; // TODO: 서버로 기능을 넘겨야함
  await updateDoc(getCommentRef(comment.id), {
    deletedAt: serverTimestamp(),
  });

  // 타겟의 commentsLength 감소시키기
  if (comment.targetCategory === TARGET_CATEGORY.IDOLS) {
    const parentRef = doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS, comment.targetId!);
    await updateDoc(parentRef, {
      commentsLength: increment(-1),
    });
  }
};

/** 진짜 삭제, 언제 쓸지는 모르겠음 */
// export const deleteComment = async (comment: Comment, authorId: string) => {
//   const uid = auth.currentUser?.uid;
//   if (uid !== authorId) return; // TODO: 서버로 기능을 넘겨야함
//   await deleteDoc(doc(db, COLLECTION.COMMENTS, comment.id));
// };
