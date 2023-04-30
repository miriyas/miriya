'use client';

import { MouseEventHandler, useEffect, useRef } from 'react';
import { useRafState, useUnmount } from 'react-use';
import cx from 'clsx';

import styles from './Idols.module.scss';

interface Props {
  year: string;
}

const SideYear = ({ year }: Props) => {
  const [observed, setObserved] = useRafState(false);
  const [active, setActive] = useRafState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observed) return;

    const lastItem = document.getElementById(`idol-year-${year}`);
    if (!lastItem) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      setActive(entries[0].intersectionRatio > 0);
    };

    observerRef.current = new IntersectionObserver(callback, {
      root: document,
      threshold: 0,
    });
    observerRef.current.observe(lastItem);
    setObserved(true);
  }, [setObserved, observed, setActive, year]);

  useUnmount(() => {
    if (observerRef.current) observerRef.current.disconnect();
  });

  const onClickYear: MouseEventHandler<HTMLButtonElement> = () => {
    document.getElementById(`idol-year-${year}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button type='button' onClick={onClickYear} className={cx({ [styles.active]: active })}>
      {year}
    </button>
  );
};

export default SideYear;
