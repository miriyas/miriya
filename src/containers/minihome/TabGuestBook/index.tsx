'use client';

import { Fragment, useEffect, useRef } from 'react';
import { useRafState } from 'react-use';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getGuestbookDataAPI } from '@/services/minihome';
import useAuth from '@/hooks/useAuth';

import NewForm from './NewForm';
import CommentItem from './Comment';
import styles from './index.module.scss';

const TabGuestBook = () => {
  const { isAdmin } = useAuth();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [observed, setObserved] = useRafState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const viewMoreRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage } = useInfiniteQuery(
    ['getBlogPostsAPI', isAdmin],
    ({ pageParam }) => getGuestbookDataAPI(pageParam).then((res) => res.data),
    {
      retry: 0,
      getNextPageParam: (lastPage) => lastPage[lastPage.length - 1].id,
    },
  );

  useEffect(() => {
    if (observed || !viewMoreRef.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].intersectionRatio > 0) fetchNextPage();
    };

    observerRef.current = new IntersectionObserver(callback, {
      root: wrapperRef.current,
      threshold: 0,
    });
    observerRef.current.observe(viewMoreRef.current);
    setObserved(true);
  }, [setObserved, observed, viewMoreRef, fetchNextPage]);

  return (
    <div className={styles.tabGuestbook} ref={wrapperRef}>
      <NewForm />
      <ul className={styles.comments}>
        {data?.pages.map((page, i) => {
          const key = `frag-${i}`;
          return (
            <Fragment key={key}>
              {page.map((comment) => {
                return <CommentItem key={comment.id} comment={comment} />;
              })}
            </Fragment>
          );
        })}
        <div className={styles.viewMore} ref={viewMoreRef} />
      </ul>
    </div>
  );
};

export default TabGuestBook;
