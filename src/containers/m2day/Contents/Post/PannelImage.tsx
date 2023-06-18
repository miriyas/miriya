/* eslint-disable @next/next/no-img-element */
import { MouseEventHandler, useEffect, useState } from 'react';
import Image from 'next/image';
import cx from 'clsx';

import styles from './Pannel.module.scss';
import { IconChevronRight } from 'public/svgs';
import ImageExpandable from '@/components/ImageExpandable';

interface Props {
  postId: string;
}

const PannelImage = ({ postId }: Props) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const openImagePannel = (e: any) => {
      if (e.detail.postid !== postId) return;
      setImageUrls(e.detail.imageUrls);
    };

    window.addEventListener('openImagePannel', openImagePannel);
    return () => {
      window.removeEventListener('openImagePannel', openImagePannel);
    };
  }, [postId]);

  const onClickThumbnail: MouseEventHandler<HTMLButtonElement> = (e) => {
    setSelectedIdx(Number(e.currentTarget.dataset.idx));
  };

  const onClickPrev = () => {
    setSelectedIdx((prev) => Math.max(0, prev - 1));
  };

  const onClickNext = () => {
    setSelectedIdx((prev) => Math.min(imageUrls.length - 1, prev + 1));
  };

  if (imageUrls.length === 0) return null;

  return (
    <div className={cx(styles.pannel, styles.imagePannel)}>
      <div className={styles.imageWrapper}>
        <ImageExpandable src={imageUrls[selectedIdx]} alt='' ignoreDimension />

        {imageUrls.length > 1 && (
          <button type='button' onClick={onClickPrev} className={cx(styles.arrow, styles.prev)}>
            <IconChevronRight />
          </button>
        )}
        {imageUrls.length > 1 && (
          <button type='button' onClick={onClickNext} className={cx(styles.arrow, styles.next)}>
            <IconChevronRight />
          </button>
        )}
      </div>

      {imageUrls.length > 1 && (
        <ul className={styles.thumbnails}>
          {imageUrls.map((url, i) => (
            <li key={url} className={cx({ [styles.selected]: i === selectedIdx })}>
              <button type='button' onClick={onClickThumbnail} data-idx={i}>
                <Image src={url} width={44} height={44} alt='' />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PannelImage;
