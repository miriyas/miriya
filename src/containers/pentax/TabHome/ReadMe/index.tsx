/* eslint-disable react/no-danger */

import styles from './ReadMe.module.scss';

interface Props {
  readMe: string;
}

const ReadMe = ({ readMe }: Props) => {
  return (
    <div className={styles.mdWrapper}>
      <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: readMe }} />
    </div>
  );
};

export default ReadMe;
