import admin from 'firebase-admin';

import { adminDB } from '@/utils/db/admin';
import { NewHistory } from '@/types/histories.d';
import { COLLECTION } from '@/types/firebase.d';

export const createHistoryDoc = async (params: NewHistory) => {
  const { body, targetCategory, targetId, targetName, targetSubCategory } = params;

  if (targetSubCategory) {
    adminDB.collection(COLLECTION.HISTORIES).add({
      body,
      targetCategory,
      targetSubCategory,
      targetId,
      targetName,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  } else {
    adminDB.collection(COLLECTION.HISTORIES).add({
      body,
      targetCategory,
      targetId,
      targetName,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  }
};
