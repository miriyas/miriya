import GuestBook from '@/containers/guestbook';
// import { batchUpdateIdols } from '@/services/idols';
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

  const commitsData = await fetch('https://api.github.com/repos/miriyas/miriya/commits', {
    next: { revalidate: 60 * 10 }, // 10분 캐시
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject();
      }
      return res.json();
    })
    .catch(() => {
      return [];
    });

  // const recentComments = await getRecentGuestComments(4);

  // batchUpdateCommentNoInCategory(TARGET_CATEGORY.GUESTBOOK);

  // batchUpdateCommentLengthOfTarget();

  // batchUpdateComments();

  // batchUpdateIdols();

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
