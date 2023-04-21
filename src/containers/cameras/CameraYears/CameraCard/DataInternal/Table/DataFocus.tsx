import { FBCameraType } from '@/types/cameras.d';

interface Props {
  camera: FBCameraType;
}

const DataFocus = (props: Props) => {
  const { camera } = props;
  const { focus } = camera;

  if (!focus) return null;
  if (!focus.name && !focus.desc && !focus.contrast && !focus.phaseDetection) return null;

  return (
    <tr>
      <th>AF</th>
      <td>
        {focus.name && (
          <>
            {focus.name}
            <br />
          </>
        )}
        {focus.desc}
        {focus.contrast && ' + 컨트라스트'}
        {focus.phaseDetection && ' + 페이즈'}
      </td>
    </tr>
  );
};

export default DataFocus;
