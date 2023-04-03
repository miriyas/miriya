import { FullCommitData } from '@/types/github';
import { getTimeDiffText } from '@/utils/date';

import ExternalLink from '@/components/ExternalLink';
import styles from './RightWing.module.scss';

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
            <ExternalLink href={d.html_url} className={styles.message}>
              {d.commit.message}
            </ExternalLink>
            <div className={styles.author}>{prettyAuthor(d.commit.author.name)}</div>
            <time className={styles.message}>{getTimeDiffText(d.commit.committer.date)}</time>
          </li>
        );
      })}
    </ul>
  );
};

export default Commits;
