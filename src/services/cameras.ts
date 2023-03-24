export const getExternalCameraDataApi = (externalId: string) => fetch(`/api/cameras/${externalId}`);

export const getCameraBlurImageApi = (maker: string, id: string) => fetch(`/api/cameras/blur?maker=${maker}&id=${id}`);
