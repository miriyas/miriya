import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

import { CameraType } from '@/types/cameras.d';

import { cameraId } from '@/containers/cameras/Camera/utils';
import styles from './Camera.module.scss';

const getSiblingLink = (key: string, query: ParsedUrlQuery) => {
  return {
    hash: key,
    query: {
      ...query,
    },
  };
};

interface Props {
  camera: CameraType;
}

const DataSiblings = (props: Props) => {
  const { camera } = props;
  const { maker, predecessor, successor } = camera;

  return null;

  // const { isReady, query } = useRouter();

  // if (!isReady) return null;

  // const beforeData =
  //   predecessor.length > 0
  //     ? predecessor.map((name) => {
  //         const key = cameraId(maker, name);
  //         return (
  //           <Link key={key} href={getSiblingLink(key, query)} className={styles.sibling}>
  //             {name}
  //           </Link>
  //         );
  //       })
  //     : '-';

  // const afterData =
  //   successor.length > 0
  //     ? successor.map((name) => {
  //         const key = cameraId(maker, name);
  //         return (
  //           <Link key={key} href={getSiblingLink(key, query)} className={styles.sibling}>
  //             {name}
  //           </Link>
  //         );
  //       })
  //     : '-';

  // return (
  //   <>
  //     <tr>
  //       <th>Predecessor</th>
  //       <td>{beforeData}</td>
  //     </tr>
  //     <tr>
  //       <th>Successor</th>
  //       <td>{afterData}</td>
  //     </tr>
  //   </>
  // );
};

export default DataSiblings;
