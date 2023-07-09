import cx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  hrefs?: string[] | undefined; // /cameras/home, /cameras 처럼 첫번째일 때 사용
  activeClassName: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  exact?: boolean;
}

const NavLink = ({ href, hrefs, children, className, activeClassName, onClick, exact }: Props) => {
  const pathname = usePathname();
  const parentHref = href.split('?')[0];
  let isActive = false;
  if (hrefs) {
    isActive = hrefs.includes(pathname);
  } else {
    isActive = exact ? pathname === parentHref : pathname.includes(parentHref);
  }

  return (
    <Link href={href} className={cx(className, { [activeClassName]: isActive })} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
