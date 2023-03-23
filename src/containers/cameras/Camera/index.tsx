import cx from 'classnames';
import { useAtomValue } from 'jotai';
import { useState } from 'react';

import { CameraType } from '@/types/cameras.d';
import { selectedCameraAtom } from '../states';
import { cameraId } from './utils';

import Data from './Data';
import DataExternal from './DataExternal';
import styles from './Camera.module.scss';

interface Props {
  camera: CameraType;
}

const Camera = (props: Props) => {
  const { camera } = props;
  const { maker, name, year } = camera;

  const [showExternalData, setShowExternalData] = useState(false);

  const onClickExternal = () => {
    setShowExternalData((prev) => !prev);
  };

  const id = cameraId(maker, name);
  const selected = useAtomValue(selectedCameraAtom);

  return (
    <li
      id={id}
      className={cx(styles.camera, `grid-item-${year}`, `maker-${maker.toLowerCase()}`, {
        [styles.selected]: selected === id,
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
