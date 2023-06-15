import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import BlogShow from '@/containers/blog/Post/Show';
import { getBlogCategoriesAPI } from '@/services/blog';
import { apiBe } from '@/services';
import { BlogPostForShow } from '@/types/blog';
import { renderMarkdown } from '@/utils/blog';

interface Cookie {
  name: string;
  value: string;
}

export const dynamic = 'force-dynamic';

const cookiesToString = (rawCookies: Cookie[]) => {
  return rawCookies.map((cookie) => `${cookie.name}=${cookie.value}`).join('; ');
};

interface Props {
  params: {
    postId: string;
  };
}

const BlogShowPage = async ({ params: { postId } }: Props) => {
  const cookieStore = cookies();
  const cookiesString = cookiesToString(cookieStore.getAll());
  const categories = await getBlogCategoriesAPI().then((res) => res.data);
  const postData = await apiBe<BlogPostForShow>(`/blog/posts/${postId}`, {
    headers: {
      Cookie: cookiesString,
    },
  }).then(async (res) => {
    if (!res.data) {
      return null;
    }

    return {
      ...res.data,
      body: await renderMarkdown(res.data.body),
    };
  });

  if (!postData) notFound();
  return <BlogShow categories={categories} postData={postData} />;
};

export default BlogShowPage;
