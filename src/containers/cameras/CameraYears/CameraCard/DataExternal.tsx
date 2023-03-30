import cx from 'clsx';
import { useQuery } from '@tanstack/react-query';

import { CameraType } from '@/types/cameras.d';
import { cameraId, externalCameraId } from './utils';
import { getExternalCameraDataApi } from '@/services/cameras';

import Loading from '@/components/Loading';
import styles from './Camera.module.scss';
import tableStyles from './Table/Table.module.scss';

interface Props {
  camera: CameraType;
  showExternalData: boolean;
}

const DataExternal = (props: Props) => {
  const { camera, showExternalData } = props;
  const { maker, name } = camera;

  const id = cameraId(maker, name);
  const externalId = externalCameraId(maker, name);

  const { data, isLoading, isError } = useQuery(
    ['getExternalCameraDataApi', externalId],
    () => getExternalCameraDataApi(externalId).then((res) => res.json()),
    {
      enabled: showExternalData,
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  if (isLoading) {
    return (
      <div className={cx(styles.dataExternal, styles.loading)}>
        <p className={styles.id}>{id}</p>
        <Loading />
      </div>
    );
  }

  const hasError = Object.keys(data)[0] === 'error';

  if (isError || hasError) {
    return (
      <div className={cx(styles.dataExternal, styles.error)}>
        <p className={styles.id}>{id}</p>
        <p>{data.error}</p>
      </div>
    );
  }

  return (
    <div className={styles.dataExternal}>
      <table className={tableStyles.dataTable}>
        <tbody>
          {Object.keys(data).map((label) => {
            return (
              <tr key={`${id}-${label}`}>
                <th>{label}</th>
                <td>{data[label]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <a
        href={`https://www.digicamdb.com/specs/${externalId}`}
        target='_blank'
        className={styles.outerLink}
        rel='nofollow'
      >
        See full DB © digicamdb.com
      </a>
    </div>
  );
};

export default DataExternal;
