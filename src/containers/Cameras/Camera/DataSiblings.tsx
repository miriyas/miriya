import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MouseEventHandler } from 'react';
import { useSetAtom } from 'jotai';

import { CameraType } from '@/types/cameras.d';
import { cameraId } from '@/containers/cameras/Camera/utils';
import { smoothScrollToId } from '@/utils/visual';
import { selectedCameraAtom } from '../states';

import styles from './Camera.module.scss';

interface Props {
  camera: CameraType;
}

const DataSiblings = (props: Props) => {
  const { camera } = props;
  const { maker, predecessor, successor } = camera;

  const pathname = usePathname();
  const setSelected = useSetAtom(selectedCameraAtom);

  const onClickSiblings: MouseEventHandler<HTMLAnchorElement> = (e) => {
    const id = e.currentTarget.dataset.target ?? '';
    setSelected(id);
    smoothScrollToId(id);
  };

  const beforeData =
    predecessor.length > 0
      ? predecessor.map((name) => {
          const hash = cameraId(maker, name);
          return (
            <Link
              key={hash}
              href={{ pathname, hash }}
              className={styles.sibling}
              data-target={hash}
              onClick={onClickSiblings}
            >
              {name}
            </Link>
          );
        })
      : '-';

  const afterData =
    successor.length > 0
      ? successor.map((name) => {
          const hash = cameraId(maker, name);
          return (
            <Link
              key={hash}
              href={{ pathname, hash }}
              className={styles.sibling}
              data-target={hash}
              onClick={onClickSiblings}
            >
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
