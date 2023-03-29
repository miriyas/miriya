import cx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  activeClassName: string;
  className?: string;
}

const NavLink = ({ href, children, className, activeClassName }: Props) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={cx(className, { [activeClassName]: pathname === href })}>
      {children}
    </Link>
  );
};

export default NavLink;
