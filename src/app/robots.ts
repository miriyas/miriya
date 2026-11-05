import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/ops', // admin-only dashboard (also noindex and 404 for others)
    },
    sitemap: 'https://miriya.net/sitemap.xml',
  };
};

export default robots;
