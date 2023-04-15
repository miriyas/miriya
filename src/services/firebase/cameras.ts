import { collection, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';
import { User } from 'firebase/auth';

import { FBCameraType } from '@/types/cameras.d';
import { COLLECTION, CAMERA_COLLECTION_NAMES } from '@/types/firebase.d';
import { FBPentaxDslr, FBPentaxSlr } from '@/types/pentaxes.d';
import { SubTargetCategoryTypes, TARGET_CATEGORY } from '@/types/comments.d';
import { createHistoryDoc } from '@/services/firebase/histories';
import { db } from '@/utils/firebase';

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
