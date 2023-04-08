import cx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  hrefs?: string[] | undefined;
  activeClassName: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const NavLink = ({ href, hrefs, children, className, activeClassName, onClick }: Props) => {
  const pathname = usePathname();
  const isActive = hrefs?.includes(pathname) || pathname === href;

  return (
    <Link href={href} className={cx(className, { [activeClassName]: isActive })} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
