import { CameraType } from '@/types/cameras';

interface Props {
  nameLine: string;
  camera: CameraType;
}

const DataRefs = (props: Props) => {
  const { nameLine, camera } = props;
  const { refs } = camera;

  if (!refs) return null;

  return (
    <tr>
      <th>Ref.</th>
      <td>
        {refs.map((ref, i) => {
          const key = `${nameLine}-${i}`;
          return (
            <a key={key} href={ref} target='_blank'>
              Link {i + 1}
            </a>
          );
        })}
      </td>
    </tr>
  );
};

export default DataRefs;
