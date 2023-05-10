'use client';

import { FormEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cx from 'clsx';

import useAlert from '@/hooks/useAlert';
import useAuth from '@/hooks/useAuth';
import { NewMyCarLinkSchema, newMyCarLinkValidator } from '@/utils/validator';
import { postCarLinkDataAPI } from '@/services/mycar';

import styles from '../List.module.scss';

interface Props {
  carId: string;
  refetch: () => void;
}

const NewFix = ({ carId, refetch }: Props) => {
  const { user } = useAuth();
  const { alertUserOnly } = useAlert();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<NewMyCarLinkSchema>({
    mode: 'onBlur',
    resolver: yupResolver(newMyCarLinkValidator),
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

    postCarLinkDataAPI(carId, {
      carId,
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
      });
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alertUserOnly(submit);
  };

  return (
    <form className={styles.new} onSubmit={onSubmit}>
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
          <button type='submit' disabled={!isDirty || isLoading} className={styles.row2}>
            추가
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewFix;
