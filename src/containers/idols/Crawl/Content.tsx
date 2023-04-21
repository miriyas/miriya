'use client';

import { useEffect, useState } from 'react';

import { crawlIdolData } from '@/services/idols';
import { CrawlIdolData, CrawlGeneration } from '@/types/idols.d';

import styles from './index.module.scss';
import ExternalLink from '@/components/ExternalLink';

const IdolsContent = () => {
  const [crawlData, setCrawlData] = useState<CrawlIdolData>({});

  useEffect(() => {
    crawlIdolData().then((res) => {
      setCrawlData(res.data);
    });
  }, []);

  return (
    <main className={styles.idolCrawl}>
      <div>
        {Object.keys(crawlData).map((genName) => {
          const generation = crawlData[genName] as CrawlGeneration;
          return (
            <table key={genName}>
              <thead>
                <tr>
                  <td colSpan={2}>{genName}</td>
                </tr>
              </thead>
              <tbody>
                {Object.keys(generation).map((categoryName) => {
                  const idols = generation[categoryName];
                  return (
                    <tr key={categoryName}>
                      <td>{categoryName}</td>
                      <td>
                        {idols.map((idol) => {
                          return (
                            <ExternalLink key={idol.name} href={`https://namu.wiki${idol.url}`}>
                              {idol.name}
                            </ExternalLink>
                          );
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        })}
      </div>
    </main>
  );
};

export default IdolsContent;
