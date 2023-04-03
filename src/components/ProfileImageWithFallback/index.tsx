import Image from 'next/image';
import Avatar from 'react-avatar';

interface Props {
  uid: string;
  src?: string | undefined | null;
  alt?: string;
  size: number;
}

const ProfileImageWithFallback = ({ src, uid, alt, size }: Props) => {
  if (!src) {
    return <Avatar name={uid} size={String(size)} />;
  }
  return <Image src={src} alt={alt ?? ''} width={size} height={size} />;
};

export default ProfileImageWithFallback;
