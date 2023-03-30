'use client';

import cx from 'clsx';
import { useAtomValue } from 'jotai';

import { PENTAX_SLRS, PENTAX_SLRS_YEAR_INFO } from '@/constants/pentaxes';
import { useDraggable } from '@/hooks/useDraggable';
import { getNumberArr } from '@/utils';
import { selectedCameraAtom } from '@/containers/pentax/TabDSLR/states';

import ViewMoreButton from '../_common/ViewMoreButton';
import Picture from '../_common/Picture';
import Camera from './Camera';
// import Data from './Data';
import Grids from './Grids';
import styles from './TabSLR.module.scss';

const { start: yearStart, end: yearEnd } = PENTAX_SLRS_YEAR_INFO;

const PentaxSLRPage = () => {
  const selectedCameraName = useAtomValue(selectedCameraAtom);

  const { draggableRef, wrapperRef, handlers, isMouseDown, showArrow } = useDraggable({
    noArrowAbove: 2400,
  });

  return (
    <section className={styles.wrapper}>
      <div className={styles.upper}>
        <Picture selectedCameraName={selectedCameraName} baseUrl='dslr' />
        <div className={cx(styles.rightWing, { [styles.grabbing]: isMouseDown })} ref={wrapperRef} {...handlers}>
          <ol className={styles.years}>
            {getNumberArr((yearEnd - yearStart + 1) / 5 + 1).map((n) => {
              const year = yearStart + n * 5;
              return <li key={year}>{year}</li>;
            })}
          </ol>
          <div className={styles.timeline} ref={draggableRef}>
            <Grids />
            <ul className={styles.cameras}>
              {PENTAX_SLRS.map((camera) => {
                return <Camera key={camera.name} camera={camera} />;
              })}
            </ul>
            <div className={`${styles.endOfScroll} lastItem`} />
          </div>
        </div>
        {/* {showArrow && <ViewMoreButton wrapperRef={wrapperRef} />} */}
      </div>
      {/* <Data /> */}
    </section>
  );
};

export default PentaxSLRPage;
