'use client';

import cx from 'clsx';

import useAlert from '@/hooks/useAlert';

import { IconInfo } from 'public/svgs';
import styles from './index.module.scss';

interface Props {
  label: string;
  desc: string;
  example?: string;
}

const LabelWithInfo = ({ label, desc, example }: Props) => {
  const { addAlert } = useAlert();

  const onClick = () => {
    addAlert({
      title: label,
      message: (
        <div className={styles.info}>
          {desc}
          {example && <pre>{example}</pre>}
        </div>
      ),
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
