export const articles = [
  {
    id: 'profile',
    summary: '프론트엔드 웹 개발자로 일하고 있는 miriya의 개인 작업 목록입니다.\n궁금하신게 있나요?',
  },
  {
    id: 'idols',
    summary:
      '데뷔일 기준 1996년부터 현재까지 활동한 한국 아이돌을 정리하..다 말았습니다.\n각 아이돌을 클릭하면 해당 아이돌이 부른 대표곡의 하이라이트 부분이 재생됩니다..\n추억여행 한번 빠져보시죠.',
    dev: '원본은 2019년에 [CRA](https://create-react-app.dev/) 기반으로 처음 만들었고, 지금 해당 코드를 다시 열어보니 눈이 썩어버릴것 같았습니다. 아마 지금 이 코드를 4년 후에 열어봐도 눈이 썩겠지요. 아시다시피 프론트엔드는 변화가 너무나 빨라서 불과 2주 전에 짠 코드도 너무나 형편없어보이기 마련입니다. 하지만 두려워하지 않고 계속 짜볼랍니다. 1년 뒤에 구려보이는 코드를 짜는 것 보다, 1년 뒤에 봐도 구려보이지 않는게 더 무서운거 아니겠습니까.',
    devList: [
      '2019년에 만들 때는 레이어를 여는 순간 동영상 자동 재생이 가능했는데, 거의 세번에 걸쳐 기능이 막혔습니다. 이건 뭐 창과 방패의 싸움인가.. 아쉽지만 어쩔 수 없죠.',
      '이번에 다 갈아엎는 김에 [Next.js](https://beta.nextjs.org/docs)로 포팅했습니다. 실무에서 CRA 기반으로 만들게 되면 회사에서 SEO를 요구할 때 메타데이터 작업이 여의치가 않더군요. 아시다시피 [Helmet](https://github.com/nfl/react-helmet) 같은걸로 갈아주는 것도 한계가 있잖아요?',
      '원래 나무위키, 멜론, 바이브의 로고를 넣어서 외부 링크를 표현했습니다. 근데 Next.js에서는 svg 핸들링을 할 때 viewbox를 자동으로 날리는 문제가 있습니다. 이건 이미 알고 있어서 수정했지만, svg 내부에서 id ref로 그라데이션을 그릴 경우 ref id를 지들이 맘대로 단축을 시켜버리면서 id가 섞여버리는 문제가 있었죠. 자동으로 난수를 생성해서 아이디 prefix로 다는 방법을 시도하다가, 그냥 svg를 수정해서 ref를 없애버렸습니다.',
    ],
  },
  {
    id: 'cameras',
    summary:
      '출시일 기준, 95년부터 현재까지 출시된 DSLR/DSLT를 정리중입니다..\n저는 대학생 시절 [SLR클럽](http://www.slrclub.com) 활동을 활발하게 했었고,\n당시에 플래시와 포토샵으로 [카메라 족보](http://www.slrclub.com/bbs/vx2.php?id=best_review&no=2248)와 [펜탁스 렌즈의 계보표](http://www.slrclub.com/bbs/vx2.php?id=pds&no=28147)를 만든 적이 있었지요.',
    dev: '개발자 멘트 : 당시에 어떤 분이 <q>"나같으면 자바스크립트로 짜겠다"</q> 라고 말한걸 아직 기억하고 있습니다. 그때는 <q>"와 개발자 무서워, 어떻게 코딩이 더 쉽지?"</q> 라고 생각했었지요. 하지만 12년이 지난 지금 오니 세로 2만 픽셀짜리 PSB (PSD의 오타 아님) 파일을 일일히 수정하는 것 보다 코딩으로 만드는게 더 효율적이고 쉽네요.',
    devList: [
      'Next.js 13 버전의 experimental appDir을 적용해봤습니다. 2023년 3월 현재 기준으로는 일단 실무에서 쓰진 못할 물건입니다. 라우팅 관련된 모든 부분에 hash id 쓰는 부분이 몽땅 누락되어있고, 대안도 없이 못쓰게 만든 기능이 무수하게 많습니다. 또한 [useSearchParams](https://beta.nextjs.org/docs/api-reference/use-search-params#static-rendering) 등 일부 신규 hook들은 Suspense로 감싸지 않으면 상위 컴포넌트로 타고 올라가면서 [웹사이트 전체의 SSR을 깨버리는 무지막지한 문제](https://github.com/vercel/next.js/issues/47350) 도 있습니다. 어딘가 수정했는데 갑자기 SEO 메타태그가 안나온다- 이런 문제가 발생할 수 있는거죠.',
      '번들 용량이 280kb대로 좀 큰 편인데, 이를 해결하기 위해 dynamic import를 쓰고 싶었으나 Next.js에서 랜덤하게 청크 파일이 404 뜨는 문제가 있어 일단 홀드 상태.',
      '찾다보니 동일한 컨셉으로 디지털 카메라를 죄다 모아둔 [Digital Camera Database](https://www.digicamdb.com/)라는 곳을 발견하게 되었습니다. 아 처음부터 여기서 데이터 가져올걸.. 하다가, 크롤링 기능도 만들어봐야겠다- 하고 아주 간단한 파서를 구현해봤습니다.',
      '디지캠의 url 규칙이 제각각이라 변환 함수를 만들었는데, 하는 김에 [간단한 테스트코드](https://github.com/miriyas/miriya/blob/main/src/utils/digicam.spec.ts)도 구현.',
      '새로 카메라 기종이 올라오는 것을 업데이트 하기 위해서는 뉴스를 계속 확인해야 하는데, 귀찮아서 [DPreview](https://www.dpreview.com/)의 뉴스 rss를 긁어오는 기능도 추가.',
    ],
  },
  {
    id: 'minihome',
    summary:
      '싸이월드 미니홈피의 디자인을 그대로 빼닮은 미니홈입니다.\n예전 제가 쓰던 미니룸 스샷을 그대로 넣고, 닭살 돋는 멘트와 이상한 글씨체, 그리고 이상한 사진까지..',
    dev: '개발자 멘트 : 야 이제 뭐 만들까? "방명록!" 아? 좋아 방명록! 방명록을 만들라 하니 싸이월드 모양으로 만들고 싶었고, 수많은 인터넷의 저화질 스샷들을 찾아다가 컬러를 따고 고생을 하고.... N 배지와 꽃 배지 픽셀을 직접 찍고...',
    devList: [
      '댓글 기능을 붙이곤 싶은데, 백엔드 코드를 짜기 싫어서 낑낑대다보니 파이어베이스 연동을 하게 되었네요. 파이어베이스 연동에서 가장 문제는 페이지별 번들 용량이 커진다는 점인데, 이 부분이 트리쉐이킹이 되는 파이어베이스 최신 SDK에서도 어쩔 수 없는 문제더군요. modularizeImports로도 해결이 안되는, 그야말로 그냥 파이어베이스 자체를 쓰기 위한 SDK 자체가 용량이 큽니다.',
      '아이템별 댓글 기능을 달기 이전에 연습삼아 타겟이 하나인 방명록을 만들고자 했습니다. 알고보니 방명록엔 비밀글 기능도 있기에 또 구현하고.. 주위 사람들에게 알려주니까 스팸 방명록을 왕창 날리질 않나, 스팸글 지울라 하니까 내 글이 아니라고 안지워지질 않나 ㅋㅋ',
      '플러스로 깃허브 API 연동해서 최근 업데이트 목록도 만들고, 각 페이지의 댓글 현황을 모아 볼 수 있는 탭 기능도 만들었네요. 심지어 구글 애널리틱스 데이터 + 파이어베이스 Funtions를 이용해 카운터도 구현하였습니다.',
      '키치한 글씨체를 위해 둥근모 폰트를 Next의 localFont를 이용해 넣었습니다. css variable을 이용해 넣을 수 있어 아주 직관적이더군요. 폰트 용량이 커서 woff2로 변환을 했으나 용량이 800kb대라 2350자만 남기고 서브셋 하려 시도.. 하지만 온라인 컨버터마다 업로드 에러가 나서 포기.',
    ],
  },
  {
    id: 'pentax',
    summary:
      'SLR클럽 펜탁스 포럼에 공지로 등록된 [펜탁스 렌즈의 계보표](http://www.slrclub.com/bbs/vx2.php?id=pds&no=28147)를 플래시에서 웹으로 리뉴얼했습니다.\n펜탁스 Optio X 디카로 카메라에 입문했고 꾸준히 펜탁스 카메라를 써왔는데,\n당시 DSLR과 SLR, 그리고 렌즈군 전체를 정리했었죠. 렌즈군은 아직 개발중입니다.',
    dev: '개발자 멘트 : 가장 어려운 점은 플래시로 만들었던 원본 파일을 여는 것이었습니다. 플래시 지원들이 전부 종료되어서, 플래시를 아직 지원하는 [Pale Moon 브라우저](https://www.palemoon.org/)를 윈도우 컴퓨터에서 열어 한장 한장 스크린샷을 찍어 원본을 보면서 똑같은 디자인으로 작업했습니다.',
    devList: [
      '계보표 뒤에 모눈을 그려줘야 하는데, 처음에는 UL/LI + CSS border로 개발했었는데 단순히 장식을 위한 DOM 갯수가 수천개가 넘어가는 문제가 있었습니다. 하지만 보다 못해 repeating-linear-gradient 4중첩으로 단 하나의 DIV 만으로 모눈 그리기 성공. 하는 김에 마크다운 파싱해서 공헌자 목록도 보여주게 했습니다.',
      '데이터가 많아 아예 나중에는 수정 기능과 댓글 기능도 넣게 되었고, 수정 기능을 만들고 DB 연동하는 과정에서 데이터 정규화 노가다가 좀 심했네요.',
    ],
  },
  {
    id: 'mycar',
    summary:
      '집에 공구통이 디월트 TSTAK으로 풀세트가 있고, 심지어 유압 잭이랑 롤러 달린 베드도 있습니다. 지하주차장에서 치킨 시켜놓고 차 뜯으면서 이거저거 만지작거리는건 참 즐겁습니다. 기존에 마이클 앱과 메모장, 브라우저에 저장해두던 차계부나 부품 정보를 모아놓고 볼 수 있는 서비스를 만들었습니다. 아마 저 혼자 쓰겠지만 상관 없죠, 내가 쓸라고 만든건데.',
    dev: '개발자 멘트 : S3 연동해서 CDN으로 파일 업로드하는 간단한거 만드는게 쓸데없이 고생을 했네요. 처음엔 appDir과 aws-crt 라이브러리 충돌인줄 알았는데, 다시 해보니 그냥 내 실수.....',
    devList: [
      '처음에 차량 id로 이미지 url을 가져오려 하다가, CDN 이미지 캐시 문제가 발목을 잡더군요. 이미지를 변경할 때 캐시를 날려주지 않으면 계속 예전 이미지가 나오는.. max-age=0도 효과 없고.. 역시 이미지를 올릴 때 따로 아이디를 생성해주는게 가장 깔끔한 선택이었습니다.',
      '미국 사는 차쟁이 친구를 위해 마일 단위 변환 기능을 넣었습니다. 그래 너는 마일로 말해라, 나는 킬로미터로 말할란다.. DB에 km 단위만 넣는게 가장 깔끔하겠지만, 소숫점 올리고 내리다가 숫자가 조금 이쁘지 않게 떨어질것 같아 따로 저장하도록 했습니다. 부럽다.. M4에 911에 SUV 까지 한대 따로 있는 너란 사람..',
    ],
  },
];
