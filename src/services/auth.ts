// https://wneild.medium.com/tracking-document-timestamps-with-firestore-638a5522753c

import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '@/utils/firebase';
import { ROLE, UserWithRole } from '@/types/auth.d';
import { COLLECTION } from '@/types/firebase.d';

export const getAdminUsers = async () => {
  const snapshot = await getDocs(query(collection(db, COLLECTION.USERS), where('role', '==', ROLE.ADMIN)));
  return snapshot.docs.map((item) => item.data() as UserWithRole);
};

export const getSupporters = async () => {
  const snapshot = await getDocs(query(collection(db, COLLECTION.USERS), where('role', '==', ROLE.SUPPORTER)));
  return snapshot.docs.map((item) => item.data() as UserWithRole);
};
