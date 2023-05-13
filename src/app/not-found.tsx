import Image from 'next/image';

import styles from './notFound.module.scss';

const NotFound = () => {
  return (
    <main className={styles.notFound}>
      <figure>
        <Image src='/images/404.jpg' width={1200} height={675} alt='' />
        <figcaption>사진 설명 : 오직 개발자만 알아볼 수 있는 404에러 엠블럼 튠을 해둔 제 차</figcaption>
      </figure>
      <h2>없는 주소입니다.</h2>
      <p>
        요청하신 주소로 자료를 찾을 수 없는데,
        <br />
        보통 바보같은 오타거나 더 바보같은 제 코딩 실수로 일어납니다.
        <br />
        제가 수치심을 느낄 수 있게 방명록에 글이라도 남겨주세요.
      </p>
    </main>
  );
};

export default NotFound;
