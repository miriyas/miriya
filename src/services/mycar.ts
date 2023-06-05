import { apiBe, apiBePure } from '@/services';
import { FBItemFix, FBItemLink, FBItemParts, FBMyCar, NewItemFix, NewItemLink, NewItemParts } from '@/types/mycar.d';

export const getMyCarDataAPI = () => apiBe<FBMyCar[]>('/mycar');

export const fetchMyCarDataAPI = () => apiBePure<FBMyCar[]>('/mycar');

export const postCarDataAPI = (body: FormData) => apiBe.postForm('/mycar', body);

export const patchCarDataAPI = (carId: string, body: FormData) => apiBe.patch(`/mycar/${carId}`, body);

// 정비 내역

export const getCarFixDataAPI = (carId: string) => apiBe<FBItemFix[]>(`/mycar/${carId}/fix`);

export const postCarFixDataAPI = (carId: string, params: NewItemFix) => apiBe.post(`/mycar/${carId}/fix`, params);

export const patchCarFixDataAPI = (carId: string, fixId: string, params: NewItemFix) =>
  apiBe.patch(`/mycar/${carId}/fix/${fixId}`, params);

export const deleteCarFixDataAPI = (carId: string, fixId: string) => apiBe.delete(`/mycar/${carId}/fix/${fixId}`);

// 부품 목록

export const getCarPartsDataAPI = (carId: string) => apiBe<FBItemParts[]>(`/mycar/${carId}/parts`);

export const postCarPartsDataAPI = (carId: string, params: NewItemParts) => apiBe.post(`/mycar/${carId}/parts`, params);

export const patchCarPartsDataAPI = (carId: string, partsId: string, params: NewItemParts) =>
  apiBe.patch(`/mycar/${carId}/parts/${partsId}`, params);

export const deleteCarPartsDataAPI = (carId: string, partsId: string) =>
  apiBe.delete(`/mycar/${carId}/parts/${partsId}`);

// 링크 목록

export const getCarLinksDataAPI = (carId: string) => apiBe<FBItemLink[]>(`/mycar/${carId}/links`);

export const postCarLinkDataAPI = (carId: string, params: NewItemLink) => apiBe.post(`/mycar/${carId}/links`, params);

export const patchCarLinkDataAPI = (carId: string, linksId: string, params: NewItemLink) =>
  apiBe.patch(`/mycar/${carId}/links/${linksId}`, params);

export const deleteCarLinkDataAPI = (carId: string, linksId: string) =>
  apiBe.delete(`/mycar/${carId}/links/${linksId}`);
