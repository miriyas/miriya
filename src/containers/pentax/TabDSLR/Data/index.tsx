'use client';

import { useAtom } from 'jotai';
import cx from 'clsx';

import { PentaxDslr } from '@/types/pentaxes';
import { editCameraAtom } from '../states';

import { IconEdit } from 'public/svgs';
import Editor from './Editor';
import DataColumn1 from './Column1';
import DataColumn2 from './Column2';
import DataColumn3 from './Column3';
import styles from '../../_common/CommonData.module.scss';

interface Props {
  selectedCamera?: PentaxDslr;
}

const Data = ({ selectedCamera }: Props) => {
  const [editCamera, setEditCamera] = useAtom(editCameraAtom);

  if (!selectedCamera) return null;

  const onClickEdit = () => {
    setEditCamera(selectedCamera.id);
  };

  if (editCamera) return <Editor camera={selectedCamera} />;

  return (
    <div className={cx(styles.data, styles.dslr)}>
      <DataColumn1 camera={selectedCamera} />
      <DataColumn2 camera={selectedCamera} />
      <DataColumn3 camera={selectedCamera} />
      <button type='button' className={styles.toEdit} onClick={onClickEdit} aria-label='edit'>
        <IconEdit />
      </button>
    </div>
  );
};

export default Data;
