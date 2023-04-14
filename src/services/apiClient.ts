import axios, { AxiosError } from 'axios';

// 서버 주소 입력
export const baseURL = `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api`;

const apiClient = axios.create({
  baseURL,
  timeout: 3000,
});

export default apiClient;

export const isAxiosError = (err: unknown | AxiosError): err is AxiosError => {
  return axios.isAxiosError(err);
};
