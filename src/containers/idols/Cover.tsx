'use client';

import { useEffect, useRef } from 'react';
import { useAtomValue } from 'jotai';

import { coverIdolAtom } from '@/containers/idols/states';
import { getCDNImage } from '@/utils/image';

import styles from './index.module.scss';

const Cover = () => {
  const coverRef = useRef<HTMLDivElement>(null);
  const id = useAtomValue(coverIdolAtom);

  useEffect(() => {
    if (!coverRef.current || !id) return;

    const coverNode = document.createElement('div');
    coverNode.setAttribute('style', `background-image: url(${getCDNImage(`idols/${id}.jpg`)})`);

    coverRef.current.appendChild(coverNode);
    coverRef.current.children[0].setAttribute('class', styles.off);

    setTimeout(() => {
      // Start transition
      coverNode.setAttribute('class', styles.on);
      if (!coverRef.current || coverRef.current.children.length === 1) return;
      coverRef.current.children[0].removeAttribute('class');
    }, 0);

    setTimeout(() => {
      if (!coverRef.current || coverRef.current.children.length === 1) return;
      coverRef.current.children[0].remove();
    }, 500);
  }, [id]);

  return <div className={styles.cover} ref={coverRef} />;
};

export default Cover;
