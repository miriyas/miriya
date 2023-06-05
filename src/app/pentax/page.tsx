import TabHome from '@/containers/pentax/TabHome';
import { getReadMeMarkdownApi, getDescMarkdownApi } from '@/services/pentaxes';

const TabHomePage = async () => {
  const readMeData = getReadMeMarkdownApi()
    .then((res) => res.data)
    .catch(() => []);
  const descData = getDescMarkdownApi()
    .then((res) => res.data)
    .catch(() => []);

  const [readMe, desc] = await Promise.all([readMeData, descData]);

  return <TabHome readMe={readMe} desc={desc} />;
};

export default TabHomePage;
