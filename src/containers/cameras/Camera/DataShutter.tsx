import { CameraType, FocusType } from '@/types/cameras.d';

const extractAFData = (focus?: FocusType) => {
  if (!focus) return '?';

  const pointData = focus?.points ? `${focus?.points}point` : '';
  const pointCrossData = focus?.pointsCross ? `${focus?.pointsCross}cross` : '';
  const pointsData = [pointData, pointCrossData].filter((item) => !!item).join('/');

  if (focus.name) {
    // CAM1000, SAFOX VII
    return (
      <>
        {focus.name}
        <br />
        {pointsData}
      </>
    );
  }

  return pointsData;
};

interface Props {
  camera: CameraType;
}

const DataShutter = (props: Props) => {
  const { camera } = props;
  const { focus, shutter } = camera;

  if (!shutter) return null;

  const shutterCont = shutter?.fps ? `${shutter?.fps}fps` : '';
  const shutterSpeed = shutter?.speed ? `1/${shutter?.speed}sec` : '';
  const shutterData = [shutterCont, shutterSpeed].join(' ');

  const afData = extractAFData(focus);

  return (
    <>
      <tr>
        <th>Shutter</th>
        <td>{shutterData}</td>
      </tr>
      <tr>
        <th>AF</th>
        <td>{afData}</td>
      </tr>
    </>
  );
};

export default DataShutter;
