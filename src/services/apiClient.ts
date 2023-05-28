import axios, { AxiosError } from 'axios';

interface FetchProps {
  tags?: string[];
  revalidate?: number;
}

export const fetchClient = (url: string, options?: FetchProps) =>
  fetch(`${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api${url}`, {
    next: { revalidate: options?.revalidate ?? 60 * 60 * 10, tags: options?.tags }, // 1시간 캐시
  });

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api`,
  timeout: 30_000,
  withCredentials: true,
});

export const apiClientLocal = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_LOCAL_FETCH_URL}/api`,
  timeout: 30_000,
  withCredentials: true,
});

export const apiClientRoot = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_LOCAL_FETCH_URL}`,
  timeout: 30_000,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response, // 2xx 범위일 때
  (error) => {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 401:
          if (error.response.config?.url === '/auth/session') {
            return Promise.reject(error);
          }
          window.dispatchEvent(
            new CustomEvent('axiosError', {
              detail: {
                message: 'Unauthorized',
              },
            }),
          );
          return Promise.reject(error);
        case 403:
          window.dispatchEvent(
            new CustomEvent('axiosError', {
              detail: {
                message: 'Forbidden',
              },
            }),
          );
          return new Promise(() => {});

        default:
          return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;

export const isAxiosError = (err: unknown | AxiosError): err is AxiosError => {
  return axios.isAxiosError(err);
};

/** DPreview는 axios만 막는다. */
export const fakeUserAgent =
  'Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1';

export const revalidateApi = (path: string) => apiClientLocal(`/revalidate?path=${path}`);

export const batchUpdateApi = () => apiClient<Comment[]>('/test');
