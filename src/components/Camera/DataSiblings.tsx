import { CameraType } from '@/types/cameras.d';

interface Props {
  camera: CameraType;
}

const DataSiblings = (props: Props) => {
  const { camera } = props;

  const { maker, predecessor, successor } = camera;

  const beforeData =
    predecessor?.map((name) => {
      const key = `${maker}-${name}`;
      return (
        <a key={key} href={`#${key}`}>
          {name}
        </a>
      );
    }) ?? '-';

  const afterData =
    successor?.map((name) => {
      const key = `${maker}-${name}`;
      return (
        <a key={key} href={`#${key}`}>
          {name}
        </a>
      );
    }) ?? '-';

  return (
    <>
      <tr>
        <th>Predecessor</th>
        <td>{beforeData}</td>
      </tr>
      <tr>
        <th>Successor</th>
        <td>{afterData}</td>
      </tr>
    </>
  );
};

export default DataSiblings;
