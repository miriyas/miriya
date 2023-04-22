import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs, query } from 'firebase/firestore';
import admin from 'firebase-admin';

import { db } from '@/utils/firebase';
import { db as adminDb } from '@/utils/db';
import { FBPentaxDslr, FBPentaxSlr } from '@/types/pentaxes.d';
import { Comment, NewComment, TARGET_CATEGORY } from '@/types/comments.d';
import { COLLECTION, PENTAX_COLLECTION_NAMES } from '@/types/firebase.d';
import { getAdminUsers } from '@/services/firebase/auth';

const getPentaxSlrs = async () => {
  const q = query(collection(db, COLLECTION.PENTAXES, 'data', PENTAX_COLLECTION_NAMES.SLR));
  const snapshot = await getDocs(q);
  return snapshot.docs
    .sort((a, b) => b.data().startYear - a.data().startYear)
    .map((item) => {
      return {
        ...item.data(),
        id: item.id,
      } as FBPentaxSlr;
    });
};

// export const getPentaxDslrsRealtime = (setDslrs: Dispatch<SetStateAction<FBPentaxDslr[]>>) => {
//   const q = query(collection(db, COLLECTION.PENTAXES, 'data', PENTAX_COLLECTION_NAMES.DSLR));
//   return onSnapshot(q, (querySnapshot) => {
//     const dslrs = querySnapshot.docs
//       .sort((a, b) => b.data().debutYear - a.data().debutYear)
//       .map((item) => {
//         return {
//           id: item.id,
//           ...item.data(),
//         } as FBPentaxDslr;
//       });
//     setDslrs(dslrs);
//   });
// };

const editGuestCommentDoc = async (comment: Comment) => {
  adminDb.collection(COLLECTION.COMMENTS).doc(comment.id).update({
    body: comment.body,
    hidden: comment.hidden,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });
};

// export const editPentaxDoc = async (
//   newCamera: FBPentaxSLRSchema | FBPentaxDSLRSchema,
//   changed: string[],
//   user: User,
//   subTargetCategory: SubTargetCategoryTypes,
// ) => {
//   const ref = doc(db, COLLECTION.PENTAXES, 'data', PENTAX_COLLECTION_NAMES[subTargetCategory], newCamera.id);
//   updateDoc(ref, {
//     ...newCamera,
//     updatedAt: serverTimestamp(),
//   }).then(() => {
//     createHistoryDoc(
//       `${changed.join(', ')} 항목을 ${getUserName(user)} 님이 수정했습니다.`,
//       TARGET_CATEGORY.PENTAX,
//       newCamera.id,
//       newCamera.name,
//       subTargetCategory,
//     );
//   });
// };

// export const deleteGuestComment = async (commentId: string, authorId: string) => {
//   const uid = auth.currentUser?.uid;
//   if (uid !== authorId) return;
//   await deleteDoc(doc(db, COLLECTION.COMMENTS, commentId));
// };

export const GET = async () => {
  const data = await getPentaxSlrs();
  return NextResponse.json(data);
};

export const PATCH = async (request: NextRequest) => {
  await editGuestCommentDoc(await request.json());
  return new Response();
};
