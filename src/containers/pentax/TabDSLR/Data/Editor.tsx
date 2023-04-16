'use client';

import cx from 'clsx';

import { FBPentaxDslr } from '@/types/pentaxes.d';
import useEditor from './useEditor';

import {
  yearStartField,
  yearEndField,
  fields1,
  fields2,
  fields3,
  fields4,
  fields5,
  fields6,
  fields7,
  mountField,
  dimensionField,
} from './fields';
import LabelWithInfo from '@/components/EditorInputs/LabelWithInfo';
import EditorInputs from '@/components/EditorInputs';
import inputStyles from '@/components/EditorInputs/index.module.scss';
import styles from '../../_common/CommonEditor.module.scss';

interface Props {
  camera: FBPentaxDslr;
}

const Editor = ({ camera }: Props) => {
  const { errors, dirtyFields, isDirty, register, onSubmit, onClickCancel } = useEditor(camera);
  return (
    <form className={cx(styles.editor, styles.dslr)} onSubmit={onSubmit}>
      <div className={styles.column}>
        <label className={inputStyles.inputWrapper}>
          <LabelWithInfo {...yearStartField} />
          <input
            {...register('startYear')}
            type='number'
            className={cx(inputStyles.mini, {
              [inputStyles.error]: errors.startYear,
              [inputStyles.changed]: dirtyFields.startYear,
            })}
          />
          <p className={inputStyles.deco}>년</p>
          <input
            {...register('startQuarter')}
            type='number'
            className={cx(inputStyles.tiny, {
              [inputStyles.error]: errors.endYear,
              [inputStyles.changed]: dirtyFields.endYear,
            })}
          />
          <p className={inputStyles.deco}>분기</p>
        </label>
        <label className={inputStyles.inputWrapper}>
          <LabelWithInfo {...yearEndField} />
          <input
            {...register('endYear')}
            type='number'
            className={cx(inputStyles.mini, {
              [inputStyles.error]: errors.startYear,
              [inputStyles.changed]: dirtyFields.startYear,
            })}
          />
          <p className={inputStyles.deco}>년</p>
          <input
            {...register('endQuarter')}
            type='number'
            className={cx(inputStyles.tiny, {
              [inputStyles.error]: errors.endYear,
              [inputStyles.changed]: dirtyFields.endYear,
            })}
          />
          <p className={inputStyles.deco}>분기</p>
        </label>
        <label
          className={cx(inputStyles.inputWrapper, {
            [inputStyles.error]: errors.data?.mount,
            [inputStyles.changed]: dirtyFields.data?.mount,
          })}
        >
          <LabelWithInfo {...mountField} />
          <input type='text' {...register('data.mount')} />
        </label>
        <label className={inputStyles.inputWrapper}>
          <LabelWithInfo {...dimensionField} />
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
