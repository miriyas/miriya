'use client';

import styles from './ViewCode.module.scss';
import ExternalLink from '@/components/ExternalLink';

interface Props {
  href: string;
  label?: string;
}

const ViewCode = ({ href, label }: Props) => {
  return (
    <ExternalLink href={href} className={styles.viewCode}>
      {label ?? '코드 보기'}
    </ExternalLink>
  );
};

export default ViewCode;
