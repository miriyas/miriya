import apiClient from '@/services/apiClient';
import { DigicamDB, DpreviewNews, FBCameraType } from '@/types/cameras.d';

export const getCamerasDataApi = () => apiClient<FBCameraType[]>('/cameras/data');

export const getExternalCameraDataApi = (externalId: string) => apiClient<DigicamDB>(`/cameras/digicam/${externalId}`);

export const getRecentNewsApi = (count: number) => apiClient<DpreviewNews[]>(`/cameras/dpreview?count=${count}`);
