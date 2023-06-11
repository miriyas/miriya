import { apiBe, apiFe } from '@/services';
import { DigicamDB, DpreviewNews, CameraType } from '@/types/cameras.d';
import { FBCamerachema } from '@/utils/validator';

export const getExternalCameraDataApi = (externalId: string) => apiFe<DigicamDB>(`/cameras/digicam/${externalId}`);

export const getRecentNewsApi = (count: number) => apiFe<DpreviewNews[]>('/cameras/dpreview', { params: { count } });

export const getCamerasDataApi = () => apiBe<CameraType[]>('/cameras/data');

export const editCameraDataApi = (newCamera: FBCamerachema, changed: string[]) =>
  apiBe.patch('/cameras/data', { newCamera, changed });
