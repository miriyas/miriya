import { collection, addDoc, serverTimestamp, onSnapshot, getDocs, query, where } from 'firebase/firestore';
import { Dispatch } from 'react';
import { SetStateAction } from 'jotai';

import { db } from '@/utils/firebase';
import { Comment, NewComment, TARGET_CATEGORY } from '@/types/comments.d';

const ROOT = 'comments';

export const createCommentDoc = async (comment: NewComment) => {
  await addDoc(collection(db, ROOT), {
    ...comment,
    createdAt: serverTimestamp(),
  });
};

export const getComments = async () => {
  const querySnapshot = await getDocs(collection(db, ROOT));
  return querySnapshot.docs.map((item) => {
    return {
      ...item.data(),
      id: item.id,
    } as Comment;
  });
};

export const getCommentsRealtime = (setComments: Dispatch<SetStateAction<Comment[]>>) => {
  const q = query(collection(db, ROOT), where('targetCategory', '==', TARGET_CATEGORY.GUESTBOOK));
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
