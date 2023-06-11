import { CameraType } from '@/types/cameras.d';

interface Props {
  camera: CameraType;
}

const DataVideo = (props: Props) => {
  const { camera } = props;
  const { video } = camera;

  if (!video || !video.format || !video.modes) return null;

  return (
    <tr>
      <th>비디오</th>
      <td>
        {video.format}, {video.modes}
      </td>
    </tr>
  );
};

export default DataVideo;
