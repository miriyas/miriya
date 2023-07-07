import { AnchorHTMLAttributes, ReactNode } from 'react';
import cx from 'clsx';

import styles from './index.module.scss';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: ReactNode;
}

/** rel: nofollow 적용한 외부 링크 */
const ExternalLink = ({ href, children, className, ...restProps }: Props) => {
  return (
    <a href={href} target='_blank' rel='nofollow' className={cx(styles.externalLink, className)} {...restProps}>
      {children}
    </a>
  );
};

export default ExternalLink;
