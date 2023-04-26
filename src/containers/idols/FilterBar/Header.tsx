import ExternalLink from '@/components/ExternalLink';
import styles from './FilterBar.module.scss';

interface Props {
  idolsLength: number;
  yearStart: number;
  yearEnd: number;
}

const Header = ({ idolsLength, yearStart, yearEnd }: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.upper}>
        <h1>
          History of Idols&nbsp;
          <span>
            {yearStart}~{yearEnd}
          </span>
        </h1>
      </div>
      <div className={styles.notice}>
        데뷔일 기준, {yearStart}년부터 현재까지 활동한 한국 아이돌을 정리중입니다.
        <br />
        소스는 나무위키&nbsp;
        <ExternalLink href='https://namu.wiki/w/%ED%95%9C%EA%B5%AD%20%EC%95%84%EC%9D%B4%EB%8F%8C/%EC%97%AD%EC%82%AC'>
          한국 아이돌/역사
        </ExternalLink>
        문서이며, 긁어다 쓰기 쉽게 <ExternalLink href='/idols/crawl'>정리된 표</ExternalLink>도 있습니다.
        <br />
        {idolsLength}명 편집하느라 지친 터라 의도하지 않은 얼굴 교체나 틀린 내용, 추가할 부분이 있을 수 있습니다.
        <br />
        <ExternalLink href='mailto:miriya.lee@gmail.com'>miriya.lee@gmail.com</ExternalLink>
        으로 신고해주세요. 개발자라면, 상단 깃허브 링크로 PR을 올려주세요.
      </div>
    </div>
  );
};

export default Header;
