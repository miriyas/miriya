'use client';

import { MouseEventHandler } from 'react';

interface Props {
  hash: string;
  name: string;
}

const SiblingLink = (props: Props) => {
  const { hash, name } = props;

  const onClickSiblings: MouseEventHandler<HTMLAnchorElement> = (e) => {
    // NOTE: 형제 기종을 클릭하면 해당 위치로 스무스하게 스크롤해준다.
    e.preventDefault();
    const id = e.currentTarget.dataset.target ?? '';
    window.history.pushState(null, '', `#${id}`);
    // NOTE:  Next/Link나 Next/Navigation을 쓰지 않는 이유는 Next experimental appDir이기 때문.
    // appDir에서 asPath를 없애버려 hash 변화를 알 수 없고, 아직 <Link>로 hash 지원이 아직 안되기 때문이다.
    // https://github.com/vercel/next.js/issues/42157 외에도 hash 관련 미구현이나 버그가 매우 많다.
    // 또한 hash 변경시 페이지 스크롤 점핑을 막기 위해 pushState를 쓴다. 우울한 일이지..
    window.dispatchEvent(new CustomEvent('hashchange'));
    // NOTE: pushState는 hashChange 이벤트를 발생시키지 않음.. 이런것 까지 하고 싶지는 않았다.. hash를 그냥 안쓰고 싶지만 그래도 해봐야지
    // https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <a href={`#${hash}`} data-target={hash} onClick={onClickSiblings} rel='nofollow'>
      {name}
    </a>
  );
};

export default SiblingLink;
