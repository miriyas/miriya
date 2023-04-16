import { useSetAtom } from 'jotai';

import { FBIdolType } from '@/types/idols.d';
import { editIdolAtom } from '@/containers/idols/states';

import { IconSound, IconComment, IconEdit } from 'public/svgs';
import Profile from './Profile';
import Youtube from './Youtube';
import styles from './index.module.scss';

interface Props {
  idol: FBIdolType;
  opened: boolean;
  i: number;
  yearLength: number;
  onClickOpen: () => void;
}

const Upper = ({ idol, opened, i, yearLength, onClickOpen }: Props) => {
  const { commentsLength, youtube } = idol;
  const setEditIdol = useSetAtom(editIdolAtom);
  const hasYoutube = youtube && youtube.url !== '';

  const onClickEdit = () => {
    setEditIdol(idol.name);
  };

  return (
    <div className={styles.upper}>
      {opened && (
        <button type='button' className={styles.toEdit} onClick={onClickEdit} aria-label='edit'>
          <IconEdit />
        </button>
      )}
      {!opened && hasYoutube && <IconSound className={styles.withSound} />}
      {!opened && commentsLength > 0 && (
        <div className={styles.withComment}>
          <IconComment />
          <span>{commentsLength}</span>
        </div>
      )}
      {opened && hasYoutube && <Youtube youtube={youtube} />}
      {opened && !hasYoutube && <Profile onClickUpper={onClickOpen} i={i} yearLength={yearLength} idol={idol} />}
      {!opened && <Profile onClickUpper={onClickOpen} i={i} yearLength={yearLength} idol={idol} />}
    </div>
  );
};

export default Upper;
