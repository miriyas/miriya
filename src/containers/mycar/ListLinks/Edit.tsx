'use client';

import { Dispatch, FormEventHandler, SetStateAction, useState } from 'react';
import cx from 'clsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ItemLink } from '@/types/mycar.d';
import { patchCarLinkDataAPI } from '@/services/mycar';
import useAuth from '@/hooks/useAuth';
import useAlert from '@/hooks/useAlert';
import { NewMyCarLinkSchema, newMyCarLinkValidator } from '@/utils/validator';

import styles from '../List.module.scss';

interface Props {
  item: ItemLink;
  refetch: () => void;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

const EditItemLink = ({ item, refetch, setEditMode }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { alertUserOnly } = useAlert();

  const methods = useForm<NewMyCarLinkSchema>({
    mode: 'onBlur',
    resolver: yupResolver(newMyCarLinkValidator),
    defaultValues: {
      title: item.title,
      url: item.url,
      body: item.body,
    },
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, dirtyFields, isDirty },
  } = methods;

  const submit = handleSubmit((formValues: NewMyCarLinkSchema) => {
    if (!user) return;
    setIsLoading(true);

    patchCarLinkDataAPI(item.carId, item.id, {
      carId: item.carId,
      title: formValues.title,
      url: formValues.url,
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
    <li className={cx(styles.item, styles.edit)}>
      <form onSubmit={onSubmit}>
        <div className={styles.leftWing}>
          <div className={cx(styles.vertical, styles.dataTitle, styles.long)}>
            <label className={styles.inputWrapper}>
              <input
                {...register('title')}
                type='text'
                placeholder='*링크명'
                className={cx({ [styles.error]: errors.title, [styles.changed]: dirtyFields.title })}
              />
            </label>
            <label className={styles.inputWrapper}>
              <input
                {...register('url')}
                type='text'
                placeholder='*URL'
                className={cx({ [styles.error]: errors.url, [styles.changed]: dirtyFields.url })}
              />
            </label>
          </div>
        </div>
        <div className={styles.rightWing}>
          <div className={styles.dataBody}>
            <label className={styles.inputWrapper}>
              <textarea
                {...register('body')}
                placeholder='ex) 비머베르크 카페'
                className={cx({ [styles.error]: errors.body, [styles.changed]: dirtyFields.body }, styles.row2)}
              />
            </label>
          </div>
          <div className={styles.dataButtons}>
            <button type='submit' disabled={!isDirty || isLoading} className={cx(styles.editSubmit, styles.row2)}>
              수정
            </button>
            <button type='button' onClick={onClickCancel}>
              취소
            </button>
          </div>
        </div>
      </form>
    </li>
  );
};

export default EditItemLink;
