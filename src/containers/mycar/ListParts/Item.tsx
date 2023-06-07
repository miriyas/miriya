'use client';

import { useState } from 'react';

import { ItemParts } from '@/types/mycar.d';
import { deleteCarPartsDataAPI } from '@/services/mycar';
import useAlert from '@/hooks/useAlert';
import useAuth from '@/hooks/useAuth';

import ExternalLink from '@/components/ExternalLink';
import EditItemParts from './Edit';
import styles from '../List.module.scss';

interface Props {
  item: ItemParts;
  refetch: () => void;
  carOwnerId: string;
}

const ListPartsItem = ({ item, refetch, carOwnerId }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const { addAlert } = useAlert();
  const { user, isAdmin, isMine } = useAuth();

  const onClickEdit = () => {
    setEditMode(true);
  };

  const onClickDelete = () => {
    if (!user) return;
    addAlert({
      message: '진짜 삭제하시겠습니까?',
      onConfirm: () => deleteCarPartsDataAPI(item.carId, item.id).then(refetch),
    });
  };

  if (editMode) {
    return <EditItemParts item={item} refetch={refetch} setEditMode={setEditMode} />;
  }

  return (
    <li className={styles.item}>
      <div className={styles.leftWing}>
        <div className={styles.dataTitle}>
          <p>{item.name}</p>
        </div>
        <div className={styles.dataTime}>
          {item.partsUrl ? <ExternalLink href={item.partsUrl}>{item.partsNo}</ExternalLink> : <p>{item.partsNo}</p>}
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

export default ListPartsItem;
