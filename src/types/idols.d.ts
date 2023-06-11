import { TimeStamp } from '@/types';
import { WithAuthor } from '@/types/firebase';

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
  commentsLength: number;
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
