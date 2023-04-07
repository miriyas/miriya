import GuestBook from '@/containers/guestbook';
// import { batchUpdateComments } from '@/services/comments';
// import { batchUpdateCommentLengthOfTarget } from '@/services/comments';
// import { batchUpdateCommentNoInCategory } from '@/services/comments';
// import { TARGET_CATEGORY } from '@/types/comments.d';
// import { getRecentGuestComments } from '@/services/guestbook';
import { GADataRow } from '@/types/guestbook';

const GuestBookPage = async () => {
  const gaDataRaw = await fetch('https://us-central1-miriyas.cloudfunctions.net/getGAdata', {
    next: { revalidate: 60 * 30 }, // 30분 캐시
  });
  const gaDataRes = await gaDataRaw.json();
  const gaData = gaDataRes.data as GADataRow[];

  const total = gaData[0].metricValues.map((v) => Number(v.value));
  const today = gaData[1].metricValues.map((v) => Number(v.value));

  const commitsRaw = await fetch('https://api.github.com/repos/miriyas/miriya/commits', {
    next: { revalidate: 60 * 10 }, // 10분 캐시
  });
  const commitsData = await commitsRaw.json();
  // const recentComments = await getRecentGuestComments(4);

  // batchUpdateCommentNoInCategory(TARGET_CATEGORY.GUESTBOOK);

  // batchUpdateCommentLengthOfTarget();

  // batchUpdateComments();

  return (
    <GuestBook
      counterData={{
        total,
        today,
      }}
      commitsData={commitsData}
      // recentComments={recentComments}
      data-superjson
    />
  );
};

export default GuestBookPage;
