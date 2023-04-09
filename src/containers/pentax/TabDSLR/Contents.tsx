'use client';

import cx from 'clsx';
import { useAtom } from 'jotai';
import { useMemo } from 'react';
import { useMount } from 'react-use';

import { X_CELL_DSLR } from '@/constants/pentaxes';
import { useDraggable } from '@/hooks/useDraggable';
import { getNumberArr } from '@/utils';
import { selectedCameraAtom } from './states';
import { PentaxDslr } from '@/types/pentaxes';

import Picture from '../_common/Picture';
import ViewMoreButton from '../_common/ViewMoreButton';
import Camera from './Camera';
import Comments from './Comments';
import Data from './Data';
import styles from './TabDSLR.module.scss';

interface Props {
  data: PentaxDslr[];
}

const Contents = ({ data }: Props) => {
  const [selectedCameraName, setSelectedCameraName] = useAtom(selectedCameraAtom);
  const selectedCamera = data.find((c) => c.name === selectedCameraName);

  const { draggableRef, wrapperRef, handlers, isMouseDown, showArrow } = useDraggable({
    noArrowAbove: 2400,
  });

  const yearStart = useMemo(() => Math.min(...data.map((camera) => camera.startYear)), [data]);
  const yearEnd = useMemo(() => Math.max(...data.map((camera) => camera.endYear ?? camera.startYear)), [data]) + 1;

  useMount(() => {
    setSelectedCameraName(data[0].name);
  });

  return (
    <section className={styles.wrapper}>
      <div className={styles.upper}>
        <Picture selectedCamera={selectedCamera} baseUrl='dslr' />
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
              {data.map((camera) => {
                return <Camera key={camera.name} camera={camera} yearStart={yearStart} yearEnd={yearEnd} />;
              })}
            </ul>
            <div className={`${styles.endOfScroll} lastItem`} />
          </div>
        </div>
        {showArrow && <ViewMoreButton wrapperRef={wrapperRef} />}
      </div>
      <div className={styles.bottomWrapper}>
        <Comments />
        <Data selectedCamera={selectedCamera} />
      </div>
    </section>
  );
};

export default Contents;
