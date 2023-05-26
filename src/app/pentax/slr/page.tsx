import TabSLR from '@/containers/pentax/TabSLR';
import { getPentaxSlrDataApi } from '@/services/pentaxes';

const TabSLRPage = async () => {
  const slrs = await getPentaxSlrDataApi()
    .then((res) => res.data)
    .catch(() => []);

  return <TabSLR slrs={slrs} />;
};

export default TabSLRPage;
