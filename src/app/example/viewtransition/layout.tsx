import { ReactNode } from 'react';

import Warning from './WarningLazy';

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
