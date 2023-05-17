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
  exact?: boolean;
}

const NavLink = ({ href, hrefs, children, className, activeClassName, onClick, exact }: Props) => {
  const pathname = usePathname();
  const pureHref = href.split('?')[0];
  const isActive = hrefs?.includes(pathname) || exact ? pathname === pureHref : pathname.includes(pureHref);

  return (
    <Link href={href} className={cx(className, { [activeClassName]: isActive })} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
