import { AnchorHTMLAttributes, ReactNode } from 'react';
import cx from 'clsx';

import styles from './index.module.scss';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: ReactNode;
}

/** 외부 링크: rel nofollow + noreferrer (target=_blank로 연 페이지가 이 창을 조작하지 못하게) */
const ExternalLink = ({ href, children, className, ...restProps }: Props) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='nofollow noreferrer'
      className={cx(styles.externalLink, className)}
      {...restProps}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
