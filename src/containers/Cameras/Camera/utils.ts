import { CameraMakerTypes } from '@/types/cameras.d';

export const cameraId = (maker: CameraMakerTypes, name: string) => {
  return `${maker}-${name}`.replace(/ |\/|\*/gi, '').toLowerCase();
};
