import { FBCameraType } from '@/types/cameras.d';

interface Props {
  camera: FBCameraType;
}

const DataShutter = (props: Props) => {
  const { camera } = props;
  const { shutter } = camera;

  if (!shutter) return null;
  if (!shutter.speed && !shutter.fps) return null;

  const shutterSpeed = shutter.speed ? `1/${shutter.speed}sec` : '';
  const shutterData = [shutter.fps, shutterSpeed].join(' ');

  return (
    <tr>
      <th>셔터</th>
      <td>{shutterData}</td>
    </tr>
  );
};

export default DataShutter;
