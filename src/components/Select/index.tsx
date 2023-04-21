'use client';

import cx from 'clsx';
import { forwardRef, SelectHTMLAttributes } from 'react';

import styles from './index.module.scss';

interface Props extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'className' | 'ref'> {
  className?: string;
}

const Select = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <div className={cx(styles.selectWrapper, className)}>
      <select {...restProps} ref={ref}>
        {children}
      </select>
    </div>
  );
});

export default Select;
