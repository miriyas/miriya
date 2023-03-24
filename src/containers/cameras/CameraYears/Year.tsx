'use client';

import { Suspense, useEffect, useMemo } from 'react';
import cx from 'clsx';
import { useAtomValue } from 'jotai';

import type { IsotopeOptions } from 'isotope-layout';
import { CameraType } from '@/types/cameras';
import Isotope from '@/libs/isotope-layout';
import { isotopesAtom } from '@/containers/cameras/states';

import Camera from '@/components/Camera';
import styles from './CameraYears.module.scss';

interface Props {
  cameras: CameraType[];
  year: number;
}

const CameraYear = (props: Props) => {
  const { cameras, year } = props;

  const isotopes = useAtomValue(isotopesAtom);

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
    // 연도별로 isotope init
    const elem = document.querySelector<HTMLElement>(`.grid-${year}`);
    if (!elem) return;
    isotopes[year] = new Isotope(elem, OPTIONS);
  }, [OPTIONS, isotopes, year]);

  return (
    <li id={`camera-year-${year}`} className={styles.cameraYear}>
      <div className={styles.title}>
        {year}년 / {cameras.length}기종
      </div>

      <ul className={cx(styles.cameras, `grid-${year}`)}>
        {cameras.map((camera) => {
          return (
            <Suspense key={`${camera.maker}-${camera.year}-${camera.name}`} fallback={null}>
              <Camera camera={camera} />
            </Suspense>
          );
        })}
      </ul>
    </li>
  );
};

export default CameraYear;
