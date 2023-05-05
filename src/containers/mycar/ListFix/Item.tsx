'use client';

import { useState } from 'react';

import { FBItemFix } from '@/types/mycar.d';
import { deleteCarFixDataAPI } from '@/services/mycar';
import useAlert from '@/hooks/useAlert';
import useAuth from '@/hooks/useAuth';

import ExternalLink from '@/components/ExternalLink';
import EditItemFix from './Edit';
import styles from '../List.module.scss';

interface Props {
  item: FBItemFix;
  refetch: () => void;
}

const ItemFix = ({ item, refetch }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const { addAlert } = useAlert();
  const { user } = useAuth();

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

  return (
    <li>
      <div className={styles.dataTime}>
        <time>{item.time}</time>
        <p>{item.km?.toLocaleString()}km</p>
      </div>
      <div className={styles.dataTitle}>
        <p>{item.title}</p>
        {item.locationUrl ? (
          <ExternalLink href={item.locationUrl}>{item.location}</ExternalLink>
        ) : (
          <p>{item.location}</p>
        )}
      </div>
      <div className={styles.dataBody}>{item.body}</div>
      <div className={styles.dataButtons}>
        <button type='button' onClick={onClickEdit}>
          수정
        </button>
        <button type='button' onClick={onClickDelete}>
          삭제
        </button>
      </div>
    </li>
  );
};

export default ItemFix;
