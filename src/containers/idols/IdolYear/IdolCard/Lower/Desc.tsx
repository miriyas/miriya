import { MouseEventHandler } from 'react';

import { useGA } from '@/hooks/useGA';
import { IdolType } from '@/types/idols.d';
import { IDOL } from '@/constants/ga';

import { IconDescMelon, IconDescNamu, IconDescVibe } from 'public/svgs';
import styles from './index.module.scss';

interface Props {
  idol: IdolType;
}

const Desc = ({ idol }: Props) => {
  const { desc, name } = idol;

  const { gaEvent } = useGA();

  const onClickDesc: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const { title: target, href } = e.currentTarget;
    gaEvent(IDOL.IDOL_DESC_CLICK, { name, target });
    window.open(href);
  };

  return (
    <div className={styles.desc}>
      <ul className={styles.outerLinks}>
        {desc?.namu && (
          <li>
            <a href={desc.namu} target='_blank' onClick={onClickDesc} title='나무위키' rel='nofollow'>
              <IconDescNamu />
            </a>
          </li>
        )}
        {desc?.melon && (
          <li>
            <a href={desc.melon} target='_blank' onClick={onClickDesc} title='멜론' rel='nofollow'>
              <IconDescMelon />
            </a>
          </li>
        )}
        {desc?.naver && (
          <li>
            <a href={desc.naver} target='_blank' onClick={onClickDesc} title='바이브' rel='nofollow'>
              <IconDescVibe />
            </a>
          </li>
        )}
      </ul>
      {desc?.title && <p className={styles.desc}>{desc.title}</p>}
    </div>
  );
};

export default Desc;
