import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import useAuth from '@/hooks/useAuth';
import { FBCameraType } from '@/types/cameras.d';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { FBCamerachema, cameraValidator } from '@/utils/validator';
import { editCameraDataApi } from '@/services/cameras';
import useCameras from '../../../useCameras';

import useCommentAndHistory from '@/components/CommentAndHistory/useCommentAndHistory';

const useEditor = (camera: FBCameraType) => {
  const { reloadHistories } = useCommentAndHistory({
    targetCategory: TARGET_CATEGORY.CAMERA,
    targetId: camera.id,
  });

  const { user } = useAuth();
  const { reload } = useCameras();

  const methods = useForm<FBCamerachema>({
    mode: 'onBlur',
    resolver: yupResolver(cameraValidator),
    defaultValues: {
      name: camera.name,
      name2: camera.name2,
      maker: camera.maker,
      maker2: camera.maker2 ?? '',
      year: camera.year,
      mount: camera.mount,
      grade: camera.grade,
      desc: camera.desc ?? '',
      predecessor: camera.predecessor ?? '',
      successor: camera.successor ?? '',
      refs: camera.refs ?? '',
      sensor: {
        name: camera.sensor?.name ?? '',
        engine: camera.sensor?.engine ?? '',
        pixelsFamiliar: camera.sensor?.pixelsFamiliar ?? '',
        size: camera.sensor?.size ?? '',
        type: camera.sensor?.type ?? '',
        isoMin: camera.sensor?.isoMin ?? 0,
        isoMax: camera.sensor?.isoMax ?? 0,
        vr: camera.sensor?.vr ?? false,
        cleaning: camera.sensor?.cleaning ?? false,
        astro: camera.sensor?.astro ?? false,
        noLowPass: camera.sensor?.noLowPass ?? false,
        ir: camera.sensor?.ir ?? false,
      },
      viewfinder: {
        type: camera.viewfinder?.type ?? '',
        magnification: camera.viewfinder?.magnification ?? 0,
        coverage: camera.viewfinder?.coverage ?? 0,
        resolution: camera.viewfinder?.resolution ?? 0,
      },
      display: {
        desc: camera.display?.desc ?? '',
        liveview: camera.display?.liveview ?? false,
        touch: camera.display?.touch ?? false,
        tilt: camera.display?.tilt ?? false,
        swivel: camera.display?.swivel ?? false,
        trueblack: camera.display?.trueblack ?? false,
      },
      dustproof: camera.dustproof ?? false,
      rugged: camera.rugged ?? false,
      video: {
        format: camera.video?.format ?? '',
        modes: camera.video?.modes ?? '',
      },
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, dirtyFields, isDirty },
    reset,
  } = methods;

  const submit = handleSubmit((formValues: FBCamerachema) => {
    if (!user) return;

    editCameraDataApi(
      {
        ...camera,
        ...formValues,
      },
      Object.keys(dirtyFields),
    ).then(() => {
      reset();
      reload();
      reloadHistories();
    });
  });

  return {
    methods,
    register,
    reset,
    errors,
    isDirty,
    dirtyFields,
    submit,
  };
};

export default useEditor;
