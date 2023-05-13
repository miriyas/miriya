'use client';

import { patchBlogPostAPI } from '@/services/blog';
import { FBBlogCategory, FBBlogPost } from '@/types/blog.d';

import Editor from './Editor';

interface Props {
  categories: FBBlogCategory[];
  postData: FBBlogPost;
}

const BlogEditPage = ({ categories, postData }: Props) => {
  return <Editor categories={categories} postData={postData} onSubmit={patchBlogPostAPI} />;
};

export default BlogEditPage;
