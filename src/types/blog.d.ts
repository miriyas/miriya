import { TimeStamp, WithAuthor } from '@/types';

// 글

export interface BlogPostCore {
  title: string;
  body: string;
  preview: string;
  categoryId: string;
  hero?: string;
  hidden?: boolean;
}

export interface BlogPost extends BlogPostCore, WithAuthor, TimeStamp {
  id: string;
}

// 카테고리

export interface BlogCategoryCore {
  name: string;
}

export interface BlogCategory extends BlogCategoryCore {
  id: string;
  order: number;
}

export interface BlogCategoryForList extends BlogCategory, TimeStamp {
  _count: {
    BlogPost: number;
  };
}

export interface BlogPostForList {
  id: string;
  title: string;
  preview: string;
  createdAt: Date;
  hero: string;
  hidden: boolean;
  category: {
    name: string;
  };
}

// 글 목록
export interface BlogCategoryWithPosts extends BlogCategory {
  BlogPost: BlogPostForList[];
}

// 글 보기
export interface BlogPostForShow extends BlogPost {
  category: BlogCategoryWithPosts;
}
