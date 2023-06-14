'use client';

import { Fragment, useEffect, useRef } from 'react';
import { useRafState } from 'react-use';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getGuestbookDataAPI } from '@/services/minihome';
import useAuth from '@/hooks/useAuth';

import CommentItem from './Comment';
import styles from './Comments.module.scss';

const Comments = () => {
  const { isAdmin } = useAuth();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [observed, setObserved] = useRafState(false);
  const viewMoreRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage } = useInfiniteQuery(
    ['getBlogPostsAPI', isAdmin],
    ({ pageParam }) => getGuestbookDataAPI(pageParam).then((res) => res.data),
    {
      retry: 0,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    },
  );

  useEffect(() => {
    if (observed || !viewMoreRef.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].intersectionRatio > 0) fetchNextPage();
    };

    observerRef.current = new IntersectionObserver(callback, {
      root: document,
      threshold: 0,
    });
    observerRef.current.observe(viewMoreRef.current);
    setObserved(true);
  }, [setObserved, observed, viewMoreRef, fetchNextPage]);

  return (
    <ul className={styles.comments}>
      {data?.pages.map((page, i) => {
        const key = `frag-${i}`;

        return (
          <Fragment key={key}>
            {page.items.map((guestbook) => {
              return <CommentItem key={guestbook.id} guestbook={guestbook} />;
            })}
          </Fragment>
        );
      })}
      <div className={styles.viewMore} ref={viewMoreRef} />
    </ul>
  );
};

export default Comments;
