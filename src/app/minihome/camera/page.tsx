import TabCamera from '@/containers/minihome/TabCamera';
import { getHistoriesApi } from '@/services/histories';
import { getMinihomeCommentDataAPI } from '@/services/minihome';
import { TARGET_CATEGORY } from '@/types/comments.d';

const TabCameraPage = async () => {
  const comments = await getMinihomeCommentDataAPI(TARGET_CATEGORY.CAMERA, 1000).then((res) => res.data);
  const histories = await getHistoriesApi({ targetCategory: TARGET_CATEGORY.CAMERA }).then((res) => res.data);
  return <TabCamera comments={comments} histories={histories} />;
};

export default TabCameraPage;
