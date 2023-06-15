import { apiBe, apiFe, fetchClient } from '@/services';
import { Idol, IdolCore, YearDesc } from '@/types/idols.d';

export const crawlIdolData = () => apiFe('/idols/crawl');

export const fetchIdolsDataApi = () => fetchClient('/idols/data', { tags: ['idols', 'comment'] });

export const getIdolYearsDataApi = () => apiBe<YearDesc[]>('/idols/years');

export const postIdolDataApi = (newIdol: IdolCore) => apiBe.post('/idols/data', { newIdol });

export const editIdolDataApi = (idolId: string, newIdol: Partial<Idol>, changed: string[]) =>
  apiBe.patch(`/idols/${idolId}`, { newIdol, changed });
