import { useSetAtom } from 'jotai';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import { FBIdolType } from '@/types/idols.d';
import { editIdolAtom } from '@/containers/idols/states';

import { IconComment, IconEdit } from 'public/svgs';
import Profile from './Profile';
import Youtube from './Youtube';
import idolStyles from '../index.module.scss';
import styles from './index.module.scss';

interface Props {
  idol: FBIdolType;
  opened: boolean;
  onClickOpen: () => void;
}

const Upper = ({ idol, opened, onClickOpen }: Props) => {
  const { commentsLength, youtube } = idol;
  const { isSupporter, isAdmin } = useAuth();
  const setEditIdol = useSetAtom(editIdolAtom);
  const hasYoutube = youtube && youtube.url !== '';

  const onClickEdit = () => {
    setEditIdol(idol.name);
  };

  return (
    <div className={cx(idolStyles.upper, styles.upper, { [styles.opened]: opened })}>
      {opened && (
        <button type='button' className={styles.toEdit} onClick={onClickEdit} aria-label='edit'>
          <IconEdit />
        </button>
      )}
      {!opened && commentsLength > 0 && (
        <div className={styles.withComment}>
          <IconComment />
          <span>{commentsLength}</span>
        </div>
      )}
      {opened && hasYoutube && <Youtube youtube={youtube} />}
      {opened && !hasYoutube && <Profile onClickUpper={onClickOpen} idol={idol} />}
      {(isSupporter || isAdmin) && !opened && !hasYoutube && <span className={styles.noYt}>NO YT</span>}
      {!opened && <Profile onClickUpper={onClickOpen} idol={idol} />}
    </div>
  );
};

export default Upper;
