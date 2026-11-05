'use client';

// Next 16: `ssr: false` is allowed only in a Client Component, so the dynamic import lives here.
import dynamic from 'next/dynamic';

import TopPlaceholder from './Top/Placeholder';
import CameraYearPlaceholder from './CameraYears/Placeholder';

export const Top = dynamic(() => import('./Top'), { ssr: false, loading: () => <TopPlaceholder /> });
export const CameraYears = dynamic(() => import('./CameraYears'), {
  ssr: false,
  loading: () => <CameraYearPlaceholder />,
});
