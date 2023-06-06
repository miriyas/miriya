import { FormEventHandler } from 'react';
import cx from 'clsx';
import { FieldErrors, FieldNamesMarkedBoolean, UseFormRegister } from 'react-hook-form';

import useAlert from '@/hooks/useAlert';
import { CATEGORIES, FBIdolType } from '@/types/idols.d';
import { prettyCategory } from '@/utils/idols';
import { EditIdolSchema } from '@/utils/validator';

import styles from './index.module.scss';
import Select from '@/components/Select';
import Button from '@/components/Button';

interface Item {
  label: string;
  placeholder: string;
}

const DESC_ITEMS: Record<'title' | 'namu' | 'naver' | 'melon', Item> = {
  title: {
    label: '한줄 소개',
    placeholder: '한줄 요약',
  },
  melon: {
    label: '멜론 URL',
    placeholder: 'https://www.melon.com/artist/timeline.htm?artistId=6017',
  },
  namu: {
    label: '나무위키 URL',
    placeholder: 'https://namu.wiki/w/%EA%B9%80%EC%97%B0%EC%9A%B0',
  },
  naver: {
    label: 'Vibe URL',
    placeholder: 'https://vibe.naver.com/artist/30',
  },
};

const YOUTUBE_ITEMS: Record<'url' | 'startsAt', Item> = {
  url: {
    label: '고유 아이디',
    placeholder: '(ex: 72BqCAmhnxk)',
  },
  startsAt: {
    label: '하이라이트(초)',
    placeholder: '유튜브 하이라이트 시작 (초)',
  },
};

interface Props {
  idol: FBIdolType;
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
      {/* {idol ? ( */}
      <p className={styles.title}>
        {idol.name}
        <span>{idol.id}</span>
      </p>
      {/* ) : (
        <label className={styles.inputWrapper}>
          <span>*이름</span>
          <input {...register('name')} type='text' placeholder='아이돌명' />
        </label>
      )} */}
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
        {/* {idol ? ( */}
        <input type='number' defaultValue={idol.debutYear} disabled />
        {/* ) : (
          <input {...register('debutYear')} type='number' placeholder='숫자' />
        )} */}
      </label>
      <label
        className={cx(styles.inputWrapper, { [styles.error]: errors.endYear, [styles.changed]: dirtyFields.endYear })}
      >
        <span>해체 연도</span>
        <input {...register('endYear')} type='text' placeholder="숫자 또는 '활동중'" />
      </label>
      <p className={styles.subtitle}>유튜브 정보</p>
      {(Object.keys(YOUTUBE_ITEMS) as Array<keyof typeof YOUTUBE_ITEMS>).map((key) => {
        const { label, placeholder } = YOUTUBE_ITEMS[key];
        return (
          <label
            key={key}
            className={cx(styles.inputWrapper, {
              [styles.error]: errors.youtube?.[key],
              [styles.changed]: dirtyFields.youtube?.[key],
            })}
          >
            <span>{label}</span>
            <input {...register(`youtube.${key}`)} type='text' placeholder={placeholder} />
          </label>
        );
      })}
      <p className={styles.subtitle}>기타 정보</p>
      {(Object.keys(DESC_ITEMS) as Array<keyof typeof DESC_ITEMS>).map((key) => {
        const { label, placeholder } = DESC_ITEMS[key];
        return (
          <label
            key={key}
            className={cx(styles.inputWrapper, {
              [styles.error]: errors.desc?.[key],
              [styles.changed]: dirtyFields.desc?.[key],
            })}
          >
            <span>{label}</span>
            <input
              {...register(`desc.${key}`)}
              type='text'
              placeholder={placeholder}
              data-lpignore='true'
              autoComplete='off'
            />
          </label>
        );
      })}
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
