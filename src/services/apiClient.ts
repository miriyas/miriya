import axios, { AxiosError } from 'axios';

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api`,
  timeout: 30_000,
});

export const apiClientLocal = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_LOCAL_FETCH_URL}/api`,
  timeout: 30_000,
});

export default apiClient;

export const isAxiosError = (err: unknown | AxiosError): err is AxiosError => {
  return axios.isAxiosError(err);
};

/** DPreview는 axios만 막는다. */
export const fakeUserAgent =
  'Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1';
