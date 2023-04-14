/* eslint-disable no-cond-assign */

'use client';

import { FieldErrors, UseFormRegister } from 'react-hook-form';
import cx from 'clsx';

import { InputFields } from '@/types/index.d';

import styles from './index.module.scss';

const getBooleanFromObjectViaKeys = (obj: Record<string, any>, fieldsKey: string) => {
  if (Object.keys(obj).length === 0) return false;

  const keys = fieldsKey.split('.');
  let newObj = obj;
  let i;
  while ((i = keys.shift()) !== undefined) {
    if (!newObj[i]) return false;
    newObj = newObj[i];
  }
  return true;
};

interface Props {
  fields: InputFields;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  dirtyFields: Partial<Readonly<any>>;
  category: string;
}

const EditorInputs = ({ fields, register, errors, dirtyFields, category }: Props) => {
  return (
    <>
      {Object.keys(fields).map((fieldsKey) => {
        const field = fields[fieldsKey];
        const type = typeof field === 'string' ? 'text' : field.type;
        return (
          <label
            key={fieldsKey}
            className={cx(styles.inputWrapper, styles[category], {
              [styles.error]: getBooleanFromObjectViaKeys(errors, fieldsKey),
              [styles.changed]: getBooleanFromObjectViaKeys(dirtyFields, fieldsKey),
            })}
          >
            <p className={styles.fieldName}>{typeof field === 'string' ? field : field.label}</p>
            <input type={type} step={type === 'number' ? '0.1' : undefined} {...register(fieldsKey)} />
          </label>
        );
      })}
    </>
  );
};

export default EditorInputs;