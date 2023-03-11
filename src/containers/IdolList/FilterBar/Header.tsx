import { useGA } from '@/hooks/useGA';
import { IconGithub } from '@/assets/svgs';
import { IDOLS, YEAR_INFO } from '@/constants';

import styles from './FilterBar.module.scss';
import { IDOL } from '@/constants/ga';
import { MouseEventHandler } from 'react';

const Header = () => {
  const { gaEvent } = useGA();

  const onClickGithub: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    window.open(e.currentTarget.href);
    gaEvent(IDOL.IDOL_GITHUB_CLICK, {});
  };

  return (
    <div className={styles.header}>
      <div className={styles.upper}>
        <h1>
          History of Idols&nbsp;
          <span>
            {YEAR_INFO.start}~{YEAR_INFO.end}
          </span>
        </h1>
        <div className={styles.outerLinks}>
          <a href='https://github.com/miriyas/idols' target='_blank'>
            <IconGithub />
          </a>
        </div>
      </div>
      <div className={styles.notice}>
        데뷔일 기준, 96년부터 현재까지 활동한 한국 아이돌을 정리중입니다.
        <br />
        소스는 나무위키&nbsp;
        <a
          onClick={onClickGithub}
          href='https://namu.wiki/w/%ED%95%9C%EA%B5%AD%20%EC%95%84%EC%9D%B4%EB%8F%8C/%EC%97%AD%EC%82%AC'
          target='_blank'
        >
          한국 아이돌/역사
        </a>
        문서이며, 굵게 표시한 부분도 나무위키의 기준을 따랐습니다.
        <br />
        일부 항목은 나무위키 / 네이버 바이브 / 멜론의 링크를 포함하고 있습니다.
        <br />
        대표 사진은 구할 수 있는 한 가장 오래되고 촌스러운 사진을 골랐습니다.
        <br />
        {IDOLS.length}명 편집하느라 지친 터라 의도하지 않은 얼굴 교체나 틀린 내용, 추가할 부분이 있을 수 있습니다.
        <br />
        <a href='mailto:miriya.lee@gmail.com' target='_blank'>
          miriya.lee@gmail.com
        </a>
        으로 신고해주세요. 개발자라면, 상단 깃허브 링크로 PR을 올려주세요.
      </div>
    </div>
  );
};

export default Header;
