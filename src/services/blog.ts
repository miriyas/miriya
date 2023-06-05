import { apiBe, apiBePure, fetchClient } from '@/services';
import { BlogPost, BlogCategory, FBBlogPost, FBBlogCategory } from '@/types/blog.d';
import { Comment } from '@/types/comments.d';

// 글

export const getBlogPostsAPI = (categoryId?: string, limitCount?: number) =>
  apiBe<FBBlogPost[]>('/blog/posts', { params: { categoryId, limitCount } });

export const getBlogPostAPI = (postId: string) => apiBe<FBBlogPost>(`/blog/posts/${postId}`);

export const fetchBlogPostAPI = (postId: string) => apiBePure<FBBlogPost>(`/blog/posts/${postId}`);

export const postBlogPostAPI = (data: Partial<BlogPost>) => apiBe.post('/blog/posts', data);

export const patchBlogPostAPI = (body: Partial<BlogPost>, postId?: string) =>
  apiBe.patch(`/blog/posts/${postId}`, body);

// 카테고리

export const getBlogCategoriesAPI = () => apiBe<FBBlogCategory[]>('/blog/categories');

export const fetchBlogCategoriesAPI = () => fetchClient('/blog/categories');

export const postBlogCategoryAPI = (body: BlogCategory) => apiBe.post('/blog/categories', body);

export const changeBlogCategoryOrderAPI = (categoryId: string, direction: 'up' | 'down') =>
  apiBe.patch('/blog/categories', { categoryId, direction });

export const patchBlogCategoryAPI = (categoryId: string, body: Partial<FBBlogCategory>) =>
  apiBe.patch(`/blog/categories/${categoryId}`, body);

export const deleteBlogCategoryAPI = (categoryId: string) => apiBe.delete(`/blog/categories/${categoryId}`);

// 댓글

export const getBlogCommentsAPI = (limitCount: number) =>
  apiBe<Comment[]>('/blog/comments', { params: { limitCount } });
