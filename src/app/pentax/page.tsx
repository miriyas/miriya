import TabHome from '@/containers/pentax/TabHome';
import { getReadMeMarkdownApi, getDescMarkdownApi } from '@/services/pentaxes';

const TabHomePage = async () => {
  const readMe = await getReadMeMarkdownApi()
    .then((res) => res.data)
    .catch(() => []);
  const desc = await getDescMarkdownApi()
    .then((res) => res.data)
    .catch(() => []);

  return <TabHome readMe={readMe} desc={desc} />;
};

export default TabHomePage;
