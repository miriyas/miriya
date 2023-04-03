import GuestBook from '@/containers/guestbook';
import { GADataRow } from '@/types/guestbook';

const GuestBookPage = async () => {
  const gaDataRaw = await fetch('https://us-central1-miriyas.cloudfunctions.net/getGAdata');
  const gaDataRes = await gaDataRaw.json();
  const gaData = gaDataRes.data as GADataRow[];

  const total = gaData[0].metricValues.map((v) => Number(v.value));
  const today = gaData[1].metricValues.map((v) => Number(v.value));

  const commitsRaw = await fetch('https://api.github.com/repos/miriyas/miriya/commits');
  const commitsData = await commitsRaw.json();

  return (
    <GuestBook
      counterData={{
        total,
        today,
      }}
      commitsData={commitsData}
    />
  );
};

export default GuestBookPage;
