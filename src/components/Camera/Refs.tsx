import styles from './Refs.module.scss';

interface Props {
  nameLine: string;
  refs?: string[];
}

const Refs = (props: Props) => {
  const { nameLine, refs } = props;

  if (!refs) return null;

  return (
    <tr>
      <th>Ref.</th>
      <td className={styles.refs}>
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

export default Refs;
