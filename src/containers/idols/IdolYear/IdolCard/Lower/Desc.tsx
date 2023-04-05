import { MouseEventHandler } from 'react';
import cx from 'clsx';

import { useGA } from '@/hooks/useGA';
import { IdolType } from '@/types/idols.d';
import { IDOL } from '@/constants/ga';

import styles from './CommentItem.module.scss';

interface Props {
  idol: IdolType;
}

const Desc = ({ idol }: Props) => {
  const { desc, name } = idol;

  const { gaEvent } = useGA();

  if (!desc) return null;

  const onClickDesc: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const { title: target, href } = e.currentTarget;
    gaEvent(IDOL.IDOL_DESC_CLICK, { name, target });
    window.open(href);
  };

  return (
    <li className={cx(styles.commentItem, styles.desc)}>
      <div className={styles.upper}>
        <span>{desc.title && `${desc.title} /`}</span>
        {desc.namu && (
          <a href={desc.namu} target='_blank' onClick={onClickDesc} title='나무위키' rel='nofollow'>
            나무위키
          </a>
        )}
        {desc.melon && (
          <a href={desc.melon} target='_blank' onClick={onClickDesc} title='멜론' rel='nofollow'>
            멜론
          </a>
        )}
        {desc.naver && (
          <a href={desc.naver} target='_blank' onClick={onClickDesc} title='바이브' rel='nofollow'>
            바이브
          </a>
        )}
      </div>
    </li>
  );
};

export default Desc;
