'use client';

// Next 16: `ssr: false` is allowed only in a Client Component, so the dynamic import lives here.
import dynamic from 'next/dynamic';

const BlogCategoryManage = dynamic(() => import('@/containers/blog/Categories'), { ssr: false });

export default BlogCategoryManage;
