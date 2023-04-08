import apiClient from '@/services/apiClient';
import { GADataRow } from '@/types/minihome';

export const getGAdataAPI = () => apiClient<GADataRow[]>('https://us-central1-miriyas.cloudfunctions.net/getGAdata');
