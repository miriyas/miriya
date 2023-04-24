import apiClient, { apiClientLocal } from '@/services/apiClient';
import { DigicamDB, DpreviewNews, FBCameraType } from '@/types/cameras.d';
import { FBCamerachema } from '@/utils/validator';

export const getExternalCameraDataApi = (externalId: string) =>
  apiClientLocal<DigicamDB>(`/cameras/digicam/${externalId}`);

export const getRecentNewsApi = (count: number) => apiClientLocal<DpreviewNews[]>(`/cameras/dpreview?count=${count}`);

export const getCamerasDataApi = () => apiClient<FBCameraType[]>('/cameras/data');

export const editCameraDataApi = (newCamera: FBCamerachema, changed: string[]) =>
  apiClient.patch('/cameras/data', { newCamera, changed });
