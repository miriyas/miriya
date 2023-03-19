import { DisplayType, CameraType } from '@/types/cameras.d';
import { shrinkNumber } from '@/utils';

const extractDisplayData = (display?: DisplayType) => {
  if (!display) return '?';

  const displaySize = display?.inches ? `${display?.inches}"` : '';
  const displayRes = display?.pixels ? shrinkNumber(display?.pixels) : '';
  return displaySize ? [displaySize, displayRes, 'LCD'].filter((item) => !!item).join(' ') : '?';
};

interface Props {
  camera: CameraType;
}

const DataDisplay = (props: Props) => {
  const { camera } = props;
  const { display } = camera;

  if (!display) return null;

  const displayData = extractDisplayData(display);

  return (
    <tr>
      <th>Display</th>
      <td>{displayData}</td>
    </tr>
  );
};

export default DataDisplay;
