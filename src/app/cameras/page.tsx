import { groupBy } from 'lodash';

import Cameras from '@/containers/cameras';
import { getCamerasDataApi } from '@/services/cameras';

import { getMetaData } from '@/app/sharedMetadata';

export const metadata = getMetaData({
  url: 'https://miriya.net/cameras',
  title: 'History of DSLR',
  description: '1998년부터 2011년까지의 DSLR 카메라들',
  imageUrl: 'https://miriya.net/images/cameras/og.jpg',
  keywords: ['DSLR', 'DSLT', 'MILC', 'camera', 'history', 'interchangable'],
});

export const revalidate = 3600;

const CamerasPage = async () => {
  const cameras = await getCamerasDataApi().then((res) => res.data);

  const years = groupBy(cameras, 'year');

  return <Cameras cameras={cameras} years={years} />;
};

export default CamerasPage;
