import { FBCameraType } from '@/types/cameras.d';

interface Props {
  camera: FBCameraType;
}

const DataShutter = (props: Props) => {
  const { camera } = props;
  const { focus, shutter } = camera;

  if (!shutter) return null;

  const shutterSpeed = shutter?.speed ? `1/${shutter?.speed}sec` : '';
  const shutterData = [shutter?.fps, shutterSpeed].join(' ');

  return (
    <>
      <tr>
        <th>셔터</th>
        <td>{shutterData}</td>
      </tr>
      <tr>
        <th>AF</th>
        <td>
          {focus?.name && (
            <>
              {focus?.name}
              <br />
            </>
          )}
          {focus?.desc}
          {focus?.contrast && ' + 컨트라스트'}
          {focus?.phaseDetection && ' + 페이즈'}
        </td>
      </tr>
    </>
  );
};

export default DataShutter;
