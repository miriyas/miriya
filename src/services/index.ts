import axios, { AxiosError } from 'axios';

interface FetchProps {
  tags?: string[];
  revalidate?: number;
}

export const fetchClient = (url: string, options?: FetchProps) =>
  fetch(`${process.env.NEXT_PUBLIC_BE_URL}/api${url}`, {
    next: { revalidate: options?.revalidate ?? 60 * 60 * 10, tags: options?.tags }, // 1시간 캐시
  });

/**
 * 브라우저 → 백엔드 서버, 혹은 프론트엔드 서버 → 백엔드 서버
 * 프론트엔드 서버에서 사용할 때는 쿠키가 포함될 수 있다.
 */
export const apiBe = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BE_URL}/api`,
  timeout: 30_000,
  withCredentials: true,
});

/**
 * 프론트엔드 서버 → 백엔드 서버로 사용할 수 있다.
 * 프론트엔드 서버에서만 사용할 것이며, metadata나 static 관련된 작업용으로만 쓴다.
 */
export const apiBePure = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BE_URL}/api`,
  timeout: 30_000,
  withCredentials: true,
});

/**
 * 브라우저 → 프론트엔드 서버, 혹은 프론트엔드 서버 → 프론트엔드 서버로 사용할 수 있다.
 * revalidate나 digicam 등 /api 가 붙은 프론트엔드 서버의 API를 브라우저에서 호출하는 용도다.
 */
export const apiFe = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_FE_URL}/api`,
  timeout: 30_000,
  withCredentials: true,
});

apiBe.interceptors.response.use(
  (response) => response, // 2xx 범위일 때
  (error) => {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 401:
          if (error.response.config?.url === '/auth/session') {
            return Promise.reject(error);
          }
          if (error.response.data.message === 'BAD REQUEST') {
            window.dispatchEvent(
              new CustomEvent('axiosError', {
                detail: {
                  message: 'Bad Request',
                },
              }),
            );
          } else {
            window.dispatchEvent(
              new CustomEvent('axiosError', {
                detail: {
                  message: 'Unauthorized',
                },
              }),
            );
          }
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

export const isAxiosError = (err: unknown | AxiosError): err is AxiosError => {
  return axios.isAxiosError(err);
};

/** DPreview는 axios만 막는다. */
export const fakeUserAgent =
  'Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1';

export const revalidatePathApi = (path: string) => apiFe(`/revalidate/path?path=${path}`);

export const revalidateTagApi = (tag: string) => apiFe(`/revalidate/tag?tag=${tag}`);

export const batchUpdateApi = () => apiBe<Comment[]>('/test');
