import { MetadataRoute } from 'next';

import { fetchClient } from '@/services/apiClient';
import { FBBlogPost } from '@/types/blog';

export const getPosts = () => {
  return fetchClient('/blog/posts')
    .then((res) => {
      if (!res.ok) {
        return Promise.reject();
      }
      return res.json();
    })
    .catch(() => {
      return [];
    });
};

const Sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const posts: FBBlogPost[] = await getPosts();

  const blogPosts = posts.map((post) => ({
    url: `https://miriya.vercel.app/blog/${post.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: 'https://miriya.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.vercel.app/profile',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.vercel.app/idols',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.vercel.app/cameras',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.vercel.app/pentax',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.vercel.app/pentax/slr',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.vercel.app/pentax/dslr',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.vercel.app/mycar',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.vercel.app/minihome',
      lastModified: new Date(),
    },
    ...blogPosts,
  ];
};

export default Sitemap;
