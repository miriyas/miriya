'use client';

import cx from 'clsx';

import { FBPentaxDslr } from '@/types/pentaxes.d';
import useEditor from './useEditor';
import { InputFields } from '@/types/index.d';

import EditorInputs from '@/components/EditorInputs';
import inputStyles from '@/components/EditorInputs/index.module.scss';
import styles from '../../_common/CommonEditor.module.scss';

const fields1: InputFields = {
  'data.body.weight': '무게',
  'data.body.material': '재질',
  'data.body.verticalGrip': '세로그립',
  'data.power': '전원',
  'data.bonus.wr': {
    type: 'checkbox',
    label: '방진방습',
  },
  'data.bonus.sr': '손떨림보정',
  'data.bonus.dustRemove': '먼지제거',
  'data.memory': '메모리',
  'data.etc': '기타',
};

const fields2: InputFields = {
  'data.sensor.pixels': '센서화소',
  'data.sensor.size': '센서크기',
  'data.sensor.iso': '지원감도',
  'data.sensor.engine': '프로세서',
};

const fields3: InputFields = {
  'data.modes': '촬영모드',
  'data.meteringK': 'K/M 측광',
  'data.meteringA': 'A/F/FA 측광',
  'data.meteringRange': '측광범위',
  'data.exposureRange': '노출보정',
  'data.shutter': '셔터속도',
  'data.continuous': '연사속도',
  'data.continuousLength': '연사매수',
};

const fields4: InputFields = {
  'data.viewFinder.type': '뷰파인더',
  'data.viewFinder.coverage': '시야율',
  'data.viewFinder.magnification': '배율',
  'data.viewFinder.screenReplace': {
    type: 'checkbox',
    label: '스크린교환',
  },
};

const fields5: InputFields = {
  'data.flash.interlock': '플래시연동',
  'data.flash.modes': '플래시작동',
  'data.flash.syncSpeed': '동조속도',
  'data.flash.internal': '내장플래시',
  'data.flash.redEye': {
    type: 'checkbox',
    label: '적목감소',
  },
  'data.flash.release': '유선릴리즈',
  'data.flash.releaseW': '무선릴리즈',
};

const fields6: InputFields = {
  'data.focus.name': 'AF센서',
  'data.focus.points': '측거점',
  'data.focus.sensitivity': 'AF감도',
  'data.focus.superImpose': {
    type: 'checkbox',
    label: '슈퍼임포즈',
  },
  'data.focus.supersonicMotor': {
    type: 'checkbox',
    label: '초음파모터',
  },
};

const fields7: InputFields = {
  'data.display': 'LCD',
  'data.liveView': {
    type: 'checkbox',
    label: '라이브뷰',
  },
  'data.liveViewAF': '라이브뷰AF',
  'data.movie': '동영상',
  'data.movieType': '동영상형식',
  'data.imageType': '이미지형식',
  'data.refs': '레퍼런스',
};

interface Props {
  camera: FBPentaxDslr;
}

const Editor = ({ camera }: Props) => {
  const { errors, dirtyFields, isDirty, register, onSubmit, onClickCancel } = useEditor(camera);
  return (
    <form className={cx(styles.editor, styles.dslr)} onSubmit={onSubmit}>
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
            [inputStyles.error]: errors.data?.mount,
            [inputStyles.changed]: dirtyFields.data?.mount,
          })}
        >
          <p className={inputStyles.fieldName}>마운트</p>
          <input type='text' {...register('data.mount')} />
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
        <EditorInputs fields={fields1} register={register} errors={errors} dirtyFields={dirtyFields} category='dslr' />
        <div className={styles.blank} />
        <EditorInputs fields={fields2} register={register} errors={errors} dirtyFields={dirtyFields} category='dslr' />
      </div>
      <div className={styles.column}>
        <EditorInputs fields={fields3} register={register} errors={errors} dirtyFields={dirtyFields} category='dslr' />
        <div className={styles.blank} />
        <EditorInputs fields={fields4} register={register} errors={errors} dirtyFields={dirtyFields} category='dslr' />
        <div className={styles.blank} />
        <EditorInputs fields={fields5} register={register} errors={errors} dirtyFields={dirtyFields} category='dslr' />
      </div>
      <div className={styles.column}>
        <EditorInputs fields={fields6} register={register} errors={errors} dirtyFields={dirtyFields} category='dslr' />
        <div className={styles.blank} />
        <EditorInputs fields={fields7} register={register} errors={errors} dirtyFields={dirtyFields} category='dslr' />
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
