'use client';

import { useState } from 'react';
import { useAtomValue } from 'jotai';

import { ItemFix } from '@/types/mycar.d';
import { deleteCarFixDataAPI } from '@/services/mycar';
import useAlert from '@/hooks/useAlert';
import useAuth from '@/hooks/useAuth';
import { metricKmAtom } from '../states';

import ExternalLink from '@/components/ExternalLink';
import EditItemFix from './Edit';
import styles from '../List.module.scss';

interface Props {
  item: ItemFix;
  refetch: () => void;
  carOwnerId: string;
}

const ListFixItem = ({ item, refetch, carOwnerId }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const { addAlert } = useAlert();
  const { user, isAdmin, isMine } = useAuth();
  const metricKm = useAtomValue(metricKmAtom);

  const onClickEdit = () => {
    setEditMode(true);
  };

  const onClickDelete = () => {
    if (!user) return;
    addAlert({
      message: '진짜 삭제하시겠습니까?',
      onConfirm: () => deleteCarFixDataAPI(item.carId, item.id).then(refetch),
    });
  };

  if (editMode) {
    return <EditItemFix item={item} refetch={refetch} setEditMode={setEditMode} />;
  }

  let range = item.km ? `${item.km?.toLocaleString()}km` : '';
  if (!metricKm) range = item.miles ? `${item.miles?.toLocaleString()}mi` : '';

  return (
    <li className={styles.item}>
      <div className={styles.leftWing}>
        <div className={styles.dataTime}>
          <time>{item.time}</time>
          <p>{range}</p>
        </div>
        <div className={styles.dataTitle}>
          <p>{item.title}</p>
          {item.locationUrl ? (
            <ExternalLink href={item.locationUrl}>{item.location}</ExternalLink>
          ) : (
            <p>{item.location}</p>
          )}
        </div>
      </div>
      <div className={styles.rightWing}>
        <div className={styles.dataBody}>{item.body ? item.body : '-'}</div>
        {(isAdmin || isMine(carOwnerId)) && (
          <div className={styles.dataButtons}>
            <button type='button' onClick={onClickEdit}>
              수정
            </button>
            <button type='button' onClick={onClickDelete}>
              삭제
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default ListFixItem;
