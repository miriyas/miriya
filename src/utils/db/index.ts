/* eslint-disable no-console */
import admin, { ServiceAccount } from 'firebase-admin';

import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error);
  }
}

export const db = admin.firestore();

export const initialAdminTs = new admin.firestore.Timestamp(0, 0);
