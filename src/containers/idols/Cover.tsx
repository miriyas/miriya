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
    if (!coverRef.current) return undefined;

    // No open card: fade the photo out (same 0.5 s transition), then remove it.
    // Only the nodes that exist now are removed, so a card opened within 0.5 s keeps its photo.
    if (!id) {
      const old = [...coverRef.current.children];
      old.forEach((node) => node.removeAttribute('class'));
      const timer = setTimeout(() => old.forEach((node) => node.remove()), 500);
      return () => clearTimeout(timer);
    }

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
    return undefined;
  }, [id]);

  return <div className={styles.cover} ref={coverRef} />;
};

export default Cover;
