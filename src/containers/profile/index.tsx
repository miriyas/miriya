import Image from 'next/image';
import Link from 'next/link';

import ExternalLink from '@/components/ExternalLink';
import ImageAlbum from '@/components/ImageAlbum';
import styles from './index.module.scss';

const ProfilePage = () => {
  return (
    <main className={styles.profile}>
      <div className={styles.centering}>
        <div className={styles.profileImg}>
          <Image src='/images/home/profile.jpg' width={200} height={200} alt='' />
        </div>
        <h1 className={styles.name}>JunHyuk Lee</h1>
        <p className={styles.desc}>Senior Web Developer</p>
        <p className={styles.desc2}>프론트엔드 웹 개발자로 일하고 있는 miriya의 개인 작업 목록입니다.</p>
        <p>
          중학생 시절에는 그림을 그리곤 했습니다.
          <br />
          사람들이 흔히 말하는 회화가 아니라, 0.3mm 샤프심 뾰족하게 갈아서 자 대고 그리는&nbsp;
          <ExternalLink href='https://miriyas.tistory.com/category/%EA%B7%B8%EB%A6%BC%EA%B7%B8%EB%A6%AC%EA%B8%B0'>
            그림
          </ExternalLink>
          들이었지요. 탁상용 스탠드를 책상 위에 눕히고, 주위에 책을 높이 쌓고, 유리판을 위에 얹어서 간이 라이트박스를
          만들어서 그림을 그렸는데, 부모님은 한창 공부할 나이에 그림을 그리는 것을 참 싫어하셨지요. 원래 미대에 가고
          싶었지만 갈 수 없었습니다. 대신 다 큰 지금은 대학생들 졸업전시회를 방문하거나, 친한 작가분들의 전시회에 다니고
          있지요.
        </p>
        <ImageAlbum
          images={[
            {
              src: '/images/profile/picture1.jpg',
              width: 334,
              height: 194,
            },
            {
              src: '/images/profile/picture2.jpg',
              width: 325,
              height: 194,
            },
          ]}
        />
        <p>
          고등학생때는 회원수 100만명, 국내 6위 게임 카페를&nbsp;
          <ExternalLink href='https://miriyas.tistory.com/category/%EC%9B%B9%EC%84%9C%EB%B9%84%EC%8A%A4%20%EC%9D%B4%EC%95%BC%EA%B8%B0/%EB%8B%A4%EC%9D%8C%20%EC%B9%B4%ED%8E%98'>
            운영
          </ExternalLink>
          했습니다.
          <br />
          공동저자로&nbsp;
          <ExternalLink href='https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=965523'>
            카페 운영 전략과 회원 관리하는 법에 대한 책
          </ExternalLink>
          을 낸 적도 있지요. <span>(품절 되었으니 링크 걸 수 있다 이제)</span> 다음 카페를 운영하다보니 자연스럽게&nbsp;
          <ExternalLink href='https://miriyas.tistory.com/'>블로그</ExternalLink>도 쓰게 되었습니다. Web2.0 시대,
          HanRSS, 올블로그, 미투데이.. 아 그리운 과거들. 블로그를 쓰다 보니 웹서비스를 위주로 리뷰하고 까는, 일종의 UX
          독설 블로거로 활동했습니다. 주로 확인 버튼이 취소 버튼과 가까워 무섭다며 열을 내거나, 앱 결제 프로세스
          우상단(!)에 취소 버튼이 달려 있어 전환률을 떨굴거라고 열변을 토하곤 했지요. 근데 그 쎈 성격이 나이 먹어가면서
          점점 부드러워지더군요. 이젠 키움증권 영웅문 앱 정도 UX가 아니면 화가 나지도 않네요.
        </p>
        <ImageAlbum
          images={[
            {
              src: '/images/profile/cgv.jpg',
              width: 180,
              height: 320,
            },
            {
              src: '/images/profile/shit1.jpg',
              width: 146,
              height: 320,
            },
            {
              src: '/images/profile/shit2.jpg',
              width: 146,
              height: 320,
            },
          ]}
        />
        <p>
          대학 입학하고 나선 선배의 <Link href='/cameras#canon-30d'>Canon EOS 30D</Link> 카메라를 만져보곤 DSLR에
          매료되어 취미를 가지게 되었습니다. 휴학하고 2년동안 KMA에서 실내 컨퍼런스 사진을 촬영하는 일을 하게
          되었습니다. 그러다보니 재능기부 겸 하여 다양한 IT 컨퍼런스에 참석해서 무료로 행사 스케치 사진을 촬영해주는
          일도 하게 되었죠. 그러다보니 행사 진행자들과 친해지게 되었고, 어쩌다보니&nbsp;
          <ExternalLink href='https://miriyas.tistory.com/15600916'>아이폰</ExternalLink>이 출시되고, UX 붐이 불었고, UX
          Factory 팀블로그에서도 활동하게 되었죠. 현재는 블로그는 사라지고&nbsp;
          <ExternalLink href='https://www.facebook.com/groups/189801707717156'>페이스북 그룹</ExternalLink>만
          남아있습니다. 그러다가&nbsp;
          <ExternalLink href='https://story.pxd.co.kr/550'>UX Camp Seoul 4th</ExternalLink>
          &nbsp;행사에 오거나이저로 참여하게 되었고, 주로&nbsp;
          <ExternalLink href='https://miriyas.tistory.com/15601338'>사진 찍는 일</ExternalLink>과 홈페이지 개발을
          담당했었죠. 당시 PM분이 &quot;너 남의거 잘 까니까 니거 개발 잘 할것 같다&quot; 하고 취직을 시켜주셨지요.
        </p>
        <ImageAlbum
          images={[
            {
              src: '/images/profile/uxcamp.jpg',
              width: 368,
              height: 244,
            },
            {
              src: '/images/profile/kma.jpg',
              width: 402,
              height: 244,
            },
          ]}
        />
        <p>
          관심사가 엄청 방대한 편이라, 여러 사람들을 만나도 이야기거리가 떨어질 일이 없습니다. 자동차, 카메라, 인테리어,
          DIY, 온갖 나무위키 등.. 여가 시간에는 카카오 지도에&nbsp;
          <ExternalLink href='https://place.map.kakao.com/25977471'>&apos;환상의 드라이브 코스&apos;</ExternalLink>
          라고 검색하면 나오는 북한강 호반로를 달리길 좋아합니다. 컨버터블의 지붕을 열고 신선한 공기를 느끼면 스트레스가
          쫙 풀리는 느낌이지요. 세차도 직접 하고, 자동차 경정비와 DIY를 하고 있습니다. 지하주차장에서 탕수육을 시켜두고
          차를 잭으로 들어올려 파손된 범퍼를 수리하고, 알칸타라 핸들 커버를 바느질하거나 시트지를 랩핑하고, 엔진오일을
          직접 교환하는 등 소소한 일을 하는 것을 좋아합니다.
        </p>
        <ImageAlbum
          images={[
            {
              src: '/images/profile/car1.jpg',
              width: 244,
              height: 244,
            },
            {
              src: '/images/profile/car2.jpg',
              width: 244,
              height: 244,
            },
          ]}
        />
        <p>
          2012년부터 개발을 시작하였는데, 처음엔&nbsp;
          <ExternalLink href='https://rubyonrails.org/'>Ruby on Rails</ExternalLink>를 했지만 지금은&nbsp;
          <ExternalLink href='https://react.dev/'>React</ExternalLink>에 집중하고 있습니다. 저는 소위 말하는 뼛속 깊은
          개발자 보다는 프론트엔드 성향이 강합니다. 눈에 보이는 화면을 만드는게 가장 재미있더라구요. 저는 디자이너와
          협업하여 서비스 내외부의 디테일을 향상시키고, 아름다움을 다루는 것에 능합니다. 물론 이 웹사이트가 썩 아름답진
          않지만 그건 당연하게도 제가 디자이너가 아니기 때문입니다. 아마 그럴리는 없겠지만 지나가던 디자이너가 Figma로
          디자인 딱 던져주시면 다음날 해가 뜨기 전 까지 업데이트 해보지요.
        </p>
        <ImageAlbum
          images={[
            {
              src: '/images/profile/work.jpg',
              width: 368,
              height: 244,
            },
          ]}
        />
        <p>
          <ExternalLink href='https://github.com/spoqa/spoqa-han-sans/pull/49'>경량 웹폰트</ExternalLink>를 튜닝하기도
          하고, 쓸데없이 반응속도가 매우 빠른 로딩 스피너를 만들면서 즐거워하기도 합니다. 요즘 프론트엔드 개발자들은
          마크업 작업을 별로 좋아하지 않는 사람들이 많습니다만, 저는 아주 즐기고 자부심을 가지고 있는 편입니다.
          overscroll-behavior나 mix-blend-mode, user-select 등등 과거에는 불가능했던 것들이 CSS만으로 가능해졌지요. 뿐만
          아니라 &lt;details&gt;와 &lt;summary&gt;를 조합하면 자바스크립트의 힘을 빌리지 않고도 간단한 FAQ 페이지를 만들
          수 있죠. 자바스크립트로 열심히 작업하다가, 마크업을 작업하며 기분전환을 하면 정말 상쾌하답니다. 요즘에는
          퍼포먼스 튜닝이 참 재미있더군요. 브라우저단 로딩 속도 최적화, 즉각적인 반응속도 향상,&nbsp;
          <ExternalLink href='https://developer.chrome.com/docs/lighthouse/overview/'>라이트하우스</ExternalLink>
          &nbsp;점수 놀이도 참 재미있습니다.
        </p>
        <ImageAlbum
          images={[
            {
              src: '/images/profile/car3.jpg',
              width: 284,
              height: 500,
            },
            {
              src: '/images/profile/cocktail.jpg',
              width: 378,
              height: 500,
            },
          ]}
        />
        <p>
          자동차 뒤쪽 앰블럼을 404e로 교체해놨습니다. 웹개발자가 흔히 보게 되는 404 에러를 나타낸 것이죠. 집 인테리어를
          한 이후로는 사람들을 초대해 티파티를 하거나, 칵테일을 만들어주는 것을 즐깁니다. 최근에는 작은 일회용
          스포이드를 가득 사서 파란 하늘에 우유 구름이 떠 있는 블루스카이 슈터 칵테일을 만들곤 합니다.
        </p>
        <p>
          10년이 넘게 일을 하며 눈을 뜨고 있는 시간 동안 회사 일만 하다 보니, 제게 이렇다 할 코드가 남는게 없더라구요.
          아시다시피 개발자는 회사의 프로젝트 뿐만 아니라 다른 토이 프로젝트를 계속 해야 새로운걸 접하게 되고, 실력도
          오릅니다.
        </p>
        <p>프로필 이미지는 최신 트렌드에 맞게 AI가 그려준걸로 했습니다.</p>
      </div>
    </main>
  );
};

export default ProfilePage;
