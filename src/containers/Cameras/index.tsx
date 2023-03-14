import { NextSeo } from 'next-seo';
import { groupBy } from 'lodash';

import { CAMERAS } from '@/constants/cameras';
import CameraYear from '@/containers/Cameras/CameraYear';

import styles from './Cameras.module.scss';

const title = 'History of DSLR';
const description = '1998년부터 2011년까지의 DSLR 카메라들';

const Cameras = () => {
  const years = groupBy(CAMERAS, 'year');

  const onClickToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: 'https://miriya.vercel.app/',
          title,
          description,
          images: [
            {
              url: 'https://miriya.vercel.app/images/idols.jpg',
              width: 1200,
              height: 630,
              alt: '',
              type: 'image/jpeg',
            },
          ],
          siteName: title,
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <main className={styles.cameras}>
        <ul className={styles.cameraYears}>
          {Object.keys(years).map((year) => {
            return <CameraYear key={year} cameras={years[year]} year={Number(year)} />;
          })}
        </ul>

        <button type='button' onClick={onClickToTop} className={styles.toTop}>
          <p>위로</p>
        </button>
      </main>
    </>
  );
};

export default Cameras;
