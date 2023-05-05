import MyCar from '@/containers/mycar';

interface Props {
  params: {
    carId: string;
  };
}

const MyCarPage = async ({ params }: Props) => {
  return <MyCar carId={params.carId} />;
};

export default MyCarPage;
