import HomeArticle from './Article';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.centering}>
        <ul className={styles.pages}>
          <HomeArticle
            href='profile'
            summary={
              <>
                프론트엔드 웹 개발자로 일하고 있는 miriya의 개인 작업 목록입니다. <br />
                궁금하신게 있나요?
              </>
            }
          />

          <HomeArticle
            href='idols'
            summary={
              <>
                데뷔일 기준 1996년부터 현재까지 활동한 한국 아이돌을 정리하..다 말았습니다.
                <br />각 아이돌을 클릭하면 해당 아이돌이 부른 대표곡의 하이라이트 부분이 재생됩니다..
                <br />
                추억여행 한번 빠져보시죠.
              </>
            }
          >
            개발자 멘트 : 원본은 2019년에&nbsp;
            <a href='https://create-react-app.dev/' target='_blank' rel='nofollow'>
              CRA
            </a>
            &nbsp; 기반으로 처음 만들었고, 지금 해당 코드를 다시 열어보니 눈이 썩어버릴것 같았습니다. 아마 지금 이
            코드를 4년 후에 열어봐도 눈이 썩겠지요. 아시다시피 프론트엔드는 변화가 너무나 빨라서 불과 2주 전에 짠 코드도
            너무나 형편없어보이기 마련입니다. 하지만 두려워하지 않고 계속 짜볼랍니다. 1년 뒤에 구려보이는 코드를 짜는 것
            보다, 1년 뒤에 봐도 구려보이지 않는게 더 무서운거 아니겠습니까.
            <br />
            2019년에 만들 때는 레이어를 여는 순간 동영상 자동 재생이 가능했는데, 거의 세번에 걸쳐 기능이 막혔습니다.
            이건 뭐 창과 방패의 싸움인가.. 아쉽지만 어쩔 수 없죠. 이번에 다 갈아엎는 김에&nbsp;
            <a href='https://beta.nextjs.org/docs' target='_blank' rel='nofollow'>
              Next.js
            </a>
            로 포팅했습니다. 실무에서 CRA 기반으로 만들게 되면 회사에서 SEO를 요구할 때 메타데이터 작업이 여의치가
            않더군요. 아시다시피&nbsp;
            <a href='https://github.com/nfl/react-helmet' target='_blank' rel='nofollow'>
              Helmet
            </a>
            &nbsp; 같은걸로 갈아주는 것도 한계가 있잖아요?
          </HomeArticle>
          <HomeArticle
            href='cameras'
            summary={
              <>
                출시일 기준, 95년부터 현재까지 출시된 DSLR/DSLT를 정리중입니다..
                <br />
                저는 대학생 시절&nbsp;
                <a href='http://www.slrclub.com' target='_blank' rel='nofollow'>
                  SLR클럽
                </a>
                &nbsp; 활동을 활발하게 했었고,
                <br />
                당시에 플래시와 포토샵으로&nbsp;
                <a href='http://www.slrclub.com/bbs/vx2.php?id=best_review&no=2248' target='_blank' rel='nofollow'>
                  카메라 족보
                </a>
                와&nbsp;
                <a href='http://www.slrclub.com/bbs/vx2.php?id=pds&no=28147' target='_blank' rel='nofollow'>
                  펜탁스 렌즈의 계보표
                </a>
                를 만든 적이 있었지요.
              </>
            }
          >
            개발자 멘트 : 당시에 어떤 분이 <q>&quot;나같으면 자바스크립트로 짜겠다&quot;</q> 라고 말한걸 아직 기억하고
            있습니다. 그때는 <q>&quot;와 개발자 무서워, 어떻게 코딩이 더 쉽지?&quot;</q> 라고 생각했었지요. 하지만
            12년이 지난 지금 오니 세로 2만 픽셀짜리 PSB (PSD의 오타 아님) 파일을 일일히 수정하는 것 보다 코딩으로
            만드는게 더 효율적이고 쉽네요. Next.js 13 버전의 experimental appDir을 적용해봤습니다. 2023년 3월 현재
            기준으로는 일단 실무에서 쓰진 못할 물건입니다. 라우팅 관련된 모든 부분에 hash id 쓰는 부분이 몽땅
            누락되어있고, 대안도 없이 못쓰게 만든 기능이 무수하게 많습니다. 또한&nbsp;
            <a
              href='https://beta.nextjs.org/docs/api-reference/use-search-params#static-rendering'
              target='_blank'
              rel='nofollow'
            >
              useSearchParams
            </a>
            &nbsp; 등 일부 신규 hook들은 Suspense로 감싸지 않으면 상위 컴포넌트로 타고 올라가면서&nbsp;
            <a href='https://github.com/vercel/next.js/issues/47350' target='_blank' rel='nofollow'>
              웹사이트 전체의 SSR을 깨버리는 무지막지한 문제
            </a>
            도 있습니다. 어딘가 수정했는데 갑자기 SEO 메타태그가 안나온다- 이런 문제가 발생할 수 있는거죠.
          </HomeArticle>
        </ul>
      </div>
    </main>
  );
};

export default Home;
