'use client';

import cx from 'clsx';
import { SelectHTMLAttributes } from 'react';

import styles from './index.module.scss';

interface Props extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'className'> {
  className?: string;
}

const Select = (props: Props) => {
  const { children, className, ...restProps } = props;

  return (
    <div className={cx(styles.selectWrapper, className)}>
      <select {...restProps}>{children}</select>
    </div>
  );
};

export default Select;
