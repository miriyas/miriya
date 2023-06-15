import { ReactNode } from 'react';
import { Metadata } from 'next';

import { getPost } from './utils';

interface Props {
  params: {
    postId: string;
  };
}

export async function generateMetadata({ params: { postId } }: Props): Promise<Metadata> {
  const postData = await getPost(postId);

  const url = `https://miriya.net/blog/${postId}`;
  const title = postData?.title ?? '글을 찾을 수 없습니다.';
  const description = postData?.preview ?? '';

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

const Layout = ({ children }: { children: ReactNode }) => children;

export default Layout;
