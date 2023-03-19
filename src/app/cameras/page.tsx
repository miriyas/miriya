import type { NextPage } from 'next';
import Cameras from '@/containers/cameras';

const title = 'History of DSLR';
const description = '1998년부터 2011년까지의 DSLR 카메라들';
const url = 'https://miriya.vercel.app/cameras';
const imageUrl = 'https://miriya.vercel.app/images/image-cameras.jpg';

export const metadata = {
  title,
  description,
  keywords: ['DSLR', 'DSLT', 'MILC', 'camera', 'history', 'interchangable'],
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

const CamerasPage: NextPage = () => <Cameras />;

export default CamerasPage;