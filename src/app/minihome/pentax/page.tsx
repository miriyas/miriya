import TabPentax from '@/containers/minihome/TabPentax';
import { getHistoriesApi } from '@/services/histories';
import { getMinihomeCommentDataAPI } from '@/services/minihome';

const TabPentaxPage = async () => {
  const comments = await getMinihomeCommentDataAPI('PENTAX', 1000).then((res) => res.data);
  const histories = await getHistoriesApi({ targetCategory: 'PENTAX' }).then((res) => res.data);
  return <TabPentax comments={comments} histories={histories} />;
};

export default TabPentaxPage;
