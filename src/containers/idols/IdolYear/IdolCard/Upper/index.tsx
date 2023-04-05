import { IdolType } from '@/types/idols.d';

import { IconSound } from 'public/svgs';
import Profile from './Profile';
import Youtube from './Youtube';
import styles from './index.module.scss';

interface Props {
  idol: IdolType;
  opened: boolean;
  i: number;
  yearLength: number;
  onClickOpen: () => void;
}

const Upper = ({ idol, opened, i, yearLength, onClickOpen }: Props) => {
  const { youtube } = idol;

  const hasYoutube = youtube && youtube.url !== '';

  return (
    <div className={styles.upper}>
      {hasYoutube && !opened && <IconSound className={styles.withSound} />}
      {opened && hasYoutube && <Youtube youtube={youtube} />}
      {opened && !hasYoutube && <Profile onClickUpper={onClickOpen} i={i} yearLength={yearLength} idol={idol} />}
      {!opened && <Profile onClickUpper={onClickOpen} i={i} yearLength={yearLength} idol={idol} />}
    </div>
  );
};

export default Upper;
