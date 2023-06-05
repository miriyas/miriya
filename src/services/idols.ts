import { apiBe, apiFe } from '@/services';
import { FBIdolType, IdolType, YearDescType } from '@/types/idols.d';

export const crawlIdolData = () => apiFe('/idols/crawl');

export const getIdolsDataApi = () => apiBe<FBIdolType[]>('/idols/data');

export const getIdolYearsDataApi = () => apiBe<YearDescType[]>('/idols/years');

export const postIdolDataApi = (newIdol: IdolType) => apiBe.post('/idols/data', { newIdol });

export const editIdolDataApi = (newIdol: FBIdolType, changed: string[]) =>
  apiBe.patch('/idols/data', { newIdol, changed });
