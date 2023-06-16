import { apiBe, apiFe } from '@/services';
import { Idol, IdolCore, YearDesc } from '@/types/idols.d';

export const crawlIdolData = () => apiFe('/idols/crawl');

export const getIdolsDataApi = () => apiBe<Idol[]>('/idols');

export const getIdolYearsDataApi = () => apiBe<YearDesc[]>('/idols/years');

export const postIdolDataApi = (newIdol: IdolCore) => apiBe.post('/idols', { newIdol });

export const editIdolDataApi = (idolId: string, newIdol: Partial<Idol>, changed: string[]) =>
  apiBe.patch(`/idols/${idolId}`, { newIdol, changed });
