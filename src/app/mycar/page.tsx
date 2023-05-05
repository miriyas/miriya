import type { Metadata } from 'next';
import MyCar from '@/containers/mycar';

const title = 'MIRIYA';
const description = '내 차량의 상태와 부품/튜닝 목록';
const url = 'https://miriya.vercel.app/';
const imageUrl = 'https://miriya.vercel.app/images/mycar/og.jpg';

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

const MyCarPage = async () => <MyCar />;

export default MyCarPage;
