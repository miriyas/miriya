'use client';

import cx from 'clsx';

import { FBPentaxSlr } from '@/types/pentaxes.d';
import useEditor from './useEditor';
import EditorInputs from '@/containers/pentax/_common/EditorInput';
import { InputFields } from '@/types/index.d';

import inputStyles from '../../_common/EditorInput/index.module.scss';
import styles from './Editor.module.scss';

const fields1: InputFields = {
  'data.body.weight': {
    type: 'number',
    label: '무게',
  },
  'data.body.color': '색상',
  'data.body.verticalGrip': '세로그립',
  'data.power': '전원',
  'data.etc': '기타',
  'data.refs': '레퍼런스',
};

const fields2: InputFields = {
  'data.modes': '촬영모드',
  'data.metering.k': 'K/M 측광',
  'data.metering.a': 'A/F/FA 측광',
  'data.metering.range': '측광범위',
  'data.exposure.range': '노출보정',
  'data.asa.dx': 'DX ASA',
  'data.asa.manual': '매뉴얼 ASA',
  'data.exposure.fix': {
    type: 'checkbox',
    label: '노출고정',
  },
  'data.panorama': {
    type: 'checkbox',
    label: '파노라마포멧',
  },
};

const fields3: InputFields = {
  'data.shutter.build': '셔터구조',
  'data.shutter.speed': '셔터속도',
  'data.shutter.emergency': '비상셔터',
  'data.shutter.timer': '셀프타이머',
  'data.shutter.release': '유선릴리즈',
  'data.shutter.releaseW': '무선릴리즈',
  'data.winder.internal': '내장와인더',
  'data.winder.external': '외장와인더',
  'data.winder.motorDrive': '모터드라이브',
};

const fields4: InputFields = {
  'data.viewFinder.coverage': {
    type: 'number',
    label: '시야율',
  },
  'data.viewFinder.magnification': {
    type: 'number',
    label: '배율',
  },
  'data.viewFinder.seeShutterSpeed': '셔터속도보기',
  'data.viewFinder.seeAperture': '조리개값보기',
  'data.viewFinder.screenReplace': {
    type: 'checkbox',
    label: '스크린교환',
  },
  'data.viewFinder.finderReplace': {
    type: 'checkbox',
    label: '파인더교환',
  },
  'data.focus.powerZoom': '파워줌',
};

const fields5: InputFields = {
  'data.flash.sync': '플래시연동',
  'data.flash.modes': '플래시작동',
  'data.flash.syncSpeed': '동조속도',
  'data.flash.internal': '내장플래시',
  'data.flash.redEye': {
    type: 'checkbox',
    label: '적목감소',
  },
};

const fields6: InputFields = {
  'data.focus.name': 'AF센서',
  'data.focus.sensitivity': 'AF감도',
  'data.focus.support': {
    type: 'checkbox',
    label: 'AF보조광',
  },
};

interface Props {
  camera: FBPentaxSlr;
}

const Editor = ({ camera }: Props) => {
  const { errors, dirtyFields, isDirty, register, onSubmit, onClickCancel } = useEditor(camera);
  return (
    <form className={styles.editor} onSubmit={onSubmit}>
      <div className={styles.column}>
        <label className={inputStyles.inputWrapper}>
          <p className={inputStyles.fieldName}>생산연도</p>
          <input
            {...register('startYear')}
            type='number'
            className={cx(inputStyles.mini, {
              [inputStyles.error]: errors.startYear,
              [inputStyles.changed]: dirtyFields.startYear,
            })}
          />
          <p className={inputStyles.deco}>~</p>
          <input
            {...register('endYear')}
            type='number'
            className={cx(inputStyles.mini, {
              [inputStyles.error]: errors.endYear,
              [inputStyles.changed]: dirtyFields.endYear,
            })}
          />
        </label>
        <label
          className={cx(inputStyles.inputWrapper, {
            [inputStyles.error]: errors.mount,
            [inputStyles.changed]: dirtyFields.mount,
          })}
        >
          <p className={inputStyles.fieldName}>마운트</p>
          <input type='text' {...register('mount')} />
        </label>
        <label className={inputStyles.inputWrapper}>
          <p className={inputStyles.fieldName}>규격</p>
          <input
            type='number'
            step='0.1'
            className={cx(inputStyles.tiny, {
              [inputStyles.error]: errors.data?.body?.width,
              [inputStyles.changed]: dirtyFields.data?.body?.width,
            })}
            {...register('data.body.width')}
          />
          <p className={inputStyles.deco}>x</p>
          <input
            type='number'
            step='0.1'
            className={cx(inputStyles.tiny, {
              [inputStyles.error]: errors.data?.body?.height,
              [inputStyles.changed]: dirtyFields.data?.body?.height,
            })}
            {...register('data.body.height')}
          />
          <p className={inputStyles.deco}>x</p>
          <input
            type='number'
            step='0.1'
            className={cx(inputStyles.tiny, {
              [inputStyles.error]: errors.data?.body?.depth,
              [inputStyles.changed]: dirtyFields.data?.body?.depth,
            })}
            {...register('data.body.depth')}
          />
        </label>
        <EditorInputs fields={fields1} register={register} errors={errors} dirtyFields={dirtyFields} />
        <div className={styles.blank} />
        <EditorInputs fields={fields2} register={register} errors={errors} dirtyFields={dirtyFields} />
      </div>
      <div className={styles.column}>
        <EditorInputs fields={fields3} register={register} errors={errors} dirtyFields={dirtyFields} />
        <div className={styles.blank} />
        <EditorInputs fields={fields4} register={register} errors={errors} dirtyFields={dirtyFields} />
      </div>
      <div className={styles.column}>
        <EditorInputs fields={fields5} register={register} errors={errors} dirtyFields={dirtyFields} />
        <div className={styles.blank} />
        <EditorInputs fields={fields6} register={register} errors={errors} dirtyFields={dirtyFields} />
        <label
          className={cx(inputStyles.inputWrapper, {
            [inputStyles.error]: errors.data?.comment,
            [inputStyles.changed]: dirtyFields.data?.comment,
          })}
        >
          <p className={inputStyles.fieldName}>평가</p>
          <textarea {...register('data.comment')} />
        </label>
        <div className={styles.buttonWrapper}>
          <button type='button' onClick={onClickCancel}>
            취소
          </button>
          <button type='submit' disabled={!isDirty}>
            수정
          </button>
        </div>
      </div>
    </form>
  );
};

export default Editor;
