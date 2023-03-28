'use client';

import { useCallback, useEffect, useRef, MouseEvent } from 'react';
import { useRafState, useUnmount, useWindowSize } from 'react-use';

import { useResponsive } from './useResponsive';

interface TUseDraggable {
  noArrowAbove: number;
  noHorizontal?: boolean;
  noVertical?: boolean;
}

export const useDraggable = (props: TUseDraggable) => {
  const { noArrowAbove, noHorizontal, noVertical } = props;
  const { width } = useWindowSize();
  const { bp } = useResponsive();

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const draggableRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const startX = useRef(0);
  const startY = useRef(0);
  const scrollLeft = useRef(0);
  const scrollTop = useRef(0);

  const [isMouseDown, setIsMouseDown] = useRafState(false);
  const [showArrow, setShowArrow] = useRafState(false);

  const noArrowNeed = noArrowAbove < width;

  const onMouseDown = useCallback(
    (e: MouseEvent): void => {
      setIsMouseDown(true);
      if (!wrapperRef.current) return;

      if (!noHorizontal) {
        startX.current = e.pageX - wrapperRef.current.offsetLeft;
        scrollLeft.current = wrapperRef.current.scrollLeft;
      }

      if (!noVertical) {
        startY.current = e.pageY - wrapperRef.current.offsetTop;
        scrollTop.current = wrapperRef.current.scrollTop;
      }
    },
    [noHorizontal, noVertical, setIsMouseDown],
  );

  const handleMouseChange = (): void => setIsMouseDown(false);

  const updateShowArrow = useCallback(() => {
    // 사이즈가 재조정되는 동안 딜레이를 준다
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!wrapperRef.current || !draggableRef.current) return;
      const dragableRect = draggableRef.current.getBoundingClientRect();
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      if (noArrowNeed) {
        setShowArrow(false);
      } else {
        setShowArrow(dragableRect.width > wrapperRect.width);
      }
    }, 100);
  }, [noArrowNeed, setShowArrow]);

  useEffect(() => {
    updateShowArrow();
    window.addEventListener('resize', () => updateShowArrow());
    return () => {
      window.removeEventListener('resize', () => updateShowArrow());
    };
  }, [bp, draggableRef, updateShowArrow]);

  useEffect(() => {
    setShowArrow(!noArrowNeed);
  }, [noArrowNeed, setShowArrow]);

  useUnmount(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  });

  const onMouseMove = useCallback(
    (e: MouseEvent): void => {
      // NOTE: onDrag 이벤트를 쓰고 싶으나, draggable='true'를 줘야 이벤트 발생.
      // draggable='true'면 드래그되는 시각적 효과가 뜨기 때문에 쓰질 못함..
      e.preventDefault();
      if (!isMouseDown) return;
      if (document.activeElement?.tagName === 'INPUT') return;
      if (!wrapperRef || !wrapperRef.current) return;

      const x = e.pageX - wrapperRef.current.offsetLeft;
      const y = e.pageY - wrapperRef.current.offsetTop;
      const walkX = (x - startX.current) * 2;
      const walkY = (y - startY.current) * 2;
      wrapperRef.current.scrollLeft = scrollLeft.current - walkX;
      wrapperRef.current.scrollTop = scrollTop.current - walkY;
      updateShowArrow();
      // 세로 스크롤은 고려되어있지 않음
    },
    [isMouseDown, updateShowArrow],
  );

  return {
    wrapperRef,
    draggableRef,
    handlers: {
      onMouseDown,
      onMouseLeave: handleMouseChange,
      onMouseUp: handleMouseChange,
      onMouseMove,
    },
    isMouseDown,
    showArrow,
  };
};
