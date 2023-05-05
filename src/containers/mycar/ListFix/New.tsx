'use client';

import { FormEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cx from 'clsx';

import useAlert from '@/hooks/useAlert';
import useAuth from '@/hooks/useAuth';
import { NewMyCarFixSchema, newMyCarFixValidator } from '@/utils/validator';
import { postCarFixDataAPI } from '@/services/mycar';

import styles from '../List.module.scss';

interface Props {
  carId: string;
  refetch: () => void;
}

const NewFix = ({ carId, refetch }: Props) => {
  const { addAlert } = useAlert();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<NewMyCarFixSchema>({
    mode: 'onBlur',
    resolver: yupResolver(newMyCarFixValidator),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, dirtyFields, isDirty },
  } = methods;

  const submit = handleSubmit((formValues: NewMyCarFixSchema) => {
    if (!user) return;
    setIsLoading(true);

    postCarFixDataAPI(carId, {
      carId,
      time: formValues.time,
      km: formValues.km,
      title: formValues.title,
      body: formValues.body,
      location: formValues.location,
      locationUrl: formValues.locationUrl,
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
      <div className={cx(styles.vertical, styles.dataTime)}>
        <label className={styles.inputWrapper}>
          <input
            {...register('time')}
            type='date'
            placeholder='정비 일시'
            className={cx({ [styles.error]: errors.time, [styles.changed]: dirtyFields.time })}
          />
        </label>
        <label className={styles.inputWrapper}>
          <input
            {...register('km')}
            type='number'
            placeholder='주행거리 (km)'
            className={cx({ [styles.error]: errors.km, [styles.changed]: dirtyFields.km })}
          />
        </label>
      </div>
      <div className={cx(styles.vertical, styles.dataTitle)}>
        <label className={styles.inputWrapper}>
          <input
            {...register('title')}
            type='text'
            placeholder='내용, ex) 엔진오일 교환 서비스'
            className={cx({ [styles.error]: errors.title, [styles.changed]: dirtyFields.title })}
          />
        </label>
        <label className={styles.inputWrapper}>
          <input
            {...register('location')}
            type='text'
            placeholder='장소, ex) 타이어프로 신갈'
            className={cx({ [styles.error]: errors.location, [styles.changed]: dirtyFields.location })}
          />
        </label>
        <label className={styles.inputWrapper}>
          <input
            {...register('locationUrl')}
            type='text'
            placeholder='위치, ex) https://aaaa.com/bbb'
            className={cx({ [styles.error]: errors.locationUrl, [styles.changed]: dirtyFields.locationUrl })}
          />
        </label>
      </div>
      <div className={cx(styles.bodyWrapper, styles.dataBody)}>
        <label className={styles.inputWrapper}>
          <textarea
            {...register('body')}
            placeholder='상세 내용, ex) 밸런스 샤프트 커버 좌 우 교환'
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
