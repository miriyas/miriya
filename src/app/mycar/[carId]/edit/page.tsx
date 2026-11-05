import { notFound } from 'next/navigation';

import { getMyCarDataAPI } from '@/services/mycar';

import MyCarEdit from './MyCarEditLazy';

interface Props {
  params: Promise<{
    carId: string;
  }>;
}

const MyCarEditPage = async ({ params }: Props) => {
  const { carId } = await params;
  const cars = await getMyCarDataAPI()
    .then((res) => res.data)
    .catch(() => []);

  const currentCar = cars.find((car) => car.id === carId);

  if (!currentCar) notFound();

  return <MyCarEdit carId={carId} />;
};

export default MyCarEditPage;
