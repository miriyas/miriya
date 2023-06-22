'use client';

import { MouseEventHandler, useRef, useState } from 'react';
import Image from 'next/image';

import { callTransition } from '@/utils/transition';
import { TRANSITIONS } from '@/types/transitions.d';

import styles from './index.module.scss';

const images = [
  '/images/blog/og.jpg',
  '/images/mycar/og.jpg',
  '/images/idols/og.jpg',
  '/images/pentax/og.jpg',
  '/images/minihome/og.jpg',
  '/images/profile/og.jpg',
];

const TestPage = () => {
  const largeImageRef = useRef<HTMLImageElement>(null);
  const [currentImage, setCurrentImage] = useState('/images/blog/og.jpg');

  const onClick: MouseEventHandler<HTMLImageElement> = (e) => {
    const thumbnail = e.currentTarget;
    const newSrc = thumbnail.dataset.url ?? '';
    callTransition(thumbnail, largeImageRef.current, TRANSITIONS.TEST, () => {
      setCurrentImage(newSrc);
    });
  };

  return (
    <main className={styles.testPage}>
      <div className={styles.large}>
        <Image src={currentImage} width={200} height={250} alt='' onClick={onClick} ref={largeImageRef} />
      </div>
      <div className={styles.thumbnails}>
        {images
          .filter((url) => url !== currentImage)
          .map((imageUrl) => (
            <Image
              key={imageUrl}
              src={imageUrl}
              width={200}
              height={250}
              alt=''
              onClick={onClick}
              data-url={imageUrl}
            />
          ))}
      </div>
    </main>
  );
};

export default TestPage;
