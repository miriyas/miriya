import { FBCameraType } from '@/types/cameras.d';

interface Props {
  camera: FBCameraType;
}

const DataMetering = (props: Props) => {
  const { camera } = props;
  const { metering } = camera;

  if (!metering) return null;
  if (!metering.engine && !metering.desc) return null;

  const meteringData = metering ? [metering.engine, metering.desc].filter((item) => !!item).join('/') : '?';

  return (
    <tr>
      <th>측광</th>
      <td>{meteringData}</td>
    </tr>
  );
};

export default DataMetering;
