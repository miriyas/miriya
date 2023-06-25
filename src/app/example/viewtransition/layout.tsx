import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const Warning = dynamic(() => import('./Warning'), { ssr: false });

interface Props {
  children: ReactNode;
}

const Layout = async ({ children }: Props) => {
  return (
    <>
      <Warning />
      {children}
    </>
  );
};

export default Layout;
