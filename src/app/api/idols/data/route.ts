import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { collection, doc, getDocs, limit, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';

import { db } from '@/utils/firebase';
import { FBIdolType } from '@/types/idols.d';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { COLLECTION, IDOL_COLLECTION_NAMES } from '@/types/firebase.d';
import { createHistoryDoc } from '@/services/firebase/histories';
import { getUserName } from '@/utils';

const getIdolsSnapshot = async (order: 'asc' | 'desc', limitCount: number) => {
  const q = query(
    collection(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS),
    orderBy('debutYear', order),
    orderBy('name', order),
    limit(limitCount),
  );
  const snapshot = await getDocs(q);
  return snapshot;
};

const getIdols = async (): Promise<FBIdolType[]> => {
  const snapshot = await getIdolsSnapshot('asc', 1000);
  return snapshot.docs.map((item) => item.data() as FBIdolType);
};

// export const getIdolsRealtime = (setIdols: Dispatch<SetStateAction<FBIdolType[]>>) => {
//   const q = query(
//     collection(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS),
//     orderBy('debutYear', 'asc'),
//     orderBy('name', 'asc'),
//     limit(1000),
//   );
//   return onSnapshot(q, (querySnapshot) => {
//     const idols = querySnapshot.docs
//       .sort((a, b) => b.data().debutYear - a.data().debutYear)
//       .map((item) => {
//         return item.data() as FBIdolType;
//       });
//     setIdols(idols);
//   });
// };

interface EditParams {
  newIdol: FBIdolType;
  changed: string[];
  user: User;
}

const editIdolDoc = async ({ newIdol, changed, user }: EditParams) => {
  const ref = doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS, newIdol.name);
  updateDoc(ref, {
    category: newIdol.category,
    debutYear: newIdol.debutYear,
    desc: newIdol.desc,
    endYear: newIdol.endYear,
    youtube: newIdol.youtube,
    updatedAt: serverTimestamp(),
  }).then(() => {
    createHistoryDoc(
      `${changed.join(', ')} 항목을 ${getUserName(user)} 님이 수정했습니다.`,
      TARGET_CATEGORY.IDOLS,
      newIdol.name,
      newIdol.name,
    );
  });
};

export const GET = async () => {
  const data = await getIdols();
  return NextResponse.json(data);
};

export const PATCH = async (request: NextRequest) => {
  await editIdolDoc(await request.json());
  return new Response();
};
