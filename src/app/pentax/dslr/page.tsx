import TabDSLR from '@/containers/pentax/TabDSLR';
import { getPentaxDslrDataApi } from '@/services/pentaxes';

const TabDSLRPage = async () => {
  const dslrs = await getPentaxDslrDataApi()
    .then((res) => res.data)
    .catch(() => []);

  return <TabDSLR dslrs={dslrs} />;
};

export default TabDSLRPage;
