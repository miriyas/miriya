'use client';

import styles from './index.module.scss';

interface Example {
  title: string;
  url: string;
  postUrl?: string;
}

const examples: Example[] = [
  {
    title: 'View Transitions API',
    url: '/example/viewtransition/sample1',
  },
  {
    title: 'Animated Mouse Cursor',
    url: '/example/mousecursor',
    postUrl: '/blog/cljt1vroo0001wbs5usxscp79',
  },
  {
    title: 'Next.js middleware',
    url: '/example/middleware',
  },
];

const SamplePage = () => {
  return (
    <main className={styles.samplePage}>
      <h1>예제들</h1>
      <ul>
        {examples.map((example) => {
          return (
            <li key={example.url}>
              <p>{example.title}</p>
              <a href={example.url}>예제</a>
              {example.postUrl && <a href={example.postUrl}>참조글</a>}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default SamplePage;
