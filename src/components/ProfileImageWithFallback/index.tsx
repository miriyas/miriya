import Image from 'next/image';

interface Props {
  uid: string;
  src?: string | undefined | null;
  alt?: string;
  size: number;
}

const ProfileImageWithFallback = ({ src, uid, alt, size }: Props) => {
  return (
    <Image
      src={src || `${process.env.NEXT_PUBLIC_FE_URL}/api/common/avatar/${uid}`}
      alt={alt ?? ''}
      width={size}
      height={size}
    />
  );
};

export default ProfileImageWithFallback;
