import { apiBe, apiBePure, fetchClient } from '@/services';
import {
  BlogPostCore,
  BlogCategoryCore,
  BlogPostForList,
  BlogCategory,
  BlogPostForShow,
  BlogCategoryForList,
} from '@/types/blog.d';
import { Comment } from '@/types/comments.d';

// 글

export const getBlogPostsAPI = (categoryId?: string, limitCount?: number) =>
  apiBe<BlogPostForList[]>('/blog/posts', { params: { categoryId, limitCount } });

export const fetchBlogPostsAPI = (cookies?: string, categoryId?: string, limitCount?: number) =>
  apiBe<BlogPostForList[]>('/blog/posts', {
    headers: {
      Cookie: cookies,
    },
    params: { categoryId, limitCount },
  });

export const getBlogPostAPI = (postId: string) => apiBe<BlogPostForShow>(`/blog/posts/${postId}`);

export const fetchBlogPostAPI = (postId: string) => apiBePure<BlogPostForShow>(`/blog/posts/${postId}`);

export const postBlogPostAPI = (data: Partial<BlogPostCore>) => apiBe.post('/blog/posts', data);

export const patchBlogPostAPI = (body: Partial<BlogPostCore>, postId?: string) =>
  apiBe.patch(`/blog/posts/${postId}`, body);

// 카테고리

export const getBlogCategoriesAPI = () => apiBe<BlogCategoryForList[]>('/blog/categories');

export const fetchBlogCategoriesAPI = () => fetchClient('/blog/categories');

export const postBlogCategoryAPI = (body: BlogCategoryCore) => apiBe.post('/blog/categories', body);

export const changeBlogCategoryOrderAPI = (categoryId: string, direction: 'up' | 'down') =>
  apiBe.patch('/blog/categories', { categoryId, direction });

export const patchBlogCategoryAPI = (categoryId: string, body: Partial<BlogCategory>) =>
  apiBe.patch(`/blog/categories/${categoryId}`, body);

export const deleteBlogCategoryAPI = (categoryId: string) => apiBe.delete(`/blog/categories/${categoryId}`);

// 댓글

export const getBlogCommentsAPI = () => apiBe<Comment[]>('/blog/comments');
