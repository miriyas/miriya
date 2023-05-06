import { Metadata } from 'next';

interface Props {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
  keywords: string[];
}

export const generateMetaData = ({ url, title, description, imageUrl, keywords }: Props): Metadata => {
  return {
    metadataBase: new URL(url),
    title,
    description,
    keywords,
    openGraph: {
      description,
      type: 'website',
      title,
      url,
      images: [
        {
          type: 'image/jpeg',
          url: imageUrl,
          secureUrl: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
};
