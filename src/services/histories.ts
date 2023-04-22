import apiClient from '@/services/apiClient';
import { NewHistory } from '@/types/histories.d';

export const postHistoryAPI = (params: NewHistory) => apiClient.post('/histories', params);
