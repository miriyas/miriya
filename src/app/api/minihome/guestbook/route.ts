import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs, query, where } from 'firebase/firestore';
import admin from 'firebase-admin';

import { db } from '@/utils/firebase';
import { db as adminDb, initialAdminTs } from '@/utils/db';
import { Comment, NewComment, TARGET_CATEGORY } from '@/types/comments.d';
import { COLLECTION } from '@/types/firebase.d';
import { getAdminUsers } from '@/services/firebase/auth';

const q = query(collection(db, COLLECTION.COMMENTS), where('targetCategory', '==', TARGET_CATEGORY.GUESTBOOK));

const getGuestComments = async () => {
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

// export const getGuestCommentsRealtime = (setComments: Dispatch<SetStateAction<Comment[]>>) => {
//   return onSnapshot(q, (querySnapshot) => {
//     const comments = querySnapshot.docs
//       .filter((item) => !item.metadata.hasPendingWrites)
//       .sort((a, b) => b.data().createdAt - a.data().createdAt)
//       .map((item) => {
//         return {
//           ...item.data(),
//           id: item.id,
//         } as Comment;
//       });
//     setComments(comments);
//   });
// };

const createGuestCommentDoc = async (comment: NewComment) => {
  adminDb.collection(COLLECTION.COMMENTS).add({
    ...comment,
    targetCategory: TARGET_CATEGORY.GUESTBOOK,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    deletedAt: initialAdminTs,
  });
};

const editGuestCommentDoc = async (comment: Comment) => {
  adminDb.collection(COLLECTION.COMMENTS).doc(comment.id).update({
    body: comment.body,
    hidden: comment.hidden,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });
};

const markDeleteGuestComment = async (commentId: string, uid: string) => {
  const targetDoc = await adminDb.collection(COLLECTION.COMMENTS).doc(commentId);
  const targetSnapshot = await targetDoc.get();
  const targetData = (await targetSnapshot.data()) as Comment;

  const adminUsers = await getAdminUsers();
  const isAdmin = adminUsers.filter((adminUser) => adminUser.uid === uid);

  if (!targetData) return;
  if (!isAdmin && uid !== targetData.authorId) return;
  adminDb.collection(COLLECTION.COMMENTS).doc(commentId).update({
    deletedAt: admin.firestore.FieldValue.serverTimestamp(),
  });
};

// export const deleteGuestComment = async (commentId: string, authorId: string) => {
//   const uid = auth.currentUser?.uid;
//   if (uid !== authorId) return;
//   await deleteDoc(doc(db, COLLECTION.COMMENTS, commentId));
// };

export const GET = async () => {
  const data = await getGuestComments();
  return NextResponse.json(data);
};

export const POST = async (request: NextRequest) => {
  await createGuestCommentDoc(await request.json());
  return new Response();
};

export const PATCH = async (request: NextRequest) => {
  await editGuestCommentDoc(await request.json());
  return new Response();
};

export const DELETE = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get('uid') ?? '';
  const commentId = searchParams.get('commentId') ?? '';
  await markDeleteGuestComment(commentId, uid);
  return new Response();
};
