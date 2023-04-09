import { collection, onSnapshot, query } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';

import { COLLECTION, PENTAX_COLLECTION_NAMES } from '@/types/firebase.d';
import { FBPentaxDslr, FBPentaxSlr, PentaxDslr, PentaxSlr } from '@/types/pentaxes.d';
import { db } from '@/utils/firebase';

/** 펜탁스 SLR 목록을 순서 없이 다 가져온다 */
export const getPentaxSlrsRealtime = (setSlrs: Dispatch<SetStateAction<PentaxSlr[]>>) => {
  const q = query(collection(db, COLLECTION.PENTAXES, 'data', PENTAX_COLLECTION_NAMES.SLR));
  return onSnapshot(q, (querySnapshot) => {
    const slrs = querySnapshot.docs
      .sort((a, b) => b.data().debutYear - a.data().debutYear)
      .map((item) => {
        return item.data() as FBPentaxSlr;
      });
    setSlrs(slrs);
  });
};

/** 펜탁스 DSLR 목록을 순서 없이 다 가져온다 */
export const getPentaxDslrsRealtime = (setDslrs: Dispatch<SetStateAction<PentaxDslr[]>>) => {
  const q = query(collection(db, COLLECTION.PENTAXES, 'data', PENTAX_COLLECTION_NAMES.DSLR));
  return onSnapshot(q, (querySnapshot) => {
    const dslrs = querySnapshot.docs
      .sort((a, b) => b.data().debutYear - a.data().debutYear)
      .map((item) => {
        return item.data() as FBPentaxDslr;
      });
    setDslrs(dslrs);
  });
};
