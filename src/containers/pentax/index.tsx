'use client';

import cx from 'clsx';

import { YEAR_INFO } from '@/constants/pentaxes';
import Cameras from '@/containers/pentax/Cameras';
import Grids from '@/containers/pentax/Grids';
import { useDraggable } from '@/hooks/useDraggable';
import { getNumberArr } from '@/utils';
import ViewMoreButton from '@/containers/pentax/ViewMoreButton';

import styles from './Pentax.module.scss';

const PentaxPage = () => {
  const { draggableRef, wrapperRef, handlers, isMouseDown, showArrow } = useDraggable({
    noArrowAbove: 2400,
  });

  return (
    <main className={styles.pentaxes}>
      <div className={styles.centering}>
        <section className={styles.wrapper}>
          <div className={styles.pictureWrapper}>
            <div className={styles.picture}>사진</div>
            <p className={styles.name}>이름</p>
          </div>
          <div className={cx(styles.rightWing, { [styles.grabbing]: isMouseDown })} ref={wrapperRef} {...handlers}>
            <ol className={styles.years}>
              {getNumberArr(YEAR_INFO.end - YEAR_INFO.start + 1).map((n) => {
                const year = YEAR_INFO.start + n;
                return <li key={year}>{year}</li>;
              })}
            </ol>
            <div className={styles.timeline} ref={draggableRef}>
              <Grids />
              <Cameras />
              <div className={`${styles.endOfScroll} lastItem`} />
            </div>
          </div>
          {showArrow && <ViewMoreButton wrapperRef={wrapperRef} />}
        </section>
        <div className={styles.lower}>
          <table>
            <tbody>
              <tr>
                <th>ㅇㅇ</th>
                <td>aa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default PentaxPage;
