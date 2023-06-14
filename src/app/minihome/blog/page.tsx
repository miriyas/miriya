import TabBlog from '@/containers/minihome/TabBlog';
import { getMinihomeCommentDataAPI } from '@/services/minihome';
import { TARGET_CATEGORY } from '@/types/comments.d';

const TabBlogPage = async () => {
  const comments = await getMinihomeCommentDataAPI(TARGET_CATEGORY.BLOG, 1000).then((res) => res.data);
  return <TabBlog comments={comments} />;
};

export default TabBlogPage;
