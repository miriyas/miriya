'use client';

import { Fragment, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useDebounce } from 'react-use';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import Image from 'next/image';

import { searchBlogPostsAPI } from '@/services/blog';
import { imageLoaderDo2Ik } from '@/utils/image';

import styles from './index.module.scss';
import Loading from '@/components/Loading';
import { IconSearch } from 'public/svgs';

/** Wraps each match of `query` in <mark> (case-insensitive). */
const Highlight = ({ text, query }: { text: string; query: string }) => {
  if (!query) return <span>{text}</span>;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
  return (
    <>
      {parts.map((part, i) => {
        const key = `part-${i}`;
        return i % 2 === 1 ? <mark key={key}>{part}</mark> : <Fragment key={key}>{part}</Fragment>;
      })}
    </>
  );
};

// Search on our own backend (GET /api/blog/search). Before, this used Meilisearch Cloud,
// but that index no longer exists.
const BlogSearchContent = () => {
  const searchParams = useSearchParams();
  const [input, setInput] = useState(searchParams.get('q') ?? '');
  const [query, setQuery] = useState(input.trim());

  // Search 300 ms after the user stops typing, and keep ?q= in the URL so the result can be shared.
  useDebounce(
    () => {
      const next = input.trim();
      setQuery(next);
      const url = next ? `?q=${encodeURIComponent(next)}` : window.location.pathname;
      window.history.replaceState(null, '', url);
    },
    300,
    [input],
  );

  const { data: posts = [], isFetching } = useQuery({
    queryKey: ['searchBlogPostsAPI', query],
    queryFn: () => searchBlogPostsAPI(query).then((res) => res.data),
    enabled: query.length > 0,
  });

  return (
    <>
      <div className={styles.searchBox}>
        <IconSearch />
        <input type='search' value={input} onChange={(e) => setInput(e.currentTarget.value)} aria-label='블로그 검색' />
        {isFetching && <Loading small className={styles.loading} />}
      </div>
      <p className={styles.header}>검색결과</p>
      {query && !isFetching && posts.length === 0 && <p className={styles.empty}>검색 결과가 없습니다.</p>}
      <div className={styles.hits}>
        <ul className={styles.hitsList}>
          {posts.map((post) => (
            <li key={post.id} className={styles.hitsItem}>
              <div className={styles.highlight}>
                <Link href={`/blog/${post.id}`}>
                  {post.hero && (
                    <div className={styles.hero}>
                      <Image src={post.hero} width={240} height={160} alt='' loader={imageLoaderDo2Ik} />
                    </div>
                  )}
                  <div className={styles.content}>
                    <p className={styles.title}>
                      <Highlight text={post.title} query={query} />
                    </p>
                    <p className={styles.body}>
                      <Highlight text={post.snippet} query={query} />
                    </p>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BlogSearchContent;
