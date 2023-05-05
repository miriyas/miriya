'use client';

import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cx from 'clsx';
import Image from 'next/image';

import { NewMyCarSchema, newMyCarValidator } from '@/utils/validator';
import useAuth from '@/hooks/useAuth';
import useAlert from '@/hooks/useAlert';
import { patchCarDataAPI } from '@/services/mycar';
import { FBMyCar } from '@/types/mycar.d';

import headerStyles from '../HeroHeader/index.module.scss';
import styles from './index.module.scss';

interface Props {
  car: FBMyCar;
}

const MyCarEdit = ({ car }: Props) => {
  const router = useRouter();
  const { addAlert } = useAlert();
  const { user, isSupporter, isAdmin } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<NewMyCarSchema>({
    mode: 'onBlur',
    resolver: yupResolver(newMyCarValidator),
    defaultValues: {
      name: car.name,
      vin: car.vin,
      maker: car.maker,
      lineup: car.lineup,
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, dirtyFields, isDirty },
  } = methods;

  const submit = handleSubmit((formValues: NewMyCarSchema) => {
    if (!user) return;
    setIsLoading(true);

    patchCarDataAPI(car.id, {
      name: formValues.name,
      vin: formValues.vin,
      maker: formValues.maker,
      lineup: formValues.lineup,
    })
      .then(() => {
        router.push('/mycar');
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
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <div className={headerStyles.heroHeader}>
        <div className={headerStyles.texts}>
          <label className={cx(styles.inputWrapper, headerStyles.title)}>
            <input
              {...register('name')}
              type='text'
              placeholder='로켓보이 등등 차량 별명'
              className={cx({ [styles.error]: errors.name, [styles.changed]: dirtyFields.name })}
            />
          </label>
          <div className={headerStyles.line}>
            <label className={styles.inputWrapper}>
              <input
                {...register('maker')}
                type='text'
                placeholder='현대, 기아 등등..'
                className={cx({ [styles.error]: errors.maker, [styles.changed]: dirtyFields.maker })}
              />
            </label>
            <label className={styles.inputWrapper}>
              <input
                {...register('lineup')}
                type='text'
                placeholder='쏘나타 2.0 터보 노블레스 등등..'
                className={cx({ [styles.error]: errors.lineup, [styles.changed]: dirtyFields.lineup })}
              />
            </label>
          </div>

          <label className={cx(styles.inputWrapper, headerStyles.vin)}>
            <input
              {...register('vin')}
              type='text'
              placeholder='로그인한 작성자에게만 보입니다.'
              className={cx({ [styles.error]: errors.vin, [styles.changed]: dirtyFields.vin })}
            />
          </label>

          <p className={styles.owner}>{user?.displayName}</p>
        </div>
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/mycar/${car.id}.jpg`}
          width={800}
          height={450}
          alt=''
          className={styles.hero}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <button type='submit' disabled={!isDirty || isLoading}>
          확인
        </button>
      </div>
    </form>
  );
};

export default MyCarEdit;
