import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

import { getMyCarDataAPI } from '@/services/mycar';

const MyCarEdit = dynamic(() => import('@/containers/mycar/Form/Edit'), { ssr: false });

interface Props {
  params: {
    carId: string;
  };
}

const MyCarEditPage = async ({ params }: Props) => {
  const cars = await getMyCarDataAPI()
    .then((res) => res.data)
    .catch(() => []);

  const currentCar = cars.find((car) => car.id === params.carId);

  if (!currentCar) notFound();

  return <MyCarEdit carId={params.carId} />;
};

export default MyCarEditPage;
