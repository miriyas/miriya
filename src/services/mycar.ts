import apiClient from '@/services/apiClient';
import { FBItemFix, FBItemParts, FBMyCar, NewItemFix, NewItemParts } from '@/types/mycar.d';

export const getMyCarDataAPI = () => apiClient<FBMyCar[]>('/mycar');

export const postCarDataAPI = (body: FormData) => apiClient.postForm('/mycar', body);

export const patchCarDataAPI = (carId: string, body: FormData) => apiClient.patch(`/mycar/${carId}`, body);

// 정비 내역

export const getCarFixDataAPI = (carId: string) => apiClient<FBItemFix[]>(`/mycar/${carId}/fix`);

export const postCarFixDataAPI = (carId: string, params: NewItemFix) => apiClient.post(`/mycar/${carId}/fix`, params);

export const patchCarFixDataAPI = (carId: string, fixId: string, params: NewItemFix) =>
  apiClient.patch(`/mycar/${carId}/fix/${fixId}`, params);

export const deleteCarFixDataAPI = (carId: string, fixId: string) => apiClient.delete(`/mycar/${carId}/fix/${fixId}`);

// 부품 목록

export const getCarPartsDataAPI = (carId: string) => apiClient<FBItemParts[]>(`/mycar/${carId}/parts`);

export const postCarPartsDataAPI = (carId: string, params: NewItemParts) =>
  apiClient.post(`/mycar/${carId}/parts`, params);

export const patchCarPartsDataAPI = (carId: string, partsId: string, params: NewItemParts) =>
  apiClient.patch(`/mycar/${carId}/parts/${partsId}`, params);

export const deleteCarPartsDataAPI = (carId: string, partsId: string) =>
  apiClient.delete(`/mycar/${carId}/parts/${partsId}`);
