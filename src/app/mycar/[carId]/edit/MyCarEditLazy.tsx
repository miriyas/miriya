'use client';

// Next 16: `ssr: false` is allowed only in a Client Component, so the dynamic import lives here.
import dynamic from 'next/dynamic';

const MyCarEdit = dynamic(() => import('@/containers/mycar/Form/Edit'), { ssr: false });

export default MyCarEdit;
