import Profile from '@/containers/profile';

import { getMetaData } from '@/app/sharedMetadata';

export const metadata = getMetaData({
  url: 'https://miriya.vercel.app/',
  title: 'Profile',
  description: '프론트엔드 웹 개발자로 일하고 있는 miriya의 개인 작업 목록',
  imageUrl: 'https://miriya.vercel.app/images/profile/og.jpg',
  keywords: ['miriya'],
});

export default Profile;
