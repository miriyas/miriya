'use client';

import cx from 'clsx';
import { useEffect, useState } from 'react';

import useEdit from './useEdit';
import useAuth from '@/hooks/useAuth';
import { MyCar } from '@/types/mycar.d';
import { getCDNImage } from '@/utils/image';

import Loading from '@/components/Loading';
import HeroHeader from '../HeroHeader';
import styles from './index.module.scss';
import Button from '@/components/Button';

interface Props {
  currentCar: MyCar;
}

const EditFormInner = ({ currentCar }: Props) => {
  const { user } = useAuth();

  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);
  const { dirtyFields, isDirty, isLoading, errors, onSubmit, register, watch } = useEdit(currentCar);

  const watchImage = watch('image') as File[] | null;
  const watchName = watch('name');
  const watchVin = watch('vin');
  const watchMaker = watch('maker');
  const watchLineup = watch('lineup');

  useEffect(() => {
    if (watchImage && watchImage.length > 0) {
      const file = watchImage[0];
      setPreviewUrl(URL.createObjectURL(file));
    }
  }, [watchImage]);

  const submitDisabled = !isDirty || isLoading;

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>수정</p>
      <HeroHeader
        imageUrl={previewUrl ?? getCDNImage(currentCar.imageUrl)}
        name={watchName === '' ? '차량 별명' : watchName}
        vin={watchVin === '' ? '차대 번호' : watchVin}
        maker={watchMaker === '' ? '제조사' : watchMaker}
        lineup={watchLineup === '' ? '모델명' : watchLineup}
        owner={user?.displayName ?? ''}
      />
      <div className={styles.bottom}>
        <form className={styles.editor} onSubmit={onSubmit}>
          <label className={styles.inputWrapper}>
            <span>*차량 이미지</span>
            <input
              {...register('image')}
              type='file'
              placeholder='1600x450px의 JPG 이미지'
              className={cx({ [styles.error]: errors.name, [styles.changed]: dirtyFields.name })}
              autoComplete='off'
              accept='image/jpeg'
              disabled={isLoading}
            />
          </label>

          <label className={styles.inputWrapper}>
            <span>*차량 별명</span>
            <input
              {...register('name')}
              type='text'
              placeholder='로켓보이 등등 차량 별명'
              className={cx({ [styles.error]: errors.name, [styles.changed]: dirtyFields.name })}
              autoComplete='off'
              disabled={isLoading}
            />
          </label>
          <label className={styles.inputWrapper}>
            <span>*차대 번호</span>
            <input
              {...register('vin')}
              type='text'
              placeholder='로그인한 작성자에게만 보입니다.'
              className={cx({ [styles.error]: errors.vin, [styles.changed]: dirtyFields.vin })}
              autoComplete='off'
              disabled={isLoading}
            />
          </label>
          <label className={styles.inputWrapper}>
            <span>*제조사</span>
            <input
              {...register('maker')}
              type='text'
              placeholder='현대, 기아 등등..'
              className={cx({ [styles.error]: errors.maker, [styles.changed]: dirtyFields.maker })}
              autoComplete='off'
              disabled={isLoading}
            />
          </label>
          <label className={styles.inputWrapper}>
            <span>*모델명</span>
            <input
              {...register('lineup')}
              type='text'
              placeholder='쏘나타 2.0 터보 노블레스 등등..'
              className={cx({ [styles.error]: errors.lineup, [styles.changed]: dirtyFields.lineup })}
              autoComplete='off'
              disabled={isLoading}
            />
          </label>
          <div className={styles.buttonWrapper}>
            <Button
              link={`/mycar/${currentCar.id}`}
              className={cx({ [styles.disabled]: submitDisabled })}
              skin='inverse'
              size='small'
            >
              취소
            </Button>
            <Button type='submit' disabled={submitDisabled} skin='primary' size='small'>
              {isLoading ? <Loading small /> : '확인'}
            </Button>
          </div>
        </form>
        <div className={styles.desc}>1600x900px JPG 이미지를 올려주세요!</div>
      </div>
    </div>
  );
};

export default EditFormInner;
