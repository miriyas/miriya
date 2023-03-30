'use client';

import cx from 'clsx';
import { useEffect, useState } from 'react';
import { useRafState } from 'react-use';
import { CSSTransition } from 'react-transition-group';
import { useAtomValue } from 'jotai';

import { CameraType } from '@/types/cameras.d';
import { cameraId } from '@/utils/cameras';
import { selectedMakerAtom } from '@/containers/cameras/states';

import DataInternal from './DataInternal';
import DataExternal from './DataExternal';
import styles from './Camera.module.scss';

const getIsSelected = (id: string) => {
  return typeof window !== 'undefined' ? window.location.hash.replace('#', '') === id : false;
};

interface Props {
  camera: CameraType;
}

const Camera = (props: Props) => {
  const { camera } = props;
  const { maker, name, year } = camera;
  const id = cameraId(maker, name);

  const selectedMaker = useAtomValue(selectedMakerAtom);
  const [isShow, setIsShow] = useRafState(selectedMaker === 'ALL' ? true : maker === selectedMaker);

  const [selected, setSelected] = useState(getIsSelected(id));
  const [showExternalData, setShowExternalData] = useState(false);

  const onClickExternal = () => {
    setShowExternalData((prev) => !prev);
  };

  useEffect(() => {
    setIsShow(selectedMaker === 'ALL' ? true : maker === selectedMaker);
  }, [maker, selectedMaker, setIsShow]);

  useEffect(() => {
    // DataSiblings에서 형제 기종을 클릭했을때 해시 변경되는 이벤트를 탐지하여 하이라이트 해준다.

    const onHashChanged = () => {
      setSelected(getIsSelected(id));
    };

    window.addEventListener('hashchange', onHashChanged);
    return () => {
      window.removeEventListener('hashchange', onHashChanged);
    };
  }, [id]);

  return (
    <CSSTransition
      in={isShow}
      timeout={200}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        enterDone: styles.enterDone,
        exit: styles.exit,
        exitActive: styles.exitActive,
        exitDone: styles.exitDone,
      }}
    >
      <li
        id={id}
        className={cx(styles.camera, `grid-item-${year}`, `maker-${maker.toLowerCase()}`, {
          [styles.isHidden]: !isShow,
          [styles.selected]: selected,
          [styles.showExternalData]: showExternalData,
        })}
      >
        <div className={styles.wrapper}>
          <DataExternal camera={camera} showExternalData={showExternalData} />
          <DataInternal camera={camera} />
          <button
            type='button'
            onClick={onClickExternal}
            className={cx(styles.sourceBtn, { [styles.external]: showExternalData })}
          >
            <span className={styles.here}>Original</span>
            <span className={styles.cameraDb}>CameraDB</span>
          </button>
        </div>
      </li>
    </CSSTransition>
  );
};

export default Camera;
