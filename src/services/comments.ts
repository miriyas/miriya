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
} from 'firebase/firestore';
import { Dispatch } from 'react';
import { SetStateAction } from 'jotai';

import { auth, db, initialTs } from '@/utils/firebase';
import { Comment, NewComment, TargetCategoryTypes, TARGET_CATEGORY } from '@/types/comments.d';
import { IDOL_COLLECTION_NAMES } from '@/types/idols.d';
import { COLLECTION } from '@/types/firebase.d';
import { getAdminUsers } from '@/services/auth';
import { getTSBefore } from '@/utils/date';

// Query ============================

/** 카테고리 내 모든 댓글을 삭제된걸 제외하고 정렬해서 불러옴 */
const commentsQuery = (category: TargetCategoryTypes, order: 'asc' | 'desc', limitCount: number) =>
  query(
    collection(db, COLLECTION.COMMENTS),
    where('targetCategory', '==', category),
    orderBy('createdAt', order), // inequality 오더는 항상 맨 위에 와야함
    orderBy('deletedAt'),
    limit(limitCount),
  );

/** 카테고리 내 모든 댓글을 삭제된걸 제외하고 불러옴 */
const commentsCounterQuery = (category: TargetCategoryTypes) =>
  query(collection(db, COLLECTION.COMMENTS), where('targetCategory', '==', category), orderBy('deletedAt'));

/** 카테고리 내 모든 댓글을 삭제된걸 제외하고 24시간내 작성된 것만 불러옴 */
const commentsCounterTodayQuery = (category: TargetCategoryTypes) =>
  query(
    collection(db, COLLECTION.COMMENTS),
    where('targetCategory', '==', category),
    where('createdAt', '>=', getTSBefore(1, 'day')),
    orderBy('createdAt', 'desc'), // inequality 필터는 항상 맨 위에 와야함
    orderBy('deletedAt'),
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
    orderBy('deletedAt'),
    orderBy('createdAt', order),
    limit(limitCount),
  );

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
) => {
  return onSnapshot(commentsInTargetQuery(category, targetId, 'desc', 1000), (querySnapshot) => {
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
  const lastComment = await getCommentsSnapshot(comment.targetCategory, 'desc', 1);
  await addDoc(collection(db, COLLECTION.COMMENTS), {
    ...comment,
    createdAt: serverTimestamp(),
    deletedAt: initialTs,
    commentNoInCategory: lastComment.docs[0].data().commentNoInCategory + 1,
  });

  if (comment.targetCategory === TARGET_CATEGORY.IDOLS) {
    const parentRef = doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS, comment.targetId!);
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
export const markDeleteComment = async (commentId: string, authorId: string) => {
  const adminUsers = await getAdminUsers();
  const currentUserId = auth.currentUser?.uid;
  const isAdmin = adminUsers.filter((admin) => admin.uid === currentUserId);

  if (!isAdmin && currentUserId !== authorId) return; // TODO: 서버로 기능을 넘겨야함
  await updateDoc(getCommentRef(commentId), {
    deletedAt: serverTimestamp(),
  });
};

/** 진짜 삭제, 언제 쓸지는 모르겠음 */
// export const deleteComment = async (commentId: string, authorId: string) => {
//   const uid = auth.currentUser?.uid;
//   if (uid !== authorId) return; // TODO: 서버로 기능을 넘겨야함
//   await deleteDoc(doc(db, COLLECTION.COMMENTS, commentId));
// };

// 아래는 배치 업데이트용

// export const batchUpdateCommentNoInCategory = async (category: TargetCategoryTypes) => {
//   const list = await getCommentsSnapshot(category, 'asc', 999_999);
//   let counter = 1;
//   list.docs.forEach((commentDoc) => {
//     updateDoc(commentDoc.ref, {
//       commentNoInCategory: counter,
//     });
//     counter += 1;
//   });
// };

// export const batchUpdateCommentLengthOfTarget = async () => {
//   const list = await getCommentsSnapshot(TARGET_CATEGORY.IDOLS, 'asc', 10000);
//   list.docs.forEach((commentDoc) => {
//     const { targetId } = commentDoc.data();
//     const parentRef = doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS, targetId!);
//     updateDoc(parentRef, {
//       commentsLength: increment(1),
//     });
//   });
// };

// export const batchUpdateComments = async () => {
//   const q = query(collection(db, COLLECTION.COMMENTS));
//   const snapshot = await getDocs(q);

//   snapshot.docs.forEach((commentDoc) => {
//     if (!commentDoc.data().deletedAt) {
//       updateDoc(commentDoc.ref, {
//         deletedAt: new Date(0),
//       });
//     }
//   });
// };
