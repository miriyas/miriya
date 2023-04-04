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
  updateDoc,
} from 'firebase/firestore';
import { Dispatch } from 'react';
import { SetStateAction } from 'jotai';

import { auth, db } from '@/utils/firebase';
import { Comment, NewComment, TARGET_CATEGORY } from '@/types/comments.d';
import { getTSBefore } from '@/utils/date';
import { COLLECTION } from '@/types/firebase.d';
import { getAdminUsers } from '@/services/auth';

const q = query(collection(db, COLLECTION.COMMENTS), where('targetCategory', '==', TARGET_CATEGORY.GUESTBOOK));
const todayQ = query(
  collection(db, COLLECTION.COMMENTS),
  where('targetCategory', '==', TARGET_CATEGORY.GUESTBOOK),
  where('createdAt', '>=', getTSBefore(1, 'day')),
);

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

export const createCommentDoc = async (comment: NewComment) => {
  await addDoc(collection(db, COLLECTION.COMMENTS), {
    ...comment,
    createdAt: serverTimestamp(),
  });
};

export const editCommentDoc = async (comment: Comment) => {
  const ref = doc(db, COLLECTION.COMMENTS, comment.id);
  await updateDoc(ref, {
    author: comment.author,
    body: comment.body,
    hidden: comment.hidden,
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
