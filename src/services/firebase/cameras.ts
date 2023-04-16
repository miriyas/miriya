import { collection, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';
import { User } from 'firebase/auth';

import { FBCameraType } from '@/types/cameras.d';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { COLLECTION, CAMERA_COLLECTION_NAMES } from '@/types/firebase.d';
import { createHistoryDoc } from '@/services/firebase/histories';
import { FBCamerachema } from '@/utils/validator';
import { db } from '@/utils/firebase';
import { getUserName } from '@/utils';

/** 카메라 목록을 순서 없이 다 가져온다 */
export const getCamerasRealtime = (setCameras: Dispatch<SetStateAction<FBCameraType[]>>) => {
  const q = query(collection(db, COLLECTION.CAMERAS, 'data', CAMERA_COLLECTION_NAMES.CAMERA), orderBy('year', 'asc'));
  return onSnapshot(q, (querySnapshot) => {
    const cameras = querySnapshot.docs
      .sort((a, b) => b.data().debutYear - a.data().debutYear)
      .map((item) => {
        return {
          id: item.id,
          ...item.data(),
        } as FBCameraType;
      });
    setCameras(cameras);
  });
};

export const editCameraDoc = async (newCamera: FBCamerachema, changed: string[], user: User) => {
  const ref = doc(db, COLLECTION.CAMERAS, 'data', CAMERA_COLLECTION_NAMES.CAMERA, newCamera.id);
  updateDoc(ref, {
    ...newCamera,
    updatedAt: serverTimestamp(),
  }).then(() => {
    createHistoryDoc(
      `${changed.join(', ')} 항목을 ${getUserName(user)} 님이 수정했습니다.`,
      TARGET_CATEGORY.CAMERA,
      newCamera.id,
      newCamera.name,
    );
  });
};
