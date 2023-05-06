'use client';

import { Dispatch, FormEventHandler, SetStateAction, useState } from 'react';
import cx from 'clsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAtomValue } from 'jotai';

import { FBItemFix } from '@/types/mycar.d';
import { patchCarFixDataAPI } from '@/services/mycar';
import useAuth from '@/hooks/useAuth';
import useAlert from '@/hooks/useAlert';
import { NewMyCarFixSchema, newMyCarFixValidator } from '@/utils/validator';
import { getKmAndMiles } from '@/utils/mycar';
import { metricKmAtom } from '../states';

import styles from '../List.module.scss';

interface Props {
  item: FBItemFix;
  refetch: () => void;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

const EditItemFix = ({ item, refetch, setEditMode }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { addAlert } = useAlert();
  const metricKm = useAtomValue(metricKmAtom);

  const methods = useForm<NewMyCarFixSchema>({
    mode: 'onBlur',
    resolver: yupResolver(newMyCarFixValidator),
    defaultValues: {
      time: item.time,
      range: metricKm ? item.km : item.miles,
      title: item.title,
      location: item.location,
      locationUrl: item.locationUrl,
      body: item.body,
    },
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

    const { km, miles } = getKmAndMiles(metricKm, formValues.range);
    patchCarFixDataAPI(item.carId, item.id, {
      carId: item.carId,
      time: formValues.time,
      km,
      miles,
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
        setEditMode(false);
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

  const onClickCancel = () => {
    setEditMode(false);
  };

  return (
    <li className={cx(styles.item, styles.edit)}>
      <form onSubmit={onSubmit}>
        <div className={styles.leftWing}>
          <div className={styles.dataTime}>
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
                {...register('range')}
                type='number'
                placeholder={`주행거리 (${metricKm ? 'km' : 'mi'})`}
                className={cx({ [styles.error]: errors.range, [styles.changed]: dirtyFields.range })}
              />
            </label>
          </div>
          <div className={styles.dataTitle}>
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
        </div>
        <div className={styles.rightWing}>
          <div className={styles.dataBody}>
            <label className={styles.inputWrapper}>
              <textarea
                {...register('body')}
                placeholder='상세 내용, ex) 밸런스 샤프트 커버 좌 우 교환'
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
        </div>
      </form>
    </li>
  );
};

export default EditItemFix;
