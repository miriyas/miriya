import { FormEventHandler } from 'react';
import cx from 'clsx';
import { FieldErrors, FieldNamesMarkedBoolean, UseFormRegister } from 'react-hook-form';

import useAlert from '@/hooks/useAlert';
import { CATEGORIES, Idol } from '@/types/idols.d';
import { prettyCategory } from '@/utils/idols';
import { EditIdolSchema } from '@/utils/validator';

import styles from './index.module.scss';
import Select from '@/components/Select';
import Button from '@/components/Button';

interface Props {
  idol: Idol;
  submitIdol: () => void;
  onClickCancel: () => void;
  errors: FieldErrors<EditIdolSchema>;
  register: UseFormRegister<EditIdolSchema>;
  dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<Partial<EditIdolSchema>>>>;
  isDirty: boolean;
  isLoading: boolean;
}

const Form = ({ idol, submitIdol, onClickCancel, errors, register, dirtyFields, isDirty, isLoading }: Props) => {
  const { alertSupporterOnly } = useAlert();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alertSupporterOnly(submitIdol);
  };

  return (
    <form className={styles.editor} onSubmit={onSubmit}>
      <p className={styles.title}>
        {idol.name}
        <span>{idol.id}</span>
      </p>
      <label
        className={cx(styles.inputWrapper, { [styles.error]: errors.category, [styles.changed]: dirtyFields.category })}
      >
        <span>*카테고리</span>
        <Select placeholder='*카테고리' {...register('category')} required className={styles.select}>
          {CATEGORIES.filter((c) => c !== 'total').map((category) => {
            return (
              <option value={category} key={category}>
                {prettyCategory(category)}
              </option>
            );
          })}
        </Select>
      </label>
      <label className={styles.inputWrapper}>
        <span>*데뷔 연도</span>
        <input type='text' defaultValue={idol.debutYear} disabled />
      </label>
      <label
        className={cx(styles.inputWrapper, { [styles.error]: errors.endYear, [styles.changed]: dirtyFields.endYear })}
      >
        <span>해체 연도</span>
        <input {...register('endYear')} type='text' placeholder="숫자 또는 '활동중'" />
      </label>
      <p className={styles.subtitle}>유튜브 정보</p>
      <label
        className={cx(styles.inputWrapper, {
          [styles.error]: errors.youtubeUrl,
          [styles.changed]: dirtyFields.youtubeUrl,
        })}
      >
        <span>고유 아이디</span>
        <input {...register('youtubeUrl')} type='text' placeholder='(ex: 72BqCAmhnxk)' />
      </label>
      <label
        className={cx(styles.inputWrapper, {
          [styles.error]: errors.youtubeStartsAt,
          [styles.changed]: dirtyFields.youtubeStartsAt,
        })}
      >
        <span>하이라이트(초)</span>
        <input {...register('youtubeStartsAt')} type='text' placeholder='유튜브 하이라이트 시작 (초)' />
      </label>
      <p className={styles.subtitle}>기타 정보</p>
      <label
        className={cx(styles.inputWrapper, {
          [styles.error]: errors.descTitle,
          [styles.changed]: dirtyFields.descTitle,
        })}
      >
        <span>한줄 소개</span>
        <input {...register('descTitle')} type='text' placeholder='한줄 요약' data-lpignore='true' autoComplete='off' />
      </label>
      <label
        className={cx(styles.inputWrapper, {
          [styles.error]: errors.descMelon,
          [styles.changed]: dirtyFields.descMelon,
        })}
      >
        <span>멜론 URL</span>
        <input
          {...register('descMelon')}
          type='text'
          placeholder='https://www.melon.com/artist/timeline.htm?artistId=6017'
          data-lpignore='true'
          autoComplete='off'
        />
      </label>
      <label
        className={cx(styles.inputWrapper, {
          [styles.error]: errors.descNamu,
          [styles.changed]: dirtyFields.descNamu,
        })}
      >
        <span>나무위키 URL</span>
        <input
          {...register('descNamu')}
          type='text'
          placeholder='https://namu.wiki/w/%EA%B9%80%EC%97%B0%EC%9A%B0'
          data-lpignore='true'
          autoComplete='off'
        />
      </label>
      <label
        className={cx(styles.inputWrapper, {
          [styles.error]: errors.descVibe,
          [styles.changed]: dirtyFields.descVibe,
        })}
      >
        <span>Vibe URL</span>
        <input
          {...register('descVibe')}
          type='text'
          placeholder='https://vibe.naver.com/artist/30'
          data-lpignore='true'
          autoComplete='off'
        />
      </label>
      <div className={styles.buttonWrapper}>
        <Button onClick={onClickCancel} size='small' skin='inverse'>
          취소
        </Button>
        <Button type='submit' disabled={!isDirty || isLoading} size='small' skin='primary'>
          확인
        </Button>
      </div>
    </form>
  );
};

export default Form;
