import Profile from '@/containers/profile';

import { generateMetaData } from '@/app/sharedMetadata';
// import { batchUpdate } from '@/services/firebase/batch';

export const metadata = generateMetaData({
  url: 'https://miriya.vercel.app/',
  title: 'Profile',
  description: '프론트엔드 웹 개발자로 일하고 있는 miriya의 개인 작업 목록',
  imageUrl: 'https://miriya.vercel.app/images/profile/og.jpg',
  keywords: ['miriya'],
});

const ProfilePage = async () => {
  // batchUpdate();

  return <Profile />;
};

export default ProfilePage;
