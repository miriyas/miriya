'use client';

import cx from 'clsx';
import { useAtomValue } from 'jotai';

import { PENTAX_DSLRS, PENTAX_DSLRS_YEAR_INFO, X_CELL_DSLR } from '@/constants/pentaxes';
import { useDraggable } from '@/hooks/useDraggable';
import { getNumberArr } from '@/utils';
import { selectedCameraAtom } from './states';

import Picture from '../_common/Picture';
import ViewMoreButton from '../_common/ViewMoreButton';
import Camera from './Camera';
import Data from './Data';
import styles from './TabDSLR.module.scss';

const { start: yearStart, end: yearEnd } = PENTAX_DSLRS_YEAR_INFO;

const PentaxDSLRPage = () => {
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
            {getNumberArr(yearEnd - yearStart + 1).map((n) => {
              const year = yearStart + n;
              return <li key={year}>{year}</li>;
            })}
          </ol>
          <div
            className={styles.timeline}
            ref={draggableRef}
            style={{
              width: `${X_CELL_DSLR * 4 * (yearEnd - yearStart + 1)}px`,
            }}
          >
            <div className={styles.gridsWrapper}>
              <div className={styles.cssGrid} />
            </div>
            <ul className={styles.cameras}>
              {PENTAX_DSLRS.map((camera) => {
                return <Camera key={camera.name} camera={camera} />;
              })}
            </ul>
            <div className={`${styles.endOfScroll} lastItem`} />
          </div>
        </div>
        {showArrow && <ViewMoreButton wrapperRef={wrapperRef} />}
      </div>
      <Data />
    </section>
  );
};

export default PentaxDSLRPage;
