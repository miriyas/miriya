import cx from 'clsx';
import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';

import { CameraCore } from '@/types/cameras';
import { externalCameraId } from '@/utils/digicam';
import { cameraId } from '@/utils/cameras';
import { getExternalCameraDataApi } from '@/services/cameras';

import commonStyles from '../index.module.scss';
import styles from './index.module.scss';
import tableStyles from '../DataInternal/Table/Table.module.scss';
import ExternalLink from '@/components/ExternalLink';

interface Props {
  camera: CameraCore;
  showExternalData: boolean;
}

const DataExternalContent = (props: Pick<Props, 'camera'>) => {
  const { camera } = props;
  const { maker, name } = camera;

  const id = cameraId(maker, name);
  const externalId = externalCameraId(maker, name);

  const { data = {}, isError } = useSuspenseQuery({
    queryKey: ['getExternalCameraDataApi', externalId],
    queryFn: () => getExternalCameraDataApi(externalId).then((res) => res.data),
  });

  const hasError = Object.keys(data)[0] === 'error';

  if (isError || hasError) {
    return (
      <div className={cx(commonStyles.dataSet, commonStyles.dataExternal, styles.dataExternal, styles.error)}>
        <p className={styles.id}>{id}</p>
        <p>{data.error}</p>
      </div>
    );
  }

  return (
    <div className={cx(commonStyles.dataSet, commonStyles.dataExternal, styles.dataExternal)}>
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
      <ExternalLink href={`https://www.digicamdb.com/specs/${externalId}`} className={styles.outerLink}>
        See full DB © digicamdb.com
      </ExternalLink>
    </div>
  );
};

// useSuspenseQuery has no `enabled`. Fetch only after the external tab is opened once,
// and keep showing the data after that (same as the old suspense + enabled query).
const DataExternal = (props: Props) => {
  const { camera, showExternalData } = props;
  const [opened, setOpened] = useState(showExternalData);
  if (showExternalData && !opened) setOpened(true);
  if (!opened && !showExternalData) return null;
  return <DataExternalContent camera={camera} />;
};

export default DataExternal;
