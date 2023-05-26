import TabPentax from '@/containers/minihome/TabPentax';
import { getHistoriesApi } from '@/services/histories';
import { getMinihomeCommentDataAPI } from '@/services/minihome';
import { TARGET_CATEGORY } from '@/types/comments.d';

const TabPentaxPage = async () => {
  const comments = await getMinihomeCommentDataAPI(TARGET_CATEGORY.PENTAX, 1000).then((res) => res.data);
  const histories = await getHistoriesApi({ targetCategory: TARGET_CATEGORY.PENTAX }).then((res) => res.data);

  return <TabPentax comments={comments} histories={histories} />;
};

export default TabPentaxPage;
