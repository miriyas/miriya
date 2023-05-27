interface ImageLoaderProps {
  src: string;
  width: number;
  // quality?: number;
}

export const imageLoaderDo2Ik = ({ src, width }: ImageLoaderProps) => {
  const baseUrl = src.replace('https://miriya.sgp1.cdn.digitaloceanspaces.com', 'https://ik.imagekit.io/miriya');
  return `${baseUrl}/tr:w-${width},c-at_max`;
};

export const getCDNImage = (route: string) => {
  return `https://ik.imagekit.io/miriya/${route}`;
};
