import type { NextPage } from 'next';
import Idols from '@/containers/idols';

const title = 'History of Idols';
const description = '96년부터 2019년까지 활동한 아이돌들';
const url = 'https://miriya.vercel.app/idols';
const imageUrl = 'https://miriya.vercel.app/images/image-idols.jpg';

export const metadata = {
  title,
  description,
  keywords: ['idols', 'korea'],
  openGraph: {
    type: 'website',
    title,
    url,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
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

const IdolsPage: NextPage = () => <Idols />;

export default IdolsPage;
