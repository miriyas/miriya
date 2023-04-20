import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

import { useGA } from '@/hooks/useGA';
import { IdolType } from '@/types/idols.d';
import { IDOL } from '@/constants/ga';

import styles from './Desc.module.scss';
import ExternalLink from '@/components/ExternalLink';

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
          <ExternalLink href={desc.namu} onClick={onClickDesc} title='나무위키'>
            나무위키
          </ExternalLink>
        )}
        {desc?.melon && (
          <ExternalLink href={desc.melon} onClick={onClickDesc} title='멜론'>
            멜론
          </ExternalLink>
        )}
        {desc?.naver && (
          <ExternalLink href={desc.naver} onClick={onClickDesc} title='바이브'>
            바이브
          </ExternalLink>
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
