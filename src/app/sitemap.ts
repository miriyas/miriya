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
    url: `https://miriya.net/blog/${post.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: 'https://miriya.net',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.net/profile',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.net/idols',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.net/cameras',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.net/pentax',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.net/pentax/slr',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.net/pentax/dslr',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.net/mycar',
      lastModified: new Date(),
    },
    {
      url: 'https://miriya.net/minihome',
      lastModified: new Date(),
    },
    ...blogPosts,
  ];
};

export default Sitemap;
