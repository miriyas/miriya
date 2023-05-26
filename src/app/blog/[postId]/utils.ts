import { renderMarkdown } from '@/utils/blog';
import { getBlogPostAPI } from '@/services/blog';
import { FBBlogPost } from '@/types/blog.d';

export const getPost = async (postId: string): Promise<FBBlogPost> => {
  const postData = await getBlogPostAPI(postId).then((res) => res.data);
  const body = await renderMarkdown(postData.body);
  return {
    ...postData,
    body,
  };
};
