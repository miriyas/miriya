// https://wneild.medium.com/tracking-document-timestamps-with-firestore-638a5522753c

import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
  getCountFromServer,
  orderBy,
  limit,
  // getDoc,
  increment,
} from 'firebase/firestore';
import { Dispatch } from 'react';
import { SetStateAction } from 'jotai';

import { auth, db } from '@/utils/firebase';
import { Comment, NewComment, TargetCategoryTypes, TARGET_CATEGORY } from '@/types/comments.d';
import { COLLECTION } from '@/types/firebase.d';
import { getAdminUsers } from '@/services/auth';
import { getTSBefore } from '@/utils/date';
import { IDOL_COLLECTION_NAMES } from '@/services/idols';

const getCommentsSnapshot = async (category: TargetCategoryTypes, order: 'asc' | 'desc', limitCount: number) => {
  const q = query(
    collection(db, COLLECTION.COMMENTS),
    where('targetCategory', '==', category),
    orderBy('createdAt', order),
    limit(limitCount),
  );
  const snapshot = await getDocs(q);
  return snapshot;
};

export const getComments = async (category: TargetCategoryTypes, limitCount: number) => {
  const snapshot = await getCommentsSnapshot(category, 'desc', limitCount);
  return snapshot.docs.map((item) => {
    return {
      ...item.data(),
      id: item.id,
    } as Comment;
  });
};

export const getCommentsRealtime = (
  category: TargetCategoryTypes,
  setComments: Dispatch<SetStateAction<Comment[]>>,
) => {
  const q = query(collection(db, COLLECTION.COMMENTS), where('targetCategory', '==', category));
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

export const getCommentsInTargetRealtime = (
  category: TargetCategoryTypes,
  id: string,
  setComments: Dispatch<SetStateAction<Comment[]>>,
) => {
  const q = query(
    collection(db, COLLECTION.COMMENTS),
    where('targetCategory', '==', category),
    where('targetId', '==', id),
  );
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

export const getCommentsCountInTarget = async (category: TargetCategoryTypes) => {
  const q = query(collection(db, COLLECTION.COMMENTS), where('targetCategory', '==', category));
  const todayQ = query(
    collection(db, COLLECTION.COMMENTS),
    where('targetCategory', '==', category),
    where('createdAt', '>=', getTSBefore(1, 'day')),
  );
  const snapshotToday = await getCountFromServer(todayQ);
  const snapshotTotal = await getCountFromServer(q);

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
    commentNoInCategory: lastComment.docs[0].data().commentNoInCategory + 1,
  });

  if (comment.targetCategory === TARGET_CATEGORY.IDOLS) {
    const parentRef = doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS, comment.targetId!);
    await updateDoc(parentRef, {
      commentsLength: increment(1),
    });
  }
};

export const editCommentDoc = async (comment: Comment) => {
  const ref = doc(db, COLLECTION.COMMENTS, comment.id);
  await updateDoc(ref, {
    author: comment.author,
    body: comment.body,
    updatedAt: serverTimestamp(),
  });
};

export const markDeleteComment = async (commentId: string, authorId: string) => {
  const adminUsers = await getAdminUsers();
  const currentUserId = auth.currentUser?.uid;
  const isAdmin = adminUsers.filter((admin) => admin.uid === currentUserId);

  if (!isAdmin && currentUserId !== authorId) return; // TODO: 서버로 기능을 넘겨야함
  const ref = doc(db, COLLECTION.COMMENTS, commentId);
  await updateDoc(ref, {
    deletedAt: serverTimestamp(),
  });
};

export const deleteComment = async (commentId: string, authorId: string) => {
  const uid = auth.currentUser?.uid;
  if (uid !== authorId) return; // TODO: 서버로 기능을 넘겨야함
  await deleteDoc(doc(db, COLLECTION.COMMENTS, commentId));
};

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
