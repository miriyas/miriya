<a href="https://codeclimate.com/github/miriyas/idols/maintainability"><img src="https://api.codeclimate.com/v1/badges/59cc1769c02f412ac124/maintainability" /></a> [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fmiriyas%2Fidols&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

<img src='./screenshot.png' alt=''>

<img src='./screenshot-lighthouse.png' alt=''>

# History of Idols

## 일반인을 위한 글

1996년부터 2019년까지의 아이돌 목록을 정리해봤습니다. 아이돌 등재 기준은 ['나무위키 한국 아이돌/역사'](https://namu.wiki/w/%ED%95%9C%EA%B5%AD%20%EC%95%84%EC%9D%B4%EB%8F%8C/%EC%97%AD%EC%82%AC) 입니다.

보다 보면 이 사람이 왜 아이돌이야? 하는 경우도 있을 것 같습니다만, 대량으로 등록하다보면 어쩔 수 없습니다. 직접 해보세요.

정리할 자료가 수백명이나 되다 보니 내용상 누락이나 잘못된 부분이 있을 수 있습니다. ['이곳'](https://github.com/miriyas/idols/issues)에 글을 남겨주시거나, ['miriya.lee@gmail.com'](mailto://miriya.lee@gmail.com)으로 메일을 보내주세요.

정말 큰 도움이 되고 싶을 경우, ['원본 데이터'](https://github.com/miriyas/idols/blob/main/src/constants/idols.ts)를 참조하여 유튜브 주소나 시작 시간 등을 만들어주시면 더욱 좋습니다.

## 개발자를 위한 글

[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) 을 이용해 만든 [Next.js](https://nextjs.org/) 프로젝트입니다.

아시죠? 개선하고 싶은 부분이 있다면 PR을 올려주세요.

몇년 전 까지는 유튜브 자동 재생이 되었는데, 막혀버렸네요 :(

[![Miriyas's GitHub stats](https://github-readme-stats.vercel.app/api?username=miriyas)](https://github.com/anuraghazra/github-readme-stats)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=miriyas)](https://github.com/anuraghazra/github-readme-stats)

# [Next.js 13.2.5-canary.18](https://github.com/vercel/next.js/releases) with Experimental appDir

## 현재까지 알아낸 Next.js 13 + appDir 관련 이슈 목록

1. 해시 아이디로 링킹 오작동

- https://github.com/vercel/next.js/issues/42157

영향 받는 코드 : src/components/Camera/Table/DataSiblings/SiblingLink.tsx

2. next/dynamic 사용시 프로덕션에서 일부 chunk 404

- 프로덕션에서만 재현됨
- 단일 페이지 앱에선 재현 안되며, 타 라우트로 이동해야 함
- 모든 컴포넌트를 주석 처리하면 재현 안되지만, 진짜 [간단한 컴포넌트](src/containers/profile/index.tsx)라도 404유발됨
- client-reference-manifest.json에 저장되는 경로가 잘못 들어감. (예를 들어 830-004c10da4a4c61af.js 가 있는데 기록되는건 830-s0meth1ngwr0ng.js)
- Next 뿐만 아니라 Nuxt에도 유사 이슈 있다 함
- next/dynamic 자체를 아예 쓸 수 없게됨
- https://github.com/vercel/next.js/issues/47173

3. appDir일 경우 CSS 프리로딩 안됨, FOUC 유발됨

- 첫 페이지일 경우엔 문제 없으나, 타 페이지로 이동하면 CSS 로딩이 늦음
- 헤더에 <link style> 부분에 preload 안붙어서 concat 됨
- 프로덕션과 로컬 모두 재현됨
- https://github.com/vercel/next.js/discussions/41745#discussioncomment-5106716
- https://github.com/vercel/next.js/issues/46197
- https://github.com/vercel/next.js/issues/46510
- https://github.com/vercel/next.js/issues/46868
- https://github.com/vercel/next.js/issues/46947

4. i18n 적용시 인스턴스가 무한 생성됨

- https://locize.com/blog/next-13-app-dir-i18n/

5. 서버 중복 요청 문제

- app/api 폴더에 api 만들어서 사용하면, 서버에서 타 페이지로 요청이 한번이 아니라 두번 감

6. 컴포넌트 중복 마운트 문제

- 마운트가 두번 됨, useMount 사용 불가능
- React StrictMode 꺼도 마찬가지임

7. 특정 훅 사용시 SSR/메타데이터 파괴

- useSearchParams 쓸 경우, 해당 컴포넌트 부모중 Suspense가 있는지 찾아올라감
- 위로 타고 올라가다가 Suspense가 정 없으면, SSR 다 박살내고 CSR로 로딩, 페이지 메타태그 안나옴
- 아주 조용히 문제가 생겨서 실무에 쓰기엔 너무 위험해보임
- https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering#using-dynamic-functions
- 다음 넥스트 버전에선 해당 훅 사용시 뭔가 경고라도 띄웠으면 좋겠다. 거의 소리없는 암살자 수준

## 삽질 기록

1. 서버와 클라이언트의 소팅이 다르다?

```
const idols = ['고구려', '박지윤', '베이비복스', '스페이스A', '자우림', '젝스키스', '지누션', '태사자', '홍경민', 'NRG', 'S.E.S', 'TNB', 'UNO'];

idols.sort((a, b) => a.name.toLowerCase().localeCompare(b.name)) // 1

sortBy(idols, 'name', 'asc') // 2

idols.sort((a, b) => {
  if (a.name.toLowerCase() === b.name.toLowerCase()) return 0;
  return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
}); // 3

// server
// ['NRG', 'S.E.S', 'TNB', 'UNO', '고구려', '박지윤', '베이비복스', '스페이스A', '자우림', '젝스키스', '지누션', '태사자', '홍경민']

// client
// ['고구려', '박지윤', '베이비복스', '스페이스A', '자우림', '젝스키스', '지누션', '태사자', '홍경민', 'NRG', 'S.E.S', 'TNB', 'UNO']
```

위 세가지 코드로 배열을 정렬할 경우, 서버와 클라이언트에서 순서가 다르게 나옴.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

- localeCompare에 두번째 인자가 있었다.
- 서버와 클라이언트의 로케일이 달라서 생긴 문제였음.

2. 메타데이터가 갑자기 안나온다!

- 페이스북이나 카카오톡으로 공유를 했는데, 기존에 pages 로 작업한건 문제가 없지만 appDir로 바꾼 직후 미리보기 이미지가 안나오더라
- [페이스북 디버거](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fmiriya.vercel.app%2Fcameras)로 확인해보니 og-image가 나오지 않고 있음
- '스크레이퍼에게 표시되는 URL 그대로 보기'로 확인해보니 head 부분에 메타데이터가 없고, **next_error** 가 보인다.
- https://github.com/vercel/next.js/issues/47350
- https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering#using-dynamic-functions
- https://github.com/vercel/next.js/commit/b3dfa037670c8601332edb7c749b48f588d9e72a
- bailout-to-client-rendering 호출되면 CSR로 전환되는듯.

3. id로 라우팅 하기가 힘들다.

- src/components/Camera/Table/DataSiblings/SiblingLink.tsx
- 위 파일에서 각 카메라들의 후속기로 이동하는 링크를 구현했음.
- 클릭 하면 스무스하게 스크롤해서 해당 카메라로 이동하는 간단한 기능
- next/link의 <Link> 사용하니 href='#id' 넣어도 제대로 작동하지 않았음, 리랜더가 유발되며 페이지가 전환됨
- https://github.com/vercel/next.js/issues/42157
- 매우 부득이하게 pushState로 url 업데이트하고, 별도로 hashchange 이벤트를 쏴서 현재 기종 하이라이트 구현함
- asPath가 삭제되어, 공식적으로 제공되는 훅으로 id를 알아낼 수가 없다.

4. queryString으로 라우팅 하기도 힘들다.

- src/containers/cameras/FilterBar/index.tsx
- /cameras?maker=nikon 등으로 링크 이동시 리랜더됨
- pushState로 처리함

5. 사파리에서 idol 이미지 border-radius 오작동

- 처음엔 잘 나오는데, 주변 다른 아이돌을 클릭해서 확장할 경우 둥글게 처리 된 것이 사각으로 나옴
- 웹킷 버그였음. https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari
