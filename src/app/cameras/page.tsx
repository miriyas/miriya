import { groupBy } from 'lodash';

import Cameras from '@/containers/cameras';
import { getCamerasDataApi } from '@/services/cameras';

import { getMetaData } from '@/app/sharedMetadata';

export const metadata = getMetaData({
  url: 'https://miriya.net/cameras',
  title: 'History of DSLR & Mirrorless',
  description: '1995년부터 지금까지 나온 DSLR과 미러리스 카메라',
  imageUrl: 'https://miriya.net/images/cameras/og.jpg',
  keywords: ['DSLR', 'DSLT', 'MILC', 'camera', 'history', 'mirrorless', 'interchangeable'],
});

export const revalidate = 3600;

const CamerasPage = async () => {
  const cameras = await getCamerasDataApi().then((res) => res.data);

  const years = groupBy(cameras, 'year');

  return <Cameras cameras={cameras} years={years} />;
};

export default CamerasPage;
