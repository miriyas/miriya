'use client';

import { Fragment, useEffect, useRef } from 'react';
import { useRafState } from 'react-use';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getGuestbookDataAPI } from '@/services/minihome';
import { GuestbookData } from '@/types/minihome';
import useAuth from '@/hooks/useAuth';
import { GUESTBOOK_QUERY_KEY } from './useGuestbook';

import CommentItem from './Comment';
import styles from './Comments.module.scss';

const Comments = ({ firstPage, fetchedAt }: { firstPage?: GuestbookData; fetchedAt?: number }) => {
  const { isAdmin } = useAuth();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [observed, setObserved] = useRafState(false);
  const viewMoreRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: [GUESTBOOK_QUERY_KEY, isAdmin],
    queryFn: ({ pageParam }) => getGuestbookDataAPI(pageParam).then((res) => res.data),
    retry: 0,
    initialPageParam: '' as string,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    // Public entries from the server HTML, shown at once. The HTML can be up to 1 hour old, so
    // fetch again on mount when the data is older than staleTime (the app default is no refetch).
    initialData: !isAdmin && firstPage ? { pages: [firstPage], pageParams: [''] } : undefined,
    initialDataUpdatedAt: fetchedAt,
    refetchOnMount: true,
  });

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
