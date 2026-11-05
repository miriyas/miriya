'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/** Asks the server for new data every `seconds` (the page is rendered on the server). */
const AutoRefresh = ({ seconds }: { seconds: number }) => {
  const router = useRouter();

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (document.visibilityState === 'visible') router.refresh();
    }, seconds * 1000);
    return () => window.clearInterval(timer);
  }, [router, seconds]);

  return null;
};

export default AutoRefresh;
