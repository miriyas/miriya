import { FBCameraType } from '@/types/cameras';

import ExternalLink from '@/components/ExternalLink';

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
            <ExternalLink key={key} href={ref}>
              Link {i + 1}
            </ExternalLink>
          );
        })}
      </td>
    </tr>
  );
};

export default DataRefs;
