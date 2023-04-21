import { User } from 'firebase/auth';

import apiClient from '@/services/apiClient';
import { DigicamDB, DpreviewNews, FBCameraType } from '@/types/cameras.d';
import { FBCamerachema } from '@/utils/validator';

export const getExternalCameraDataApi = (externalId: string) => apiClient<DigicamDB>(`/cameras/digicam/${externalId}`);

export const getRecentNewsApi = (count: number) => apiClient<DpreviewNews[]>(`/cameras/dpreview?count=${count}`);

export const getCamerasDataApi = () => apiClient<FBCameraType[]>('/cameras/data');

export const editCameraDataApi = (newCamera: FBCamerachema, changed: string[], user: User) =>
  apiClient.patch('/cameras/data', { newCamera, changed, user });
