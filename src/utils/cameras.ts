import { CameraMakerTypes } from '@/types/cameras';

export const cameraId = (maker: CameraMakerTypes, name: string) => {
  return `${maker}-${name}`.replace(/ |\/|\*/gi, '').toLowerCase();
};
