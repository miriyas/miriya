import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

import { useGA } from '@/hooks/useGA';
import { IdolCore } from '@/types/idols.d';
import { IDOL } from '@/constants/ga';

import styles from './Desc.module.scss';
import ExternalLink from '@/components/ExternalLink';

interface Props {
  idol: IdolCore;
  showHistory: boolean;
  setShowHistory: Dispatch<SetStateAction<boolean>>;
}

const Desc = ({ idol, showHistory, setShowHistory }: Props) => {
  const { descNamu, descMelon, descTitle, descVibe, name } = idol;

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
        {descNamu && (
          <ExternalLink href={descNamu} onClick={onClickDesc} title='나무위키' className={styles.link}>
            나무위키
          </ExternalLink>
        )}
        {descMelon && (
          <ExternalLink href={descMelon} onClick={onClickDesc} title='멜론' className={styles.link}>
            멜론
          </ExternalLink>
        )}
        {descVibe && (
          <ExternalLink href={descVibe} onClick={onClickDesc} title='바이브' className={styles.link}>
            바이브
          </ExternalLink>
        )}
        {descTitle && <p>한줄평 : {descTitle}</p>}
      </div>
      <div className={styles.rightWing}>
        <button type='button' onClick={onClickToggle} className={styles.link}>
          {showHistory ? '댓글 목록' : '수정 기록'}
        </button>
      </div>
    </div>
  );
};

export default Desc;
