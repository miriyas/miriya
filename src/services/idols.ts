import apiClient, { apiClientLocal } from '@/services/apiClient';
import { FBIdolType, IdolType, YearDescType } from '@/types/idols.d';

export const crawlIdolData = () => apiClientLocal('/idols/crawl');

export const getIdolsDataApi = () => apiClient<FBIdolType[]>('/idols/data');

export const getIdolYearsDataApi = () => apiClient<YearDescType[]>('/idols/years');

export const postIdolDataApi = (newIdol: IdolType) => apiClient.post('/idols/data', { newIdol });

export const editIdolDataApi = (newIdol: FBIdolType, changed: string[]) =>
  apiClient.patch('/idols/data', { newIdol, changed });
