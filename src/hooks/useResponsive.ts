import { useMemo } from 'react';
import { useWindowSize } from 'react-use';

const getResponsive = (width: number) => {
  let isMobile = false;
  let isDesktop = false;
  let bp;
  if (width >= 2400) {
    bp = 'QHD';
    isDesktop = true;
  } else if (width >= 1800) {
    bp = 'SHD';
    isDesktop = true;
  } else if (width >= 1300) {
    bp = 'HD';
    isDesktop = true;
  } else if (width >= 1200) {
    bp = 'LD';
    isDesktop = true;
  } else if (width >= 1000) {
    bp = 'MD';
    isDesktop = true;
  } else if (width >= 768) {
    bp = 'SD';
    isDesktop = true;
  } else if (width >= 600) {
    bp = 'T';
    isMobile = true;
  } else if (width >= 360) {
    bp = 'ML';
    isMobile = true;
  } else {
    bp = 'M';
    isMobile = true;
  }

  const isMobileDevice =
    typeof navigator !== 'undefined' ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) : false;

  return {
    bp,
    isMobile,
    isDesktop,
    isMobileDevice,
  };
};

export function useResponsive() {
  const { width } = useWindowSize();

  const { bp, isMobile, isDesktop, isMobileDevice } = useMemo(() => {
    return getResponsive(width);
  }, [width]);

  return {
    bp,
    width,
    isMobile,
    isDesktop,
    isMobileDevice,
  };
}
