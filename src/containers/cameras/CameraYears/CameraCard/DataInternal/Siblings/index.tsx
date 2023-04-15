import { CameraType } from '@/types/cameras.d';

import SiblingLinks from './SiblingLinks';
import styles from '../index.module.scss';

interface Props {
  camera: CameraType;
}

const Siblings = (props: Props) => {
  const { camera } = props;
  const { maker, predecessor, successor } = camera;

  const beforeData = predecessor ? <SiblingLinks cameras={predecessor} maker={maker} deco='&lt;&lt;&nbsp;' /> : '';

  const afterData = successor ? <SiblingLinks cameras={successor} maker={maker} deco='&nbsp;&gt;&gt;' /> : '';

  return (
    <div className={styles.siblings}>
      <div className={styles.leftWing}>{beforeData}</div>
      <div className={styles.rightWing}>{afterData}</div>
    </div>
  );
};

export default Siblings;
