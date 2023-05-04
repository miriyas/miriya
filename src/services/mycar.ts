import apiClient from '@/services/apiClient';
import { FBMyCar, NewMyCar } from '@/types/mycar.d';

export const getMyCarDataAPI = () => apiClient<FBMyCar[]>('/mycar');

export const postCarDataAPI = (params: NewMyCar) => apiClient.post('/mycar', params);
