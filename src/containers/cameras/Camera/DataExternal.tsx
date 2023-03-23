'use server';

import { useState } from 'react';
import { useMount } from 'react-use';
import cx from 'classnames';

import { CameraType } from '@/types/cameras.d';
import { cameraId, externalCameraId } from './utils';

import styles from './Camera.module.scss';

const getData = async (maker: string, name: string) => {
  const id = externalCameraId(maker, name);
  const res = await fetch(`/api/cameras/${id}`);
  return res.json();
};

interface Props {
  camera: CameraType;
}

const DataExternal = (props: Props) => {
  const { camera } = props;
  const { maker, name } = camera;

  const [data, setData] = useState<Record<string, string>>();

  const id = cameraId(maker, name);
  const externalId = externalCameraId(maker, name);

  useMount(() => {
    getData(maker, name).then((res) => {
      setData(res);
    });
  });

  if (!data) {
    return (
      <div className={cx(styles.dataExternal, styles.loading)}>
        <p className={styles.id}>{id}</p>
        <p>Loading...</p>
      </div>
    );
  }

  const hasError = Object.keys(data)[0] === 'error';

  if (hasError) {
    return (
      <div className={cx(styles.dataExternal, styles.error)}>
        <p className={styles.id}>{id}</p>
        <p>{data.error}</p>
      </div>
    );
  }

  return (
    <div className={styles.dataExternal}>
      <table>
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
      <a href={`https://www.digicamdb.com/specs/${externalId}`} target='_blank' className={styles.outerLink}>
        See full DB © digicamdb.com
      </a>
    </div>
  );
};

export default DataExternal;
