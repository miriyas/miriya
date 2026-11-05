'use client';

// Next 16: `ssr: false` is allowed only in a Client Component, so the dynamic import lives here.
import dynamic from 'next/dynamic';

const Warning = dynamic(() => import('./Warning'), { ssr: false });

export default Warning;
