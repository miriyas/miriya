import { notFound } from 'next/navigation';

import MyCarEdit from '@/containers/mycar/Form/Edit';
import { getMyCarDataAPI } from '@/services/mycar';

export async function generateStaticParams() {
  return getMyCarDataAPI().then((res) => {
    return res.data.map((car) => ({
      carId: car.id,
    }));
  });
}

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

  return <MyCarEdit currentCar={currentCar} />;
};

export default MyCarEditPage;
