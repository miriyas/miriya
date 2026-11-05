import { FullCommitData } from '@/types/github';
import { getTimeDiffText } from '@/utils/date';

import ExternalLink from '@/components/ExternalLink';
import styles from './Commits.module.scss';

const prettyAuthor = (name: string) => {
  if (name === 'Lee Jun Hyuk') {
    return (
      <p className={styles.author}>
        (<span>킹왕짱</span>이준혁)
      </p>
    );
  }
  return <p className={styles.author}>{`(${name})`}</p>;
};

interface Props {
  data: FullCommitData[];
}

const Commits = ({ data }: Props) => {
  return (
    <ul className={styles.commits}>
      {data.map((d) => {
        return (
          <li key={d.sha}>
            {/* Only the commit title (first line); the body can be many lines. */}
            <ExternalLink href={d.html_url} className={styles.message} title={d.commit.message}>
              {d.commit.message.split('\n')[0]}
            </ExternalLink>
            <div className={styles.author}>{prettyAuthor(d.commit.author.name)}</div>
            {/* Relative time ("21분 전"): the page HTML is cached for up to 1 hour, so the browser
                always shows a newer value. That difference is expected. */}
            <time className={styles.message} suppressHydrationWarning>
              {getTimeDiffText(d.commit.committer.date)}
            </time>
          </li>
        );
      })}
    </ul>
  );
};

export default Commits;
