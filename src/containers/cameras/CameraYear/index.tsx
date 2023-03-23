import { MutableRefObject, useEffect, useMemo } from 'react';
import cx from 'classnames';

import type { IsotopeOptions } from 'isotope-layout';
import { IsotopesType } from '@/types/index.d';
import { CameraType } from '@/types/cameras';
import Isotope from '@/libs/isotope-layout';
import Camera from '@/containers/cameras/Camera';

import styles from './CameraYear.module.scss';

interface Props {
  cameras: CameraType[];
  year: number;
  isotopes: MutableRefObject<IsotopesType>;
}

const CameraYear = (props: Props) => {
  const { cameras, year, isotopes } = props;

  const OPTIONS: IsotopeOptions = useMemo(
    () => ({
      itemSelector: `.grid-item-${year}`,
      layoutMode: 'packery',
      transitionDuration: 200,
      percentPosition: true,
      packery: {
        gutter: 14,
        columnWidth: 240,
      },
    }),
    [year],
  );

  useEffect(() => {
    const elem = document.querySelector<HTMLElement>(`.grid-${year}`);
    if (!elem) return;

    isotopes.current[year] = new Isotope(elem, OPTIONS);
  }, [OPTIONS, isotopes, year]);

  return (
    <li id={`camera-year-${year}`} className={styles.cameraYear}>
      <div className={styles.title}>
        {year}년 / {cameras.length}기종
      </div>

      <ul className={cx(styles.cameras, `grid-${year}`)}>
        {cameras.map((camera) => {
          return <Camera key={`${camera.maker}-${camera.year}-${camera.name}`} camera={camera} />;
        })}
      </ul>
    </li>
  );
};

export default CameraYear;
