'use client';

import { FormEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cx from 'clsx';

import useAlert from '@/hooks/useAlert';
import useAuth from '@/hooks/useAuth';
import { NewMyCarPartsSchema, newMyCarPartsValidator } from '@/utils/validator';
import { postCarPartsDataAPI } from '@/services/mycar';

import styles from '../List.module.scss';

interface Props {
  carId: string;
  refetch: () => void;
}

const NewFix = ({ carId, refetch }: Props) => {
  const { addAlert } = useAlert();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<NewMyCarPartsSchema>({
    mode: 'onBlur',
    resolver: yupResolver(newMyCarPartsValidator),
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

    postCarPartsDataAPI(carId, {
      carId,
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
      });
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!user) {
      addAlert({ message: '미안, 구경 잘 했어? 로그인 하고 돌아오자.' });
      return;
    }
    submit();
  };

  return (
    <form className={styles.new} onSubmit={onSubmit}>
      <div className={cx(styles.vertical, styles.dataTitle)}>
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
          <textarea
            {...register('body')}
            placeholder='순정 앞브레이크 패드'
            className={cx({ [styles.error]: errors.body, [styles.changed]: dirtyFields.body })}
          />
        </label>
      </div>
      <div className={styles.dataButtons}>
        <button type='submit' disabled={!isDirty || isLoading}>
          추가
        </button>
      </div>
    </form>
  );
};

export default NewFix;
