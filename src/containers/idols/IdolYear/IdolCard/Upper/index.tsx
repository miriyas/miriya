'use client';

import { useSetAtom } from 'jotai';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import { Idol } from '@/types/idols.d';
import { editIdolAtom } from '@/containers/idols/states';

import { IconComment, IconEdit } from 'public/svgs';
import Profile from './Profile';
import Youtube from './Youtube';
import idolStyles from '../index.module.scss';
import styles from './index.module.scss';

interface Props {
  idol: Idol;
  opened: boolean;
  onClickOpen: () => void;
}

const Upper = ({ idol, opened, onClickOpen }: Props) => {
  const { commentsLength, youtubeUrl, youtubeStartsAt } = idol;
  const { isSupporter, isAdmin } = useAuth();
  const setEditIdol = useSetAtom(editIdolAtom);
  const hasYoutube = youtubeUrl !== '' && youtubeStartsAt !== 0;

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
      {opened && hasYoutube && <Youtube youtubeUrl={youtubeUrl} youtubeStartsAt={youtubeStartsAt} />}
      {opened && !hasYoutube && <Profile onClickUpper={onClickOpen} idol={idol} />}
      {(isSupporter || isAdmin) && !opened && !idol.descMelon && (
        <span className={cx(styles.no, styles.melon)}>NO M</span>
      )}
      {(isSupporter || isAdmin) && !opened && !idol.descNamu && (
        <span className={cx(styles.no, styles.namu)}>NO N</span>
      )}{' '}
      {(isSupporter || isAdmin) && !opened && !idol.descVibe && (
        <span className={cx(styles.no, styles.vibe)}>NO V</span>
      )}
      {(isSupporter || isAdmin) && !opened && !hasYoutube && <span className={cx(styles.no, styles.yt)}>NO YT</span>}
      {!opened && <Profile onClickUpper={onClickOpen} idol={idol} />}
    </div>
  );
};

export default Upper;
