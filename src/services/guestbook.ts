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
  getCountFromServer,
} from 'firebase/firestore';
import { Dispatch } from 'react';
import { SetStateAction } from 'jotai';

import { db } from '@/utils/firebase';
import { Comment, NewComment, TARGET_CATEGORY } from '@/types/comments.d';
import { getTSBefore } from '@/utils/date';

const ROOT = 'comments';

const q = query(collection(db, ROOT), where('targetCategory', '==', TARGET_CATEGORY.GUESTBOOK));
const todayQ = query(
  collection(db, ROOT),
  where('targetCategory', '==', TARGET_CATEGORY.GUESTBOOK),
  where('createdAt', '>=', getTSBefore(1, 'day')),
);

export const createCommentDoc = async (comment: NewComment) => {
  await addDoc(collection(db, ROOT), {
    ...comment,
    createdAt: serverTimestamp(),
  });
};

export const getComments = async () => {
  const snapshot = await getDocs(q);
  return snapshot.docs.map((item) => {
    return {
      ...item.data(),
      id: item.id,
    } as Comment;
  });
};

export const getCommentsCount = async () => {
  const snapshotToday = await getCountFromServer(todayQ);
  const snapshotTotal = await getCountFromServer(q);

  return {
    today: snapshotToday.data().count,
    total: snapshotTotal.data().count,
  };
};

export const getCommentsRealtime = (setComments: Dispatch<SetStateAction<Comment[]>>) => {
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

export const deleteComment = async (commentId: string) => {
  await deleteDoc(doc(db, ROOT, commentId));
};
