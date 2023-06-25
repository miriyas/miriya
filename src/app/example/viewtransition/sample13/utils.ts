import { LOREM_IPSUM } from '@/app/example/viewtransition/constants';

export const getRandimString = (min: number, max: number) => {
  const length = Math.floor(Math.random() * (max - min + 1)) + min;
  return LOREM_IPSUM.slice(0, length);
};
