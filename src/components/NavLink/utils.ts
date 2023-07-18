interface Props {
  href: string;
  pathname: string;
  hrefs?: string[];
  exact?: boolean;
}

/**
 * @param href 링크 경로
 * @param pathname 현재 브라우저 경로
 * @param hrefs 대체 링크 경로, 예를 들어 [/minihome, /minihome/home] 넣어주면 href와 비교한다.
 * @param exact
 * @returns
 */
export const getIsActive = ({ href, pathname, hrefs, exact }: Props) => {
  const parentHref = href.split('?')[0];
  let isActive = false;
  if (hrefs) {
    isActive = hrefs.includes(pathname);
  } else {
    isActive = exact ? pathname === parentHref : pathname.startsWith(parentHref);
  }
  return isActive;
};
