import { getMetaData } from '@/app/sharedMetadata';

export { default } from '@/containers/idols';

export const metadata = getMetaData({
  url: 'https://miriya.net/idols',
  title: 'History of Idols',
  description: '시대별로 정리된 한국의 아이돌들',
  imageUrl: 'https://miriya.net/images/idols/og.jpg',
  keywords: ['idols', 'korea', '한국', '아이돌'],
});
