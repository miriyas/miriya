import { apiBe, apiFe } from '@/services';
import { Idol, IdolCore, YearDesc } from '@/types/idols.d';

export const crawlIdolData = () => apiFe('/idols/crawl');

export const getIdolsDataApi = () => apiBe<Idol[]>('/idols/data');

export const getIdolYearsDataApi = () => apiBe<YearDesc[]>('/idols/years');

export const postIdolDataApi = (newIdol: IdolCore) => apiBe.post('/idols/data', { newIdol });

export const editIdolDataApi = (newIdol: Idol, changed: string[]) => apiBe.patch('/idols/data', { newIdol, changed });
