import { fetch } from 'cross-fetch';
import { useRouter } from 'next-router-mock';

global.fetch = fetch;

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: () => {
    const router = useRouter();
    return router.pathname;
  },
  useSearchParams: () => {
    const router = useRouter();
    const path = router.asPath.split('?')?.[1] ?? '';
    return new URLSearchParams(path);
  },
  notFound: jest.fn(),
}));

jest.mock('unified', () => {
  return {
    unified: () => ({
      use: jest.fn(),
      process: jest.fn(),
      toString: jest.fn(),
    }),
  };
});
jest.mock('remark-parse', jest.fn());
jest.mock('remark-gfm', jest.fn());
jest.mock('remark-rehype', jest.fn());
jest.mock('rehype-raw', jest.fn());
jest.mock('rehype-stringify', jest.fn());
jest.mock('rehype-highlight', jest.fn());
