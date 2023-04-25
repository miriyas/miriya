import cx from 'clsx';

import useNew from './useNew';

import Form from './NewForm';
import styles from '../index.module.scss';

interface Props {
  year: number;
}

const New = ({ year }: Props) => {
  const { errors, dirtyFields, isDirty, register, submitIdol, isLoading } = useNew();

  const onClickCancel = () => {};

  return (
    <li className={cx(styles.idolCard, styles.opened, `grid-item-${year}`)}>
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
