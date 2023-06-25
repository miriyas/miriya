'use client';

import { MouseEventHandler, useRef, useState } from 'react';
import Image from 'next/image';

import { IMAGES } from '../constants';
import Others from '../Others';
import styles from '../index.module.scss';

const ViewTransitionAPISample1 = () => {
  const largeImageRef = useRef<HTMLImageElement>(null);
  const [currentImage, setCurrentImage] = useState('/images/blog/og.jpg');

  const onClick: MouseEventHandler<HTMLImageElement> = (e) => {
    const thumbnail = e.currentTarget;
    const newSrc = thumbnail.dataset.url ?? '';
    setCurrentImage(newSrc);
  };

  return (
    <main className={styles.viewTransitionSample}>
      <h1>예제1</h1>
      <div className={styles.large}>
        <Image src={currentImage} width={200} height={250} alt='' onClick={onClick} ref={largeImageRef} />
      </div>
      <div className={styles.thumbnails}>
        {IMAGES.filter((url) => url !== currentImage).map((imageUrl) => (
          <Image key={imageUrl} src={imageUrl} width={200} height={250} alt='' onClick={onClick} data-url={imageUrl} />
        ))}
      </div>
      <Others next={2}>아무 효과 없음</Others>
    </main>
  );
};

export default ViewTransitionAPISample1;
