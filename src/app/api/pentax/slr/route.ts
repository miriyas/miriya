import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs, query } from 'firebase/firestore';
import admin from 'firebase-admin';

import { db } from '@/utils/firebase';
import { db as adminDb } from '@/utils/db';
import { FBPentaxSlr, SlrEditProps } from '@/types/pentaxes.d';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { COLLECTION, PENTAX_COLLECTION_NAMES } from '@/types/firebase.d';
import { getUserName } from '@/utils';

import { createHistoryDoc } from '@/app/api/histories/services';

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

const editPentaxSlrDoc = async (props: SlrEditProps) => {
  const { camera, changed, user, targetSubCategory } = props;
  adminDb
    .collection(`${COLLECTION.PENTAXES}/data/${PENTAX_COLLECTION_NAMES[targetSubCategory]}`)
    .doc(camera.id)
    .update({
      ...camera,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      createHistoryDoc({
        body: `${changed.join(', ')} 항목을 ${getUserName(user)} 님이 수정했습니다.`,
        targetCategory: TARGET_CATEGORY.PENTAX,
        targetSubCategory,
        targetId: camera.id,
        targetName: camera.name,
      });
    });
};

export const GET = async () => {
  const data = await getPentaxSlrs();
  return NextResponse.json(data);
};

export const PATCH = async (request: NextRequest) => {
  await editPentaxSlrDoc(await request.json());
  return new Response();
};
