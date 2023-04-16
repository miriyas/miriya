/* eslint-disable no-cond-assign */

'use client';

import { FieldErrors, UseFormRegister } from 'react-hook-form';
import cx from 'clsx';

import { InputFields } from '@/types/index.d';

import LabelWithInfo from './LabelWithInfo';
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
  subtitle?: string;
  fields: InputFields;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  dirtyFields: Partial<Readonly<any>>;
  category: string;
}

const EditorInputs = ({ subtitle, fields, register, errors, dirtyFields, category }: Props) => {
  return (
    <>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {Object.keys(fields).map((fieldsKey) => {
        const field = fields[fieldsKey];

        if (typeof field === 'string') {
          return (
            <label
              key={fieldsKey}
              className={cx(styles.inputWrapper, styles[category], {
                [styles.error]: getBooleanFromObjectViaKeys(errors, fieldsKey),
                [styles.changed]: getBooleanFromObjectViaKeys(dirtyFields, fieldsKey),
              })}
            >
              <p className={styles.fieldName}>{field}</p>
              <input type='text' {...register(fieldsKey)} />
            </label>
          );
        }

        let step;
        if (field.type === 'number') {
          step = field.step ?? '0.1';
        }

        return (
          <label
            key={fieldsKey}
            className={cx(styles.inputWrapper, styles[category], {
              [styles.error]: getBooleanFromObjectViaKeys(errors, fieldsKey),
              [styles.changed]: getBooleanFromObjectViaKeys(dirtyFields, fieldsKey),
            })}
          >
            {field.desc ? (
              <LabelWithInfo label={field.label} desc={field.desc} example={field.example} />
            ) : (
              <p className={styles.fieldName}>{field.label}</p>
            )}
            <input type={field.type ?? 'text'} step={step} {...register(fieldsKey)} />
          </label>
        );
      })}
    </>
  );
};

export default EditorInputs;
