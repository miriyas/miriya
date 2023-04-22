import { User } from 'firebase/auth';

import apiClient, { apiClientLocal } from '@/services/apiClient';
import { FBIdolType, YearDescType } from '@/types/idols.d';

export const crawlIdolData = () => apiClientLocal('/idols/crawl');

export const getIdolsDataApi = () => apiClient<FBIdolType[]>('/idols/data');

export const getIdolYearsDataApi = () => apiClient<YearDescType[]>('/idols/years');

export const editIdolDataApi = (newIdol: FBIdolType, changed: string[], user: User) =>
  apiClient.patch('/idols/data', { newIdol, changed, user });
