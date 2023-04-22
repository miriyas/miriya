import admin from 'firebase-admin';

import { db } from '@/utils/db';
import { NewHistory } from '@/types/histories.d';
import { COLLECTION } from '@/types/firebase.d';

export const createHistoryDoc = async (params: NewHistory) => {
  const { body, targetCategory, targetId, targetName, targetSubCategory } = params;

  if (targetSubCategory) {
    db.collection(COLLECTION.HISTORIES).add({
      body,
      targetCategory,
      targetSubCategory,
      targetId,
      targetName,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  } else {
    db.collection(COLLECTION.HISTORIES).add({
      body,
      targetCategory,
      targetId,
      targetName,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  }
};
