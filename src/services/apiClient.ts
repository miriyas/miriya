import axios, { AxiosError } from 'axios';

// 서버 주소 입력
export const baseURL = '/api';

const apiClient = axios.create({
  baseURL,
  timeout: 3000,
});

export default apiClient;

export const isAxiosError = (err: unknown | AxiosError): err is AxiosError => {
  return axios.isAxiosError(err);
};
