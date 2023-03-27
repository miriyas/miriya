import ImageExpandable from '@/components/ImageExpandable';
import styles from './ImageAlbum.module.scss';

interface Props {
  images: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  }[];
}

const ImageAlbum = ({ images }: Props) => {
  return (
    <div className={styles.imageAlbum}>
      {images.map((image, i) => {
        const key = `${image.src}-${i}`;
        return <ImageExpandable key={key} src={image.src} width={image.width} height={image.height} alt={image.alt} />;
      })}
    </div>
  );
};

export default ImageAlbum;
