import { getMetaData } from '@/app/sharedMetadata';

export { default } from '@/containers/profile';

export const metadata = getMetaData({
  url: 'https://miriya.net/',
  title: 'Profile',
  description: '프론트엔드 웹 개발자로 일하고 있는 miriya의 개인 작업 목록',
  imageUrl: 'https://miriya.net/images/profile/og.jpg',
  keywords: ['miriya'],
});
