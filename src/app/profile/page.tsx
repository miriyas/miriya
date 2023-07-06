import { getMetaData } from '@/app/sharedMetadata';

export { default } from '@/containers/profile';

export const metadata = getMetaData({
  url: 'https://miriya.net/',
  title: 'Profile',
  description: '프론트엔드 웹 개발자 miriya입니다.',
  imageUrl: 'https://miriya.net/images/profile/og.jpg',
  keywords: ['miriya'],
});
