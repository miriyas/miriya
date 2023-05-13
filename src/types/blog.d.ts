import { WithAuthor, WithTS } from '@/types/firebase';

export interface BlogPost {
  title: string;
  body: string;
  preview: string;
  category: string;
  hidden?: boolean;
}

export interface FBBlogPost extends BlogPost, WithAuthor, WithTS {
  id: string;
}

export interface BlogCategory {
  name: string;
}

export interface FBBlogCategory extends BlogCategory {
  id: string;
  order: number;
  postsLength: number;
}
