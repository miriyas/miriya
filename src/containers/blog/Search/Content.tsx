/* eslint-disable no-underscore-dangle */

'use client';

import { InstantSearch, Hits, connectSearchBox, connectHighlight } from 'react-instantsearch-dom';
import { Configure, HighlightProps, SearchBoxProvided } from 'react-instantsearch-core';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { imageLoaderDo2Ik } from '@/utils/image';

import styles from './index.module.scss';
import Loading from '@/components/Loading';
import { IconSearch } from 'public/svgs';

interface CustomSearchBoxProps extends SearchBoxProvided {
  defaultRefinement?: string;
}

const SearchBox = ({ refine, currentRefinement, isSearchStalled, defaultRefinement }: CustomSearchBoxProps) => {
  return (
    <div className={styles.searchBox}>
      <IconSearch />
      <input
        type='search'
        value={currentRefinement ?? defaultRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
      {isSearchStalled && <Loading small className={styles.loading} />}
    </div>
  );
};

const CustomSearchBox = connectSearchBox<CustomSearchBoxProps>(SearchBox);

const Highlight = ({ highlight, attribute, hit }: HighlightProps) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <div className={styles.highlight}>
      <Link href={`/blog/${hit.objectID}`}>
        {hit.hero && (
          <div className={styles.hero}>
            <Image src={hit.hero} width={240} height={160} alt='' loader={imageLoaderDo2Ik} />
          </div>
        )}

        <div className={styles.content}>
          <p className={styles.title}>{hit.title}</p>
          <p className={styles.body}>
            {parsedHit.map((part, i) => {
              const key = `parsedhit-${i}`;
              return part.isHighlighted ? <mark key={key}>{part.value}</mark> : <span key={key}>{part.value}</span>;
            })}
          </p>
        </div>
      </Link>
    </div>
  );
};

const CustomHighlight = connectHighlight(Highlight);

interface IHit {
  body: string;
  hidden: boolean;
  title: string;
  objectID: string;
  _highlightResult: {
    [key: string]: {
      value: string;
    };
  };
}

const searchClient = instantMeiliSearch(
  'https://ms-41644f0a319b-3937.sgp.meilisearch.io',
  `${process.env.NEXT_PUBLIC_MEILISEARCH_KEY}`,
  {
    placeholderSearch: false,
    primaryKey: '_firestore_id',
  },
);

const Hit = ({ hit }: { hit: IHit }) => {
  if (hit.hidden) return null;

  return <CustomHighlight attribute='body' hit={hit} />;
};

const BlogSearchContent = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') ?? '';

  return (
    <InstantSearch searchClient={searchClient} indexName='miriya'>
      <CustomSearchBox defaultRefinement={q} />
      <p className={styles.header}>검색결과</p>
      <Configure attributesToSnippet={['body:100']} />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
};

export default BlogSearchContent;
