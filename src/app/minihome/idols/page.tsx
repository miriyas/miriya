import TabIdol from '@/containers/minihome/TabIdol';
import { getHistoriesApi } from '@/services/histories';
import { getMinihomeCommentDataAPI } from '@/services/minihome';
import { TARGET_CATEGORY } from '@/types/comments.d';

const TabIdolPage = async () => {
  const comments = await getMinihomeCommentDataAPI(TARGET_CATEGORY.IDOLS, 1000).then((res) => res.data);
  const histories = await getHistoriesApi({ targetCategory: TARGET_CATEGORY.IDOLS }).then((res) => res.data);

  return <TabIdol comments={comments} histories={histories} />;
};

export default TabIdolPage;
