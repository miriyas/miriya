import { ValueOf, WithAuthor } from '@/types';

export const LIKE_TARGET_CATEGORY = {
  IDOLS: 'IDOLS',
  BLOG_POST: 'BLOG_POST',
} as const;

export type LikeTargetCategoryTypes = ValueOf<typeof LIKE_TARGET_CATEGORY>;

export const LIKE_TARGET_ID_MAP: Record<LikeTargetCategoryTypes, string> = {
  IDOLS: 'idolId',
  BLOG_POST: 'blogPostId',
};

export const availableLikeCategories = Object.keys(LIKE_TARGET_ID_MAP);

export interface NewLike {
  targetCategory: LikeTargetCategoryTypes;
  targetId: string;
}

export interface Like extends WithAuthor {
  id: string;
  createdAt: Date;
  category: LikeTargetCategoryTypes;
  idolId: string | null;
  idol?: {
    name: string;
  };
  blogPostId: string | null;
  blogPost?: {
    title: string;
  };
}
