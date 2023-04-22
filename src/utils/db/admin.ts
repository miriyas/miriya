/* eslint-disable no-console */
import admin, { ServiceAccount } from 'firebase-admin';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY ?? '') as ServiceAccount),
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error);
  }
}

export const adminDB = admin.firestore();

export const initialAdminTs = new admin.firestore.Timestamp(0, 0);
