import Link from 'next/link';

import { CameraType } from '@/types/cameras.d';

import { cameraId } from '@/components/Camera/utils';
import styles from './Camera.module.scss';

interface Props {
  camera: CameraType;
}

const DataSiblings = (props: Props) => {
  const { camera } = props;

  const { maker, predecessor, successor } = camera;

  const beforeData =
    predecessor.length > 0
      ? predecessor.map((name) => {
          const key = cameraId(maker, name);
          return (
            <Link key={key} href={`#${key}`}>
              {name}
            </Link>
          );
        })
      : '-';

  const afterData =
    successor.length > 0
      ? successor.map((name) => {
          const key = cameraId(maker, name);
          return (
            <Link key={key} href={`#${key}`} className={styles.sibling}>
              {name}
            </Link>
          );
        })
      : '-';

  return (
    <>
      <tr>
        <th>Predecessor</th>
        <td>{beforeData}</td>
      </tr>
      <tr>
        <th>Successor</th>
        <td>{afterData}</td>
      </tr>
    </>
  );
};

export default DataSiblings;
