import { getMetaData } from '@/app/sharedMetadata';

export { default } from '@/containers/cameras';

export const metadata = getMetaData({
  url: 'https://miriya.net/cameras',
  title: 'History of DSLR',
  description: '1998년부터 2011년까지의 DSLR 카메라들',
  imageUrl: 'https://miriya.net/images/cameras/og.jpg',
  keywords: ['DSLR', 'DSLT', 'MILC', 'camera', 'history', 'interchangable'],
});
