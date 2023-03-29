'use client';

import cx from 'clsx';

import { PENTAX_DSLRS, YEAR_INFO } from '@/constants/pentaxes';
import Grids from '@/containers/pentax/Grids';
import { useDraggable } from '@/hooks/useDraggable';
import { getNumberArr } from '@/utils';
import ViewMoreButton from '@/containers/pentax/ViewMoreButton';

import Camera from './Camera';
import Pictures from './Pictures';
import Data from './Data';
import ReadMe from './ReadMe';
import styles from './Pentax.module.scss';

const PentaxPage = () => {
  const { draggableRef, wrapperRef, handlers, isMouseDown, showArrow } = useDraggable({
    noArrowAbove: 2400,
  });

  return (
    <main className={styles.pentaxes}>
      <div className={styles.centering}>
        <section className={styles.wrapper}>
          <Pictures />
          <div className={cx(styles.rightWing, { [styles.grabbing]: isMouseDown })} ref={wrapperRef} {...handlers}>
            <ol className={styles.years}>
              {getNumberArr(YEAR_INFO.end - YEAR_INFO.start + 1).map((n) => {
                const year = YEAR_INFO.start + n;
                return <li key={year}>{year}</li>;
              })}
            </ol>
            <div className={styles.timeline} ref={draggableRef}>
              <Grids />
              <ul className={styles.cameras}>
                {PENTAX_DSLRS.map((camera) => {
                  return <Camera key={camera.name} camera={camera} />;
                })}
              </ul>
              <div className={`${styles.endOfScroll} lastItem`} />
            </div>
          </div>
          {showArrow && <ViewMoreButton wrapperRef={wrapperRef} />}
        </section>
        <Data />
        <ReadMe />
      </div>
    </main>
  );
};

export default PentaxPage;
