import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { collection, doc, getDocs, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';

import { db } from '@/utils/firebase';
import { FBCameraType } from '@/types/cameras.d';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { CAMERA_COLLECTION_NAMES, COLLECTION } from '@/types/firebase.d';
import { FBCamerachema } from '@/utils/validator';
import { getUserName } from '@/utils';

import { createHistoryDoc } from '@/app/api/histories/services';

const q = query(collection(db, COLLECTION.CAMERAS, 'data', CAMERA_COLLECTION_NAMES.CAMERA), orderBy('year', 'asc'));

const getCamerasSnapshot = async () => {
  const snapshot = await getDocs(q);
  return snapshot.docs.map(
    (item) =>
      ({
        id: item.id,
        ...item.data(),
      } as FBCameraType),
  );
};

// /** 카메라 목록을 순서 없이 다 가져온다 */
// export const getCamerasRealtime = (setCameras: Dispatch<SetStateAction<FBCameraType[]>>) => {
//   return onSnapshot(q, (querySnapshot) => {
//     const cameras = querySnapshot.docs
//       .sort((a, b) => b.data().debutYear - a.data().debutYear)
//       .map((item) => {
//         return {
//           id: item.id,
//           ...item.data(),
//         } as FBCameraType;
//       });
//     setCameras(cameras);
//   });
// };

interface EditParams {
  newCamera: FBCamerachema;
  changed: string[];
  user: User;
}

const editCameraDoc = async (params: EditParams) => {
  const { newCamera, changed, user } = params;

  const ref = doc(db, COLLECTION.CAMERAS, 'data', CAMERA_COLLECTION_NAMES.CAMERA, newCamera.id);
  updateDoc(ref, {
    ...newCamera,
    updatedAt: serverTimestamp(),
  }).then(() => {
    createHistoryDoc({
      body: `${changed.join(', ')} 항목을 ${getUserName(user)} 님이 수정했습니다.`,
      targetCategory: TARGET_CATEGORY.CAMERA,
      targetId: newCamera.id,
      targetName: newCamera.name,
    });
  });
};

export const GET = async () => {
  const data = await getCamerasSnapshot();
  return NextResponse.json(data);
};

export const PATCH = async (request: NextRequest) => {
  await editCameraDoc(await request.json());
  return new Response();
};
