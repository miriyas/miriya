import { ReactNode } from 'react';
import { Metadata } from 'next';

import { getPost } from './utils';
import { getBlogPostsAPI } from '@/services/blog';

interface Props {
  params: {
    postId: string;
  };
}

export async function generateMetadata({ params: { postId } }: Props): Promise<Metadata> {
  const postData = await getPost(postId);

  const url = `https://miriya.net/blog/${postId}`;
  const { title } = postData;
  const description = postData.preview;

  return {
    title,
    description,
    openGraph: {
      description,
      type: 'website',
      title,
      url,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPostsAPI().then((res) => res.data);

  return posts.map((post) => ({
    postId: post.id,
  }));
}

const Layout = ({ children }: { children: ReactNode }) => children;

export default Layout;
