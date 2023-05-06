import Idols from '@/containers/idols';

import { generateMetaData } from '@/app/sharedMetadata';

export const metadata = generateMetaData({
  url: 'https://miriya.vercel.app/idols',
  title: 'History of Idols',
  description: '시대별로 정리된 한국의 아이돌들',
  imageUrl: 'https://miriya.vercel.app/images/idols/og.jpg',
  keywords: ['idols', 'korea', '한국', '아이돌'],
});

const IdolsPage = async () => <Idols />;

export default IdolsPage;
