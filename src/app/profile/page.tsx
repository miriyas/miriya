import type { Metadata } from 'next';
import Profile from '@/containers/profile';
// import { batchUpdate } from '@/services/firebase/batch';

const title = 'MIRIYA';
const description = '프론트엔드 웹 개발자로 일하고 있는 miriya의 개인 작업 목록';
const url = 'https://miriya.vercel.app/';
const imageUrl = 'https://miriya.vercel.app/images/profile/og.jpg';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['miriya'],
  openGraph: {
    description,
    type: 'website',
    title,
    url,
    images: [
      {
        type: 'image/jpeg',
        url: imageUrl,
        secureUrl: imageUrl,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl],
  },
};

const ProfilePage = async () => {
  // batchUpdate();

  return <Profile />;
};

export default ProfilePage;
