'use client';

import cx from 'clsx';

import useNew from './useNew';

import Form from './NewForm';
import styles from '../index.module.scss';

const New = () => {
  const { errors, dirtyFields, isDirty, register, submitIdol, isLoading, reset } = useNew();

  // The add form is always open, so cancel clears what the user typed.
  const onClickCancel = () => {
    reset();
  };

  return (
    <li className={cx(styles.idolCard, styles.opened)}>
      <Form
        submitIdol={submitIdol}
        onClickCancel={onClickCancel}
        errors={errors}
        dirtyFields={dirtyFields}
        isDirty={isDirty}
        register={register}
        isLoading={isLoading}
      />
    </li>
  );
};

export default New;
