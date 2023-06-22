/* eslint-disable @next/next/no-img-element */
import { MouseEventHandler, useEffect, useState } from 'react';
import Image from 'next/image';
import cx from 'clsx';
import { flushSync } from 'react-dom';

import { transitionHelper } from '@/utils/transition';

import { IconChevronRight } from 'public/svgs';
import ImageExpandable from '@/components/ImageExpandable';
import baseStyles from './index.module.scss';
import styles from './PannelImage.module.scss';

interface Props {
  postId: string;
}

const PannelImage = ({ postId }: Props) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const summaryId = `${postId}-album-summary`;
  const pannelThumbnails = `${postId}-album-pannelThumbnails`;

  useEffect(() => {
    const openImagePannel = (e: any) => {
      if (e.detail.postid !== postId) return;
      if (imageUrls.length === 0) {
        setImageUrls(e.detail.imageUrls);
        return;
      }
      setImageUrls([]);
    };

    window.addEventListener('openImagePannel', openImagePannel);
    return () => {
      window.removeEventListener('openImagePannel', openImagePannel);
    };
  }, [imageUrls.length, postId]);

  const moveToImage = (targetIdx: number, thumbnail: HTMLImageElement | null) => {
    document.querySelector<HTMLImageElement>(`#${summaryId}`)?.style.setProperty('view-transition-name', '');
    thumbnail?.style.setProperty('view-transition-name', 'transition-m2-album');
    transitionHelper({
      updateDOM() {
        flushSync(() => {
          thumbnail?.style.setProperty('view-transition-name', '');
          document
            .querySelector<HTMLImageElement>(`#${summaryId}`)
            ?.style.setProperty('view-transition-name', 'transition-m2-album');
          setSelectedIdx(targetIdx);
        });
      },
    }).finished.finally(() => {
      document.querySelector<HTMLImageElement>(`#${summaryId}`)?.style.setProperty('view-transition-name', '');
      thumbnail?.style.setProperty('view-transition-name', '');
    });
  };

  const onClickThumbnail: MouseEventHandler<HTMLButtonElement> = (e) => {
    const targetIdx = Number(e.currentTarget.dataset.idx);
    if (selectedIdx === targetIdx) return;
    const thumbnail = e.currentTarget.querySelector('img'); // ref를 쓰면 더러워서..
    moveToImage(targetIdx, thumbnail);
  };

  const onClickPrev = () => {
    const prevIdx = Math.max(0, selectedIdx - 1);
    const thumbnail = document.querySelector<HTMLImageElement>(`#${pannelThumbnails} [data-idx='${prevIdx}'] img`);
    moveToImage(prevIdx, thumbnail);
  };

  const onClickNext = () => {
    const nextIdx = Math.min(imageUrls.length - 1, selectedIdx + 1);
    if (nextIdx === selectedIdx) return;
    const thumbnail = document.querySelector<HTMLImageElement>(`#${pannelThumbnails} [data-idx='${nextIdx}'] img`);
    moveToImage(nextIdx, thumbnail);
  };

  if (imageUrls.length === 0) return null;

  return (
    <div className={cx(baseStyles.pannel, styles.imagePannel)}>
      <div className={styles.imageWrapper}>
        <ImageExpandable src={imageUrls[selectedIdx]} alt='' ignoreDimension summaryId={summaryId} />
        {imageUrls.length > 1 && selectedIdx > 0 && (
          <button type='button' onClick={onClickPrev} className={cx(styles.arrow, styles.prev)}>
            <IconChevronRight />
          </button>
        )}
        {imageUrls.length > 1 && selectedIdx < imageUrls.length - 1 && (
          <button type='button' onClick={onClickNext} className={cx(styles.arrow, styles.next)}>
            <IconChevronRight />
          </button>
        )}
      </div>

      {imageUrls.length > 1 && (
        <ul className={styles.thumbnails} id={pannelThumbnails}>
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
