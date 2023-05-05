'use client';

import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import cx from 'clsx';

import { NewMyCarSchema, newMyCarValidator } from '@/utils/validator';
import useAuth from '@/hooks/useAuth';
import useAlert from '@/hooks/useAlert';
import { postCarDataAPI } from '@/services/mycar';

import HeroHeader from '../HeroHeader';
import styles from './index.module.scss';

const MyCarNewPage = () => {
  const router = useRouter();
  const { addAlert } = useAlert();
  const { user, isSupporter, isAdmin } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<NewMyCarSchema>({
    mode: 'onBlur',
    resolver: yupResolver(newMyCarValidator),
    defaultValues: {
      name: '차량 별명',
      vin: '차대 번호',
      maker: '제조사',
      lineup: '모델명',
    },
  });

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, dirtyFields, isDirty },
  } = methods;

  const watchName = watch('name');
  const watchVin = watch('vin');
  const watchMaker = watch('maker');
  const watchLineup = watch('lineup');

  const submit = handleSubmit((formValues: NewMyCarSchema) => {
    if (!user) return;
    setIsLoading(true);

    postCarDataAPI({
      name: formValues.name,
      vin: formValues.vin,
      maker: formValues.maker,
      lineup: formValues.lineup,
    })
      .then(() => {
        router.replace('/mycar');
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (isAdmin || isSupporter) {
      submit();
      return;
    }
    if (!user) {
      addAlert({ message: '미안, 구경 잘 했어? 로그인 하고 돌아오자.' });
    }
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>내 차량 추가하기</p>
      <HeroHeader
        name={watchName === '' ? '차량 별명' : watchName}
        vin={watchVin === '' ? '차대 번호' : watchVin}
        maker={watchMaker === '' ? '제조사' : watchMaker}
        lineup={watchLineup === '' ? '모델명' : watchLineup}
        owner={user?.displayName ?? ''}
        preview
      />
      <form className={styles.editor} onSubmit={onSubmit}>
        <label className={styles.inputWrapper}>
          <span>*차량 별명</span>
          <input
            {...register('name')}
            type='text'
            placeholder='로켓보이 등등 차량 별명'
            className={cx({ [styles.error]: errors.name, [styles.changed]: dirtyFields.name })}
          />
        </label>
        <label className={styles.inputWrapper}>
          <span>*차대 번호</span>
          <input
            {...register('vin')}
            type='text'
            placeholder='로그인한 작성자에게만 보입니다.'
            className={cx({ [styles.error]: errors.vin, [styles.changed]: dirtyFields.vin })}
          />
        </label>
        <label className={styles.inputWrapper}>
          <span>*제조사</span>
          <input
            {...register('maker')}
            type='text'
            placeholder='현대, 기아 등등..'
            className={cx({ [styles.error]: errors.maker, [styles.changed]: dirtyFields.maker })}
          />
        </label>
        <label className={styles.inputWrapper}>
          <span>*모델명</span>
          <input
            {...register('lineup')}
            type='text'
            placeholder='쏘나타 2.0 터보 노블레스 등등..'
            className={cx({ [styles.error]: errors.lineup, [styles.changed]: dirtyFields.lineup })}
          />
        </label>
        <div className={styles.buttonWrapper}>
          <Link href='/mycar'>취소</Link>
          <button type='submit' disabled={!isDirty || isLoading}>
            확인
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyCarNewPage;
