import { useLayoutEffect, useRef } from 'react';

import { ViewTransition } from '@/types/index.d';

interface UsePageTransitionArg<DataType> {
  beforeChange?: (data: DataType, transition: ViewTransition) => void;
  afterChange?: (data: DataType, transition: ViewTransition) => void;
  done?: (data: DataType) => void;
}

interface StartTransitionOptions<DataType> {
  classNames?: string[];
  data?: DataType;
}

export function usePageTransition<DataType = undefined>({
  beforeChange,
  afterChange,
  done,
}: UsePageTransitionArg<DataType> = {}) {
  const startResolverRef = useRef<(value?: unknown) => void>();
  const beforeChangeRef = useRef(beforeChange);
  const afterChangeRef = useRef(afterChange);
  const doneRef = useRef(done);
  const dataRef = useRef<DataType>();
  const transitionRef = useRef<ViewTransition>();

  useLayoutEffect(() => {
    // 브라우저 repaint 전에 useEffect
    if (!startResolverRef.current) return;
    afterChangeRef.current?.(dataRef.current!, transitionRef.current!);
    startResolverRef.current();
    startResolverRef.current = undefined;
  });

  return async ({ classNames = [], data }: StartTransitionOptions<DataType>): Promise<void> => {
    // if (!('startViewTransition' in document) || reducedMotionMedia!.matches) {
    //   return;
    // }

    return new Promise<void>((resolve) => {
      dataRef.current = data;
      document.documentElement.classList.add(...classNames);

      const transition = document.startViewTransition(async () => {
        resolve();
        // Wait for next update
        await new Promise((resolve2) => {
          startResolverRef.current = resolve2;
        });
      });

      transitionRef.current = transition;
      beforeChangeRef.current?.(data!, transition);

      globalThis.ongoingTransition = transition;

      transition.finished
        .finally(() => {
          globalThis.ongoingTransition = undefined;
          document.documentElement.classList.remove(...classNames);
          doneRef.current?.(data!);
        })
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        .catch(() => {});
    });
  };
}
