/* eslint-disable no-alert */
import { FormEventHandler } from 'react';
import { useResetAtom } from 'jotai/utils';
import cx from 'clsx';

import useEditor from './useEditor';
import { CATEGORIES, FBIdolType } from '@/types/idols.d';
import { prettyCategory } from '@/utils/idols';
import { editIdolAtom } from '@/containers/idols/states';
import useAuth from '@/hooks/useAuth';

import styles from './index.module.scss';

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
    label: 'Vive URL',
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
}

const Editor = ({ idol }: Props) => {
  const { user, isSupporter } = useAuth();
  const resetEditIdol = useResetAtom(editIdolAtom);

  const { errors, dirtyFields, isDirty, register, submitIdol } = useEditor(idol);

  const onClickCancel = () => {
    resetEditIdol();
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!user) {
      alert('미안, 구경 잘 했어? 로그인 하고 돌아오자.'); // 인터렉션 방해해서 얼럿 쓰면 안되는건 알지만, 범용 모달 만들기 전까지 쓴다
      return;
    }
    if (!isSupporter) {
      alert(
        '진짜 미안, 아무나 수정할 수는 없어.. 무섭잖아.. \n이준혁에게 DM을 보내보자.\n나를 도와줘! 아이돌이 너무 많아..',
      ); // 인터렉션 방해해서 얼럿 쓰면 안되는건 알지만, 범용 모달 만들기 전까지 쓴다
      return;
    }
    submitIdol();
  };

  return (
    <form className={styles.editor} onSubmit={onSubmit}>
      <p className={styles.title}>{idol.name}</p>
      <label
        className={cx(styles.inputWrapper, { [styles.error]: errors.category, [styles.changed]: dirtyFields.category })}
      >
        <span>*카테고리</span>
        <select {...register('category')} placeholder='*카테고리' required>
          {CATEGORIES.filter((c) => c !== 'total').map((category) => {
            return (
              <option value={category} key={category}>
                {prettyCategory(category)}
              </option>
            );
          })}
        </select>
      </label>
      <label className={styles.inputWrapper}>
        <span>*데뷔 연도</span>
        <input type='number' defaultValue={idol.debutYear} disabled />
      </label>
      <label
        className={cx(styles.inputWrapper, { [styles.error]: errors.endYear, [styles.changed]: dirtyFields.endYear })}
      >
        <span>해체 연도</span>
        <input {...register('endYear')} type='number' placeholder="숫자 또는 '활동중'" />
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
            <input {...register(`desc.${key}`)} type='text' placeholder={placeholder} />
          </label>
        );
      })}
      <div className={styles.buttonWrapper}>
        <button type='button' onClick={onClickCancel}>
          취소
        </button>
        <button type='submit' disabled={!isDirty}>
          수정
        </button>
      </div>
    </form>
  );
};

export default Editor;
