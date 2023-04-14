import { CameraType } from '@/types/cameras.d';
import { cameraId } from '@/utils/cameras';

import SiblingLink from './SiblingLink';

interface Props {
  camera: CameraType;
}

const DataSiblings = (props: Props) => {
  const { camera } = props;
  const { maker, predecessor, successor } = camera;

  const beforeData = predecessor
    ? predecessor?.split(',').map((name) => {
        const hash = cameraId(maker, name);
        return <SiblingLink key={hash} hash={hash} name={name} />;
      })
    : '-';

  const afterData = successor
    ? successor?.split(',').map((name) => {
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
