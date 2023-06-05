import MyCar from '@/containers/mycar';
import { fetchMyCarDataAPI } from '@/services/mycar';

export const revalidate = 3600;

export async function generateStaticParams() {
  return fetchMyCarDataAPI().then((res) => {
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

const MyCarPage = async ({ params }: Props) => {
  return <MyCar carId={params.carId} />;
};

export default MyCarPage;
