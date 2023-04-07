import { collection, doc, getDoc, getDocs, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';

import { db } from '@/utils/firebase';
import { FBIdolType, IdolType, IDOL_COLLECTION_NAMES, YearDescType } from '@/types/idols.d';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { COLLECTION } from '@/types/firebase.d';
import { createCommentDoc } from '@/services/comments';
import { getSystemAuthor, getUserName } from '@/utils';

export const getIdols = async (): Promise<FBIdolType[]> => {
  const idolsCol = collection(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS);
  const snapshot = await getDocs(idolsCol);
  return snapshot.docs.map((item) => item.data() as FBIdolType);
};

export const getIdolYears = async (): Promise<YearDescType[]> => {
  const idolYearsCol = collection(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOL_YEARS);
  const idolYearsSnapshot = await getDocs(idolYearsCol);
  const idolYearsList = idolYearsSnapshot.docs.map((item) => item.data() as YearDescType);
  return idolYearsList;
};

export const editIdolDoc = async (newIdol: FBIdolType, changed: string[], user: User) => {
  const ref = doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS, newIdol.name);
  updateDoc(ref, {
    category: newIdol.category,
    debutYear: newIdol.debutYear,
    desc: newIdol.desc,
    endYear: newIdol.endYear,
    youtube: newIdol.youtube,
    updatedAt: serverTimestamp(),
  }).then(() => {
    createCommentDoc({
      ...getSystemAuthor(),
      body: `${changed.join(', ')} 항목을 ${getUserName(user)} 님이 수정했습니다.`,
      targetCategory: TARGET_CATEGORY.IDOLS,
      targetId: newIdol.name,
    });
  });
};

// 아래는 배치 업데이트용

export const getIdolDocRef = (name: string) => {
  return doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS, name);
};

const getIdolYearDocRef = (year: string) => {
  return doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOL_YEARS, year);
};

export const createIdolDoc = async (idol: IdolType) => {
  const ref = getIdolDocRef(idol.name);
  const docSnap = await getDoc(ref);

  if (!docSnap.exists()) {
    await setDoc(ref, idol);
  }
};

export const createIdolYearDoc = async (yearDesc: YearDescType) => {
  const ref = getIdolYearDocRef(String(yearDesc.year));
  const docSnap = await getDoc(ref);

  if (!docSnap.exists()) {
    await setDoc(ref, yearDesc);
  }
};
