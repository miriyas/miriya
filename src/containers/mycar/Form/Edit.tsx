'use client';

import { useParams } from 'next/navigation';

import useMyCar from '../useMyCar';
import EditForm from '@/containers/mycar/Form/EditForm';

import LoadingPage from '@/components/Loading/LoadingPage';

const MyCarEditPage = () => {
  const params = useParams();

  const { cars, isCarsLoading } = useMyCar();

  const currentCar = cars.find((car) => car.id === params.carId);

  if (!currentCar || isCarsLoading) return <LoadingPage />;

  return <EditForm currentCar={currentCar} />;
};

export default MyCarEditPage;
