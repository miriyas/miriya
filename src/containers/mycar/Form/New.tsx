'use client';

import Link from 'next/link';
import cx from 'clsx';

import useNew from './useNew';
import useAuth from '@/hooks/useAuth';

import HeroHeader from '../HeroHeader';
import styles from './index.module.scss';

const MyCarNewPage = () => {
  const { user } = useAuth();

  const { dirtyFields, isDirty, isLoading, errors, onSubmit, register, watch } = useNew();

  const watchName = watch('name');
  const watchVin = watch('vin');
  const watchMaker = watch('maker');
  const watchLineup = watch('lineup');

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
      <div className={styles.bottom}>
        <form className={styles.editor} onSubmit={onSubmit}>
          <label className={styles.inputWrapper}>
            <span>*차량 별명</span>
            <input
              {...register('name')}
              type='text'
              placeholder='로켓보이 등등 차량 별명'
              className={cx({ [styles.error]: errors.name, [styles.changed]: dirtyFields.name })}
              autoComplete='off'
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
            />
          </label>
          <div className={styles.buttonWrapper}>
            <Link href='/mycar'>취소</Link>
            <button type='submit' disabled={!isDirty || isLoading}>
              확인
            </button>
          </div>
        </form>
        <div className={styles.desc}>
          이미지 업로드 기능은 준비중..
          <br />
          Next.js appDir에서 S3 라이브러리가 경로를 못잡는 버그로 인해 고생중..
          <br />
          1600x450px JPG 이미지를 제게 주시면 올려드리겠습니다...
        </div>
      </div>
    </div>
  );
};

export default MyCarNewPage;
