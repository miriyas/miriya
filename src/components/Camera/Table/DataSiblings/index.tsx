import { CameraType } from '@/types/cameras.d';

import { cameraId } from '@/components/Camera/utils';
import SiblingLink from './SiblingLink';

interface Props {
  camera: CameraType;
}

const DataSiblings = (props: Props) => {
  const { camera } = props;
  const { maker, predecessor, successor } = camera;

  const beforeData =
    predecessor.length > 0
      ? predecessor.map((name) => {
          const hash = cameraId(maker, name);
          return <SiblingLink key={hash} hash={hash} name={name} />;
        })
      : '-';

  const afterData =
    successor.length > 0
      ? successor.map((name) => {
          const hash = cameraId(maker, name);
          return <SiblingLink key={hash} hash={hash} name={name} />;
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
