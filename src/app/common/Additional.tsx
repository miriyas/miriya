'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import '@/utils/ga';
import { useGA } from '@/hooks/useGA';

const Additional = () => {
  const { gaPV } = useGA();
  const pathname = usePathname();
  const query = useSearchParams(); // 상위에 반드시 Suspense로 묶지 않으면 위로 타고 올라가며 Next SSR 전부 깨짐.

  useEffect(() => {
    gaPV(`${pathname}${query}`);
  }, [gaPV, pathname, query]);

  return null;
};

export default Additional;
