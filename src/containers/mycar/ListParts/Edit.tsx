'use client';

import { Dispatch, FormEventHandler, SetStateAction, useState } from 'react';
import cx from 'clsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FBItemParts } from '@/types/mycar.d';
import { patchCarPartsDataAPI } from '@/services/mycar';
import useAuth from '@/hooks/useAuth';
import useAlert from '@/hooks/useAlert';
import { NewMyCarPartsSchema, newMyCarPartsValidator } from '@/utils/validator';

import styles from '../List.module.scss';

interface Props {
  item: FBItemParts;
  refetch: () => void;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

const EditItemFix = ({ item, refetch, setEditMode }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { alertUserOnly } = useAlert();

  const methods = useForm<NewMyCarPartsSchema>({
    mode: 'onBlur',
    resolver: yupResolver(newMyCarPartsValidator),
    defaultValues: {
      name: item.name,
      partsNo: item.partsNo,
      partsUrl: item.partsUrl,
      body: item.body,
    },
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, dirtyFields, isDirty },
  } = methods;

  const submit = handleSubmit((formValues: NewMyCarPartsSchema) => {
    if (!user) return;
    setIsLoading(true);

    patchCarPartsDataAPI(item.carId, item.id, {
      carId: item.carId,
      name: formValues.name,
      partsNo: formValues.partsNo,
      partsUrl: formValues.partsUrl,
      body: formValues.body,
    })
      .then(() => {
        reset();
        refetch();
      })
      .finally(() => {
        setIsLoading(false);
        setEditMode(false);
      });
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alertUserOnly(submit);
  };

  const onClickCancel = () => {
    setEditMode(false);
  };

  return (
    <li className={styles.edit}>
      <form onSubmit={onSubmit}>
        <div className={styles.dataTime}>
          <label className={styles.inputWrapper}>
            <input
              {...register('name')}
              type='text'
              placeholder='*부품명'
              className={cx({ [styles.error]: errors.name, [styles.changed]: dirtyFields.name })}
            />
          </label>
          <label className={styles.inputWrapper}>
            <input
              {...register('partsNo')}
              type='text'
              placeholder='*부품 번호'
              className={cx({ [styles.error]: errors.partsNo, [styles.changed]: dirtyFields.partsNo })}
            />
          </label>
        </div>
        <div className={styles.dataTitle}>
          <label className={styles.inputWrapper}>
            <input
              {...register('partsUrl')}
              type='text'
              placeholder='부품 URL'
              className={cx({ [styles.error]: errors.partsUrl, [styles.changed]: dirtyFields.partsUrl })}
            />
          </label>
        </div>
        <div className={styles.dataBody}>
          <label className={styles.inputWrapper}>
            <input
              {...register('body')}
              type='text'
              placeholder='순정 앞브레이크 패드'
              className={cx({ [styles.error]: errors.body, [styles.changed]: dirtyFields.body })}
            />
          </label>
        </div>
        <div className={styles.dataButtons}>
          <button type='submit' disabled={!isDirty || isLoading} className={styles.editSubmit}>
            확인
          </button>
          <button type='button' onClick={onClickCancel}>
            취소
          </button>
        </div>
      </form>
    </li>
  );
};

export default EditItemFix;
