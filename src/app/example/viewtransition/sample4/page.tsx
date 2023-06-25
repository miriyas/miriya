'use client';

import { MouseEventHandler, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { callTransition } from '@/utils/transition';

import { IMAGES } from '../constants';
import styles from '../index.module.scss';

const ViewTransitionAPISample4 = () => {
  const largeImageRef = useRef<HTMLImageElement>(null);
  const [currentImage, setCurrentImage] = useState('/images/blog/og.jpg');

  const onClick: MouseEventHandler<HTMLImageElement> = (e) => {
    const thumbnail = e.currentTarget;
    const newSrc = thumbnail.dataset.url ?? '';

    callTransition(thumbnail, largeImageRef.current, '아무거나', () => {
      setCurrentImage(newSrc);
    });
  };

  return (
    <main className={styles.viewTransitionSample}>
      <h1>예제4</h1>
      <div className={styles.large}>
        <Image src={currentImage} width={200} height={250} alt='' onClick={onClick} ref={largeImageRef} />
      </div>
      <div className={styles.thumbnails}>
        {IMAGES.filter((url) => url !== currentImage).map((imageUrl) => (
          <Image key={imageUrl} src={imageUrl} width={200} height={250} alt='' onClick={onClick} data-url={imageUrl} />
        ))}
      </div>
      <div className={styles.others}>
        <p>슉-슉 (코드 단축)</p>
        <br />
        <nav>
          <Link href='/example/viewtransition/sample3'>&lt; 이전 예제</Link>
          <Link href='/example/viewtransition/sample5'>다음 예제 &gt;</Link>
        </nav>
      </div>
    </main>
  );
};

export default ViewTransitionAPISample4;
