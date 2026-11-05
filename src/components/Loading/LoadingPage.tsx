'use client';

import cx from 'clsx';

import Loading from '.';
import styles from './Loading.module.scss';

interface Props {
  inComponent?: boolean;
  test?: boolean;
}

// The hourglass stands above the "Loading..." text. (Before, it followed the mouse in place of the
// cursor; until the first mouse move it sat at the same center as the text, and on phones it never
// appeared.)
const LoadingPage = ({ inComponent, test }: Props) => {
  return (
    <div className={cx(styles.loadingPage, { [styles.inComponent]: inComponent, [styles.test]: test })}>
      <div className={styles.hourGlass} aria-hidden='true' />
      <Loading noSpinner />
    </div>
  );
};

export default LoadingPage;
