import cx from 'clsx';

import ExternalLink from '@/components/ExternalLink';
import styles from './index.module.scss';

interface Props {
  yearStart: number;
  yearEnd: number;
  length: number;
}

const Header = ({ yearStart, yearEnd, length }: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.upper}>
        <h1>
          History of DSLR&nbsp;
          <span>
            {yearStart}~{yearEnd}
          </span>
        </h1>
      </div>
      <div className={cx(styles.commonBox, styles.notice)}>
        출시일 기준, 95년부터 현재까지 출시된 DSLR/DSLT를 정리중입니다.
        <br />
        {length}개 카메라를 여러 소스에서 교차 검증하다보니 틀린 내용, 추가할 부분이 있을 수 있습니다.
        <br />
        <ExternalLink href='mailto:miriya.lee@gmail.com'>miriya.lee@gmail.com</ExternalLink>
        으로 신고해주세요. 개발자라면, 상단 깃허브 링크로 PR을 올려주세요.
      </div>
    </div>
  );
};

export default Header;
