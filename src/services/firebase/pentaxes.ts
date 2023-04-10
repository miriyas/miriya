import { collection, doc, onSnapshot, query, serverTimestamp, updateDoc } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';
import { User } from 'firebase/auth';

import { COLLECTION, PENTAX_COLLECTION_NAMES } from '@/types/firebase.d';
import { FBPentaxDslr, FBPentaxSlr } from '@/types/pentaxes.d';
import { SubTargetCategoryTypes, TARGET_CATEGORY } from '@/types/comments.d';
import { createHistoryDoc } from '@/services/firebase/histories';
import { db } from '@/utils/firebase';
import { getUserName } from '@/utils';
import { FBPentaxDSLRSchema, FBPentaxSLRSchema } from '@/utils/validator';

/** 펜탁스 SLR 목록을 순서 없이 다 가져온다 */
export const getPentaxSlrsRealtime = (setSlrs: Dispatch<SetStateAction<FBPentaxSlr[]>>) => {
  const q = query(collection(db, COLLECTION.PENTAXES, 'data', PENTAX_COLLECTION_NAMES.SLR));
  return onSnapshot(q, (querySnapshot) => {
    const slrs = querySnapshot.docs
      .sort((a, b) => b.data().debutYear - a.data().debutYear)
      .map((item) => {
        return {
          id: item.id,
          ...item.data(),
        } as FBPentaxSlr;
      });
    setSlrs(slrs);
  });
};

/** 펜탁스 DSLR 목록을 순서 없이 다 가져온다 */
export const getPentaxDslrsRealtime = (setDslrs: Dispatch<SetStateAction<FBPentaxDslr[]>>) => {
  const q = query(collection(db, COLLECTION.PENTAXES, 'data', PENTAX_COLLECTION_NAMES.DSLR));
  return onSnapshot(q, (querySnapshot) => {
    const dslrs = querySnapshot.docs
      .sort((a, b) => b.data().debutYear - a.data().debutYear)
      .map((item) => {
        return {
          id: item.id,
          ...item.data(),
        } as FBPentaxDslr;
      });
    setDslrs(dslrs);
  });
};

export const editPentaxDoc = async (
  newCamera: FBPentaxSLRSchema | FBPentaxDSLRSchema,
  changed: string[],
  user: User,
  subTargetCategory: SubTargetCategoryTypes,
) => {
  const ref = doc(db, COLLECTION.PENTAXES, 'data', PENTAX_COLLECTION_NAMES[subTargetCategory], newCamera.id);
  updateDoc(ref, {
    ...newCamera,
    updatedAt: serverTimestamp(),
  }).then(() => {
    createHistoryDoc(
      `${changed.join(', ')} 항목을 ${getUserName(user)} 님이 수정했습니다.`,
      TARGET_CATEGORY.PENTAX,
      newCamera.id,
      newCamera.name,
      subTargetCategory,
    );
  });
};
