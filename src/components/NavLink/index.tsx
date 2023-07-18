import cx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MouseEventHandler, ReactNode } from 'react';

import { getIsActive } from '@/components/NavLink/utils';

interface Props {
  children: ReactNode;
  href: string;
  hrefs?: string[]; // /cameras/home, /cameras 처럼 첫번째일 때 사용
  activeClassName: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  exact?: boolean;
}

const NavLink = ({ href, hrefs, children, className, activeClassName, onClick, exact }: Props) => {
  const pathname = usePathname();
  const isActive = getIsActive({ href, pathname, hrefs, exact });

  return (
    <Link href={href} className={cx(className, { [activeClassName]: isActive })} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
