import { TimeStamp, WithAuthor } from '@/types';

export type Category = 'total' | 'mixed-group' | 'girl-group' | 'boy-group' | 'girl-solo' | 'boy-solo';

export const CATEGORIES: Category[] = ['total', 'mixed-group', 'girl-group', 'boy-group', 'girl-solo', 'boy-solo'];

export interface IdolCore {
  name: string;
  category: Category;
  debutYear: string;
  endYear?: string;
  descMelon?: string;
  descNamu?: string;
  descVibe?: string;
  descTitle?: string;
  youtubeStartsAt?: number;
  youtubeUrl?: string;
}

export interface Idol extends IdolCore, WithAuthor, TimeStamp {
  id: string;
  comments: {
    id: string; // 카운트용
  }[];
  likes: {
    id: string; // 카운트용
  }[];
}

export interface YearDesc {
  year: number;
  desc: string;
}

// Crawl =======================================================================

export type CrawlIdol = {
  name: string;
  url: string;
};

export type CrawlGeneration = Record<string, CrawlIdol[]>;

export type CrawlIdolData = Record<string, CrawlGeneration>;
