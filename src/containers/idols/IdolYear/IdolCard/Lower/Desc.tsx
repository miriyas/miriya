import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

import { useGA } from '@/hooks/useGA';
import { IdolType } from '@/types/idols.d';
import { IDOL } from '@/constants/ga';

import styles from './Desc.module.scss';

interface Props {
  idol: IdolType;
  showHistory: boolean;
  setShowHistory: Dispatch<SetStateAction<boolean>>;
}

const Desc = ({ idol, showHistory, setShowHistory }: Props) => {
  const { desc, name } = idol;

  const { gaEvent } = useGA();

  const onClickDesc: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const { title: target, href } = e.currentTarget;
    gaEvent(IDOL.IDOL_DESC_CLICK, { name, target });
    window.open(href);
  };

  const onClickToggle = () => {
    setShowHistory((prev) => !prev);
  };

  return (
    <div className={styles.desc}>
      <div className={styles.leftWing}>
        {desc?.namu && (
          <a href={desc.namu} target='_blank' onClick={onClickDesc} title='나무위키' rel='nofollow'>
            나무위키
          </a>
        )}
        {desc?.melon && (
          <a href={desc.melon} target='_blank' onClick={onClickDesc} title='멜론' rel='nofollow'>
            멜론
          </a>
        )}
        {desc?.naver && (
          <a href={desc.naver} target='_blank' onClick={onClickDesc} title='바이브' rel='nofollow'>
            바이브
          </a>
        )}
        {desc?.title && <p>한줄평 : {desc.title}</p>}
      </div>
      <div className={styles.rightWing}>
        <button type='button' onClick={onClickToggle}>
          {showHistory ? '댓글 목록' : '수정 기록'}
        </button>
      </div>
    </div>
  );
};

export default Desc;
