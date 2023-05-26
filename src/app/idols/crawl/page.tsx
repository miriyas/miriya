import { CrawlGeneration } from '@/types/idols.d';
import { crawlIdolData } from '@/services/idols';

import styles from './index.module.scss';
import ExternalLink from '@/components/ExternalLink';

const CrawlIdolPage = async () => {
  const crawlData = await crawlIdolData()
    .then((res) => res.data)
    .catch(() => []);

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

export default CrawlIdolPage;
