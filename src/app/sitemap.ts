import { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
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
    {
      url: 'https://miriya.vercel.app/privacy',
      lastModified: new Date(),
    },
  ];
};

export default sitemap;
