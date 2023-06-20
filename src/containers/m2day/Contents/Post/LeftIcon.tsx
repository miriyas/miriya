'use client';

import Image from 'next/image';
import { isEmpty } from 'lodash';

import { M2PostType } from '@/types/m2day.d';

import styles from './LeftIcon.module.scss';

interface Props {
  post: M2PostType;
}

const LeftIcon = ({ post }: Props) => {
  const { images } = post;

  const imageUrls = isEmpty(images) ? [] : images?.split(',');

  const onClickAlbum = () => {
    window.dispatchEvent(
      new CustomEvent('openImagePannel', {
        detail: {
          postid: post.id,
          imageUrls,
        },
      }),
    );
  };

  return (
    <div className={styles.leftIcon}>
      {imageUrls.length > 0 ? (
        <div className={styles.iconWrapper}>
          <button type='button' className={styles.imageWrapper} onClick={onClickAlbum}>
            <Image src={imageUrls[0]} width={44} height={44} alt='' />
          </button>
          <p>m2photo</p>
        </div>
      ) : (
        <div className={styles.iconWrapper}>
          <Image src='/images/m2day/icon_4.png' width={44} height={44} alt='' />
        </div>
      )}
    </div>
  );
};

export default LeftIcon;
