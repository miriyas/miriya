'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { notFound } from 'next/navigation';

import { getMyCarDataAPI } from '@/services/mycar';

import EditInner from './EditInner';

interface Props {
  carId: string;
}

const EditForm = ({ carId }: Props) => {
  const { data: cars = [] } = useSuspenseQuery({
    queryKey: ['getMyCarDataAPI'],
    queryFn: () => getMyCarDataAPI().then((res) => res.data),
  });

  const currentCar = cars.find((car) => car.id === carId);

  if (!currentCar) notFound();
  return <EditInner currentCar={currentCar} />;
};

export default EditForm;
