import type { Metadata } from 'next';
import Idols from '@/containers/idols';

const title = 'History of Idols';
const description = '96년부터 2019년까지 활동한 아이돌들';
const url = 'https://miriya.vercel.app/idols';
const imageUrl = 'https://miriya.vercel.app/images/idols/og.jpg';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['idols', 'korea'],
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

const IdolsPage = async () => <Idols />;

export default IdolsPage;
