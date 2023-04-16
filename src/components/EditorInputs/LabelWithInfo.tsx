'use client';

import cx from 'clsx';

import useAlert from '@/hooks/useAlert';

import { IconInfo } from 'public/svgs';
import styles from './index.module.scss';

interface Props {
  label: string;
  desc: string;
}

const LabelWithInfo = ({ label, desc }: Props) => {
  const { addAlert } = useAlert();

  const onClick = () => {
    addAlert({
      title: label,
      message: desc,
    });
  };

  return (
    <button type='button' onClick={onClick} className={cx(styles.fieldName, styles.withInfo)}>
      {label}
      <IconInfo />
    </button>
  );
};

export default LabelWithInfo;
