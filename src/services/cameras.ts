import apiClient from '@/services/apiClient';
import { DigicamDB, DpreviewNews } from '@/types/cameras.d';

export const getExternalCameraDataApi = (externalId: string) => apiClient<DigicamDB>(`/cameras/digicam/${externalId}`);

export const getRecentNewsApi = (count: number) => apiClient<DpreviewNews[]>(`/cameras/dpreview?count=${count}`);
