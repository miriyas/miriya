/* eslint-disable react/no-danger */

import styles from './Desc.module.scss';

interface Props {
  desc: string;
}

const Desc = ({ desc }: Props) => {
  return (
    <div className={styles.desc}>
      <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
};

export default Desc;
