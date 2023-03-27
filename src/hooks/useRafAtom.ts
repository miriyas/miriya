/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useAtom, PrimitiveAtom } from 'jotai';
import { SetStateAction, useCallback, useRef } from 'react';
import { useUnmount } from 'react-use';

type SetAtom<Args extends unknown[], Result> = (...args: Args) => Result;

type WithInitialValue<Value> = {
  init: Value;
};

const useRafAtom = <S>(
  initialState: PrimitiveAtom<S> & WithInitialValue<S>,
): [S, SetAtom<[SetStateAction<S>], void>] => {
  const frame = useRef(0);
  const [state, setState] = useAtom(initialState);

  const setRafState = useCallback((value: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  useUnmount(() => {
    cancelAnimationFrame(frame.current);
  });

  return [state, setRafState];
};

export default useRafAtom;
