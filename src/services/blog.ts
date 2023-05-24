import apiClient from '@/services/apiClient';
import { BlogPost, BlogCategory, FBBlogPost, FBBlogCategory } from '@/types/blog.d';
import { Comment } from '@/types/comments.d';

// 글

export const getBlogPostsAPI = () => apiClient<FBBlogPost[]>('/blog/posts');

export const getBlogPostAPI = (postId: string) => apiClient<FBBlogPost>(`/blog/posts/${postId}`);

export const postBlogPostAPI = (data: Partial<BlogPost>) => apiClient.post('/blog/posts', data);

export const patchBlogPostAPI = (body: Partial<BlogPost>, postId?: string) =>
  apiClient.patch(`/blog/posts/${postId}`, body);

// 카테고리

export const getBlogCategoriesAPI = () => apiClient<FBBlogCategory[]>('/blog/categories');

export const postBlogCategoryAPI = (body: BlogCategory) => apiClient.post('/blog/categories', body);

export const changeBlogCategoryOrderAPI = (categoryId: string, direction: 'up' | 'down') =>
  apiClient.patch('/blog/categories', { categoryId, direction });

export const patchBlogCategoryAPI = (categoryId: string, body: Partial<FBBlogCategory>) =>
  apiClient.patch(`/blog/categories/${categoryId}`, body);

export const deleteBlogCategoryAPI = (categoryId: string) => apiClient.delete(`/blog/categories/${categoryId}`);

// 댓글

export const getBlogCommentsAPI = (limitCount: number) =>
  apiClient<Comment[]>(`/blog/comments?limitCount=${limitCount}`);
