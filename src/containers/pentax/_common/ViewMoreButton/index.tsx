'use client';

import cx from 'clsx';
import { RefObject, useEffect, useRef } from 'react';
import { useRafState, useUnmount } from 'react-use';

import { IconChevronRight } from 'public/svgs';
import styles from './ViewMoreButton.module.scss';

const scrollAmount = 2000; // 충분한 사이즈를 임의로 넣음

interface Props {
  wrapperRef: RefObject<HTMLDivElement>;
}

const ViewMoreButton = (props: Props) => {
  const { wrapperRef } = props;

  const observerRef = useRef<IntersectionObserver | null>(null);
  const [scrollEnded, setScrollEnded] = useRafState(false);
  const [observed, setObserved] = useRafState(false);

  // draggable의 마지막 아이템이 보이고 안보이고로 화살표를 돌리고 안돌리고 판단
  useEffect(() => {
    if (observed || !wrapperRef.current) return;

    const lastItem = wrapperRef.current.getElementsByClassName('lastItem')[0];
    if (!lastItem) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      setScrollEnded(entries[0].intersectionRatio > 0);
    };

    observerRef.current = new IntersectionObserver(callback, {
      root: wrapperRef.current,
      threshold: 0,
    });
    observerRef.current.observe(lastItem);
    setObserved(true);
  }, [setScrollEnded, setObserved, observed, wrapperRef]);

  useUnmount(() => {
    if (observerRef.current) observerRef.current.disconnect();
  });

  const toggleViewMore = () => {
    if (!wrapperRef.current) return;
    wrapperRef.current.scrollBy({
      top: 0,
      left: scrollAmount * (scrollEnded ? -1 : 1),
      behavior: 'smooth',
    });
  };

  return (
    <button
      type='button'
      className={cx(styles.viewMore, {
        [styles.scrollEnded]: scrollEnded,
      })}
      aria-label='More'
      onClick={toggleViewMore}
    >
      <IconChevronRight className={styles.arrow} />
    </button>
  );
};

export default ViewMoreButton;
