import Idols from '@/containers/idols';
import { getIdolYearsDataApi } from '@/services/idols';

import { getMetaData } from '@/app/sharedMetadata';

export const metadata = getMetaData({
  url: 'https://miriya.net/idols',
  title: 'History of Idols',
  description: '시대별로 정리된 한국의 아이돌들',
  imageUrl: 'https://miriya.net/images/idols/og.jpg',
  keywords: ['idols', 'korea', '한국', '아이돌'],
});

const IdolsPage = async () => {
  const years = await getIdolYearsDataApi()
    .then((res) => res.data)
    .catch(() => []);

  return <Idols years={years} />;
};

export default IdolsPage;
