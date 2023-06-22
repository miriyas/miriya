'use client';

/* eslint-disable @next/next/no-img-element */
import { MouseEventHandler, useState } from 'react';
import Image from 'next/image';
import cx from 'clsx';

import { callTransition } from '@/utils/transition';
import { TRANSITIONS } from '@/types/transitions.d';

import styles from './ImageExpandable.module.scss';

interface Props {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  ignoreDimension?: boolean;
  summaryId?: string;
}

const ImageExpandable = ({ src, alt, width, height, ignoreDimension, summaryId }: Props) => {
  const [opened, setOpened] = useState(false);

  const onClickSummary: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    const button = e.currentTarget;
    const thumbnail = button.querySelector<HTMLImageElement>('img');
    const largeImage = button.parentElement?.querySelector<HTMLImageElement>("[data-category='large']");
    if (!thumbnail || !largeImage) return;
    callTransition(thumbnail, largeImage, TRANSITIONS.IMAGE_EXPANDABLE, () => {
      setOpened(true);
    });
  };

  const onClickClose: MouseEventHandler<HTMLElement> = (e) => {
    const button = e.currentTarget;
    const largeImage = button.querySelector<HTMLImageElement>('img');
    const thumbnail = button.parentElement?.querySelector<HTMLImageElement>("[data-category='thumbnail']");
    if (!thumbnail || !largeImage) return;
    callTransition(largeImage, thumbnail, TRANSITIONS.IMAGE_EXPANDABLE, () => {
      setOpened(false);
    });
  };

  return (
    <div className={cx(styles.imageExpandable, { [styles.opened]: opened })}>
      <button type='button' className={styles.openButton} onClick={onClickSummary}>
        {ignoreDimension ? (
          <img src={src} alt={alt ?? ''} className={styles.summaryImg} id={summaryId} data-category='thumbnail' />
        ) : (
          <Image
            src={src}
            alt={alt ?? ''}
            width={width}
            height={height}
            className={styles.summaryImg}
            id={summaryId}
            data-category='thumbnail'
          />
        )}
      </button>
      <button type='button' className={styles.closeButton} onClick={onClickClose}>
        {ignoreDimension ? (
          <img src={src} alt={alt ?? ''} className={styles.detailsImg} data-category='large' />
        ) : (
          <Image
            src={src}
            alt={alt ?? ''}
            width={width}
            height={height}
            className={styles.detailsImg}
            unoptimized
            data-category='large'
          />
        )}
      </button>
    </div>
  );
};

export default ImageExpandable;
