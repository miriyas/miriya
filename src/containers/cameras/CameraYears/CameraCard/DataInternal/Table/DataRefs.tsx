import { FBCameraType } from '@/types/cameras';

interface Props {
  nameLine: string;
  camera: FBCameraType;
}

const DataRefs = (props: Props) => {
  const { nameLine, camera } = props;
  const { refs } = camera;

  if (!refs) return null;

  return (
    <tr>
      <th>근거자료</th>
      <td>
        {refs.split(',').map((ref, i) => {
          const key = `${nameLine}-${i}`;
          return (
            <a key={key} href={ref} target='_blank' rel='nofollow'>
              Link {i + 1}
            </a>
          );
        })}
      </td>
    </tr>
  );
};

export default DataRefs;
