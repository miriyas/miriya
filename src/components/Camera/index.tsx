'use client';

import cx from 'clsx';
import { useEffect, useState } from 'react';

import { CameraType } from '@/types/cameras.d';
import { cameraId } from './utils';
import { useIsClient } from '@/hooks/useIsClient';

import Data from './Data';
import DataExternal from './DataExternal';
import styles from './Camera.module.scss';

interface Props {
  camera: CameraType;
}

const Camera = (props: Props) => {
  const { camera } = props;
  const { maker, name, year } = camera;

  const id = cameraId(maker, name);

  const isClient = useIsClient();
  const isSelected = isClient ? window.location.hash.replace('#', '') === id : false;

  const [selected, setSelected] = useState(isSelected);
  const [showExternalData, setShowExternalData] = useState(false);

  const onClickExternal = () => {
    setShowExternalData((prev) => !prev);
  };

  useEffect(() => {
    // DataSiblings에서 형제 기종을 클릭했을때 해시 변경되는 이벤트를 탐지하여 하이라이트 해준다.

    const onHashChanged = () => {
      setSelected(isSelected);
    };

    window.addEventListener('hashchange', onHashChanged);
    return () => {
      window.removeEventListener('hashchange', onHashChanged);
    };
  }, [id, isSelected]);

  return (
    <li
      id={id}
      className={cx(styles.camera, `grid-item-${year}`, `maker-${maker.toLowerCase()}`, {
        [styles.selected]: selected,
        [styles.showExternalData]: showExternalData,
      })}
    >
      <DataExternal camera={camera} showExternalData={showExternalData} />
      <Data camera={camera} />
      <button
        type='button'
        onClick={onClickExternal}
        className={cx(styles.sourceBtn, { [styles.external]: showExternalData })}
      >
        <span className={styles.here}>Original</span>
        <span className={styles.cameraDb}>CameraDB</span>
      </button>
    </li>
  );
};

export default Camera;
