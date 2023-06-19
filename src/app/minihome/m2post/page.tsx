import TabM2 from '@/containers/minihome/TabM2';
import { getMinihomeCommentDataAPI } from '@/services/minihome';
import { TARGET_CATEGORY } from '@/types/comments.d';

const TabM2Page = async () => {
  const comments = await getMinihomeCommentDataAPI(TARGET_CATEGORY.M2_POST, 1000).then((res) => res.data);
  return <TabM2 comments={comments} />;
};

export default TabM2Page;
