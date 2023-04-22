'use client';

import cx from 'clsx';

import { FBPentaxSlr } from '@/types/pentaxes.d';
import useSlrEditor from './useSlrEditor';

import { yearsField, mountField, dimensionField, fields1, fields2, fields3, fields4, fields5, fields6 } from './fields';
import EditorInputs from '@/components/EditorInputs';
import LabelWithInfo from '@/components/EditorInputs/LabelWithInfo';
import inputStyles from '@/components/EditorInputs/index.module.scss';
import styles from '../../_common/CommonEditor.module.scss';

interface Props {
  camera: FBPentaxSlr;
}

const Editor = ({ camera }: Props) => {
  const { errors, dirtyFields, isDirty, register, onSubmit, onClickCancel } = useSlrEditor(camera);
  return (
    <form className={cx(styles.editor, styles.slr)} onSubmit={onSubmit}>
      <div className={styles.column}>
        <label className={inputStyles.inputWrapper}>
          <LabelWithInfo {...yearsField} />
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
          <LabelWithInfo {...mountField} />
          <input type='text' {...register('mount')} />
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
        <EditorInputs fields={fields1} register={register} errors={errors} dirtyFields={dirtyFields} category='slr' />
        <div className={styles.blank} />
        <EditorInputs fields={fields2} register={register} errors={errors} dirtyFields={dirtyFields} category='slr' />
      </div>
      <div className={styles.column}>
        <EditorInputs fields={fields3} register={register} errors={errors} dirtyFields={dirtyFields} category='slr' />
        <div className={styles.blank} />
        <EditorInputs fields={fields4} register={register} errors={errors} dirtyFields={dirtyFields} category='slr' />
      </div>
      <div className={styles.column}>
        <EditorInputs fields={fields5} register={register} errors={errors} dirtyFields={dirtyFields} category='slr' />
        <div className={styles.blank} />
        <EditorInputs fields={fields6} register={register} errors={errors} dirtyFields={dirtyFields} category='slr' />
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
