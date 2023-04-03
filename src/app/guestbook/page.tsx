import GuestBook from '@/containers/guestbook';
import { GADataRow } from '@/types/guestbook';

const GuestBookPage = async () => {
  const raw = await fetch('https://us-central1-miriyas.cloudfunctions.net/getGAdata');
  const res = await raw.json();
  const data = res.data as GADataRow[];

  const total = data[0].metricValues.map((v) => Number(v.value));
  const today = data[1].metricValues.map((v) => Number(v.value));

  return (
    <GuestBook
      counterData={{
        total,
        today,
      }}
    />
  );
};

export default GuestBookPage;
