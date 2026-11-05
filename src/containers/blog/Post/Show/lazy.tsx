'use client';

// Next 16: `ssr: false` is allowed only in a Client Component, so the dynamic import lives here.
import dynamic from 'next/dynamic';

export const LikeButton = dynamic(() => import('./LikeButton'), { ssr: false });
export const CategoryRelated = dynamic(() => import('./CategoryRelated'), { ssr: false });
