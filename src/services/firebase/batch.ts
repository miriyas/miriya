// import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

// import { db, initialTs } from '@/utils/firebase';
// import { COLLECTION, PENTAX_COLLECTION_NAMES } from '@/types/firebase.d';

export {};
// 아래는 배치 업데이트용

// 펜탁스 DSLR 콘스탄트 업로드
// export const batchUpdate = async () => {
//   PENTAX_DSLRS.forEach((camera, i) => {
//     console.log(1111, i);

//     addDoc(collection(db, COLLECTION.PENTAXES, 'data', PENTAX_COLLECTION_NAMES.DSLR), {
//       ...camera,
//       createdAt: serverTimestamp(),
//       deletedAt: initialTs,
//     });
//   });
// };

// export const getIdolDocRef = (name: string) => {
//   return doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS, name);
// };

// const getIdolYearDocRef = (year: string) => {
//   return doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOL_YEARS, year);
// };

// export const createIdolDoc = async (idol: IdolType) => {
//   const ref = getIdolDocRef(idol.name);
//   const docSnap = await getDoc(ref);

//   if (!docSnap.exists()) {
//     await setDoc(ref, idol);
//   }
// };

// export const createIdolYearDoc = async (yearDesc: YearDescType) => {
//   const ref = getIdolYearDocRef(String(yearDesc.year));
//   const docSnap = await getDoc(ref);

//   if (!docSnap.exists()) {
//     await setDoc(ref, yearDesc);
//   }
// };

// 1. idol 다 돌며 commentsLength 전부 0으로 초기화
// export const batchUpdateIdols = async () => {
//   const q = query(collection(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS));
//   const snapshot = await getDocs(q);
//   snapshot.docs.forEach((item) => {
//     updateDoc(item.ref, {
//       commentsLength: 0,
//     });
//   });
// };

// export const batchUpdateCommentNoInCategory = async (category: TargetCategoryTypes) => {
//   const list = await getCommentsSnapshot(category, 'asc', 999_999);
//   let counter = 1;
//   list.docs.forEach((commentDoc) => {
//     updateDoc(commentDoc.ref, {
//       commentNoInCategory: counter,
//     });
//     counter += 1;
//   });
// };

// export const batchUpdateCommentLengthOfTarget = async () => {
//   const list = await getCommentsSnapshot(TARGET_CATEGORY.IDOLS, 'asc', 10000);
//   list.docs.forEach((commentDoc) => {
//     const { targetId } = commentDoc.data();
//     const parentRef = doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS, targetId!);
//     updateDoc(parentRef, {
//       commentsLength: increment(1),
//     });
//   });
// };

// export const batchUpdateComments = async () => {
//   const q = query(collection(db, COLLECTION.COMMENTS));
//   const snapshot = await getDocs(q);

//   snapshot.docs.forEach((commentDoc) => {
//     if (!commentDoc.data().deletedAt) {
//       updateDoc(commentDoc.ref, {
//         deletedAt: new Date(0),
//       });
//     }
//   });
// };

// 2. comments/idols 중 deleted 아닌것, 시스템 아닌것 전부 돌며 commentsLength 올리기
// export const batchUpdateComments = async () => {
//   const snapshot = await getDocs(
//     query(
//       collection(db, COLLECTION.COMMENTS),
//       where('targetCategory', '==', TARGET_CATEGORY.IDOLS),
//       where('deletedAt', '==', new Date(0)),
//       where('authorId', '!=', 'fXruvSpnIcMp20gi6a6HhOdihli1'),
//     ),
//   );

//   snapshot.docs.forEach((item) => {
//     const parentRef = doc(db, COLLECTION.IDOLS, 'data', IDOL_COLLECTION_NAMES.IDOLS, item.data().targetId);
//     updateDoc(parentRef, {
//       commentsLength: increment(1),
//     });
//   });
// };

// 3. comment 다 돌며 commentNoInCategory 0으로 초기화
// export const batchUpdateComments = async () => {
//   const q = query(collection(db, COLLECTION.COMMENTS));
//   const snapshot = await getDocs(q);

//   snapshot.docs.forEach((commentDoc) => {
//     updateDoc(commentDoc.ref, {
//       commentNoInCategory: 0,
//     });
//   });
// };

// 4. 카테고리별 comment 중 system 아닌것 다 createdAt으로 정렬하고, 돌며 commentNoInCategory 올리기
// export const batchUpdateComments = async () => {
//   const snapshot = await getDocs(
//     query(
//       collection(db, COLLECTION.COMMENTS),
//       where('targetCategory', '==', TARGET_CATEGORY.GUESTBOOK),
//       where('createdAt', '>', new Date(0)),
//       orderBy('createdAt', 'asc'), // inequality 오더는 항상 맨 위에 와야함
//     ),
//   );

//   let counter = 1;
//   snapshot.docs.forEach((commentDoc) => {
//     updateDoc(commentDoc.ref, {
//       commentNoInCategory: counter,
//     });
//     counter += 1;
//   });
// };
// export const batchUpdate = async () => {
//   const snapshot = await getDocs(
//     query(
//       collection(db, COLLECTION.COMMENTS),
//       where('targetCategory', '==', TARGET_CATEGORY.IDOLS),
//       where('createdAt', '>', new Date(0)),
//       orderBy('createdAt', 'asc'),
//     ),
//   );

//   let counter = 1;
//   snapshot.docs.forEach((commentDoc) => {
//     updateDoc(commentDoc.ref, {
//       commentNoInCategory: counter,
//     });
//     counter += 1;
//   });
// };

// export const batchUpdateComments = async () => {
//   const snapshot = await getDocs(query(collection(db, COLLECTION.COMMENTS)));

//   snapshot.docs.forEach((commentDoc) => {
//     console.log(commentDoc.data().body, commentDoc.data().deletedAt);

//     // if (commentDoc.data().deletedAt.seconds === 0) {
//     //   updateDoc(commentDoc.ref, {
//     //     deletedAt: new Timestamp(0, 0),
//     //   });
//     // }
//   });
// };

// 시스템 코멘트를 히스토리로 변경
// export const batchUpdateComments = async () => {
//   const snapshot = await getDocs(
//     query(collection(db, COLLECTION.COMMENTS), where('targetCategory', '==', TARGET_CATEGORY.IDOLS)),
//   );

//   const systemComments = snapshot.docs.filter((commentDoc) => {
//     return commentDoc.data().authorId === 'fXruvSpnIcMp20gi6a6HhOdihli1';
//   });

//   systemComments.forEach((commentDoc) => {
//     const { body, targetId, createdAt } = commentDoc.data();

//     addDoc(collection(db, COLLECTION.HISTORIES), {
//       body,
//       targetCategory: TARGET_CATEGORY.IDOLS,
//       targetId,
//       createdAt,
//     });
//   });
// };

// 시스템 코멘트를 모두 삭제
// export const batchUpdateComments = async () => {
//   const snapshot = await getDocs(
//     query(collection(db, COLLECTION.COMMENTS), where('targetCategory', '==', TARGET_CATEGORY.IDOLS)),
//   );

//   const systemComments = snapshot.docs.filter((commentDoc) => {
//     return commentDoc.data().authorId === 'fXruvSpnIcMp20gi6a6HhOdihli1';
//   });

//   systemComments.forEach((commentDoc) => {
//     deleteDoc(commentDoc.ref);
//   });
// };

// export const batchUpdate = async () => {
//   const snapshot = await getDocs(query(collection(db, COLLECTION.HISTORIES)));

//   snapshot.docs.forEach((d) => {
//     console.log(d.data());
//   });
// }
