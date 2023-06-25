'use client';

import { MouseEventHandler, useRef, useState } from 'react';
import Image from 'next/image';
import { flushSync } from 'react-dom';

import Others from '../Others';
import { IMAGES } from '../constants';
import styles from '../index.module.scss';

const ViewTransitionAPISample3 = () => {
  const largeImageRef = useRef<HTMLImageElement>(null);
  const [currentImage, setCurrentImage] = useState('/images/blog/og.jpg');

  const onClick: MouseEventHandler<HTMLImageElement> = (e) => {
    const thumbnail = e.currentTarget;
    const newSrc = thumbnail.dataset.url ?? '';

    if (!document.startViewTransition) {
      setCurrentImage(newSrc);
      return;
    }

    if (!thumbnail || !largeImageRef.current) return;

    thumbnail?.style.setProperty('view-transition-name', '아무거나'); // 썸네일에서 시작하여
    largeImageRef.current?.style.setProperty('view-transition-name', '');
    document
      .startViewTransition(() => {
        flushSync(() => {
          thumbnail?.style.setProperty('view-transition-name', '');
          largeImageRef.current?.style.setProperty('view-transition-name', '아무거나'); // 큰 이미지로 전환된다
          setCurrentImage(newSrc);
        });
      })
      .finished.finally(() => {
        // 초기화
        thumbnail?.style.setProperty('view-transition-name', '');
        largeImageRef.current?.style.setProperty('view-transition-name', '');
      });
  };

  return (
    <main className={styles.viewTransitionSample}>
      <h1>예제3</h1>
      <div className={styles.large}>
        <Image src={currentImage} width={200} height={250} alt='' onClick={onClick} ref={largeImageRef} />
      </div>
      <div className={styles.thumbnails}>
        {IMAGES.filter((url) => url !== currentImage).map((imageUrl) => (
          <Image key={imageUrl} src={imageUrl} width={200} height={250} alt='' onClick={onClick} data-url={imageUrl} />
        ))}
      </div>
      <Others prev={2} next={4}>
        슉-슉
      </Others>
    </main>
  );
};

export default ViewTransitionAPISample3;
