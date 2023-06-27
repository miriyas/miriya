'use client';

import ExternalLink from '@/components/ExternalLink';
import styles from './Warning.module.scss';

const Warning = () => {
  if (!document.startViewTransition)
    return (
      <div className={styles.warning}>
        <p className={styles.title}>주의 : 현재 브라우저에서 View Transitions API를 지원하지 않고 있습니다.</p>
        <p className={styles.desc}>
          View Transitions API는 현재 Chrome v111 이상, Edge v111 이상, Opera v97이상에서만 지원됩니다.
        </p>
        <ExternalLink href='https://caniuse.com/?search=viewtransition'>최신 정보 보기</ExternalLink>
        <p className={styles.desc}>
          페이지간 트랜지션 (css-view-transitions-2 모듈)은 현재 스펙 작업중인 상태입니다. 예제 12번과 13번은 오동작할
          것입니다.
        </p>
        <ExternalLink href='https://github.com/w3c/csswg-drafts/issues?q=css-view-transitions-2+label%3Acss-view-transitions-2'>
          스펙 상황 보기
        </ExternalLink>
      </div>
    );
  return null;
};

export default Warning;
