import cx from 'classnames';

import { CameraType } from '@/types/cameras';

import Camera from '@/components/Camera';
import styles from './CameraYear.module.scss';

interface Props {
  cameras: CameraType[];
  year: number;
}

const CameraYear = (props: Props) => {
  const { cameras, year } = props;

  return (
    <li id={`camera-year-${year}`} className={styles.cameraYear}>
      <div className={styles.title}>{year}년</div>

      <ul className={cx(styles.cameras, `grid-${year}`)}>
        {cameras.map((camera) => {
          return <Camera key={`${camera.maker}-${camera.year}-${camera.name}`} camera={camera} />;
        })}
      </ul>
    </li>
  );
};

export default CameraYear;
