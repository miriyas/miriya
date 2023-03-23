'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import '@/utils/ga';
import { useGA } from '@/hooks/useGA';

const Additional = () => {
  const { gaPV } = useGA();
  const pathname = usePathname();
  const query = useSearchParams();

  useEffect(() => {
    gaPV(`${pathname}${query}`);
  }, [gaPV, pathname, query]);

  return null;
};

export default Additional;
