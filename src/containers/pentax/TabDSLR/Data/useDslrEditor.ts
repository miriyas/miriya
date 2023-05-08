import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResetAtom } from 'jotai/utils';
import { FormEventHandler } from 'react';

import useAuth from '@/hooks/useAuth';
import useAlert from '@/hooks/useAlert';
import { SUB_TARGET_CATEGORY, TARGET_CATEGORY } from '@/types/comments.d';
import { FBPentaxDslr } from '@/types/pentaxes';
import { PentaxDSLRSchema, pentaxDslrValidator } from '@/utils/validator';
import { editCameraAtom } from '../states';
import { patchPentaxDslrAPI } from '@/services/pentaxes';
import usePentax from '../../usePentax';

import useCommentAndHistory from '@/components/CommentAndHistory/useCommentAndHistory';

const useDslrEditor = (camera: FBPentaxDslr) => {
  const { reloadHistories } = useCommentAndHistory({
    targetCategory: TARGET_CATEGORY.PENTAX,
    targetSubCategory: SUB_TARGET_CATEGORY.DSLR,
    targetId: camera.id,
  });
  const { user } = useAuth();
  const { reloadDslr } = usePentax();
  const { alertSupporterOnly } = useAlert();
  const resetEditCamera = useResetAtom(editCameraAtom);

  const methods = useForm<PentaxDSLRSchema>({
    mode: 'onBlur',
    resolver: yupResolver(pentaxDslrValidator),
    defaultValues: {
      startYear: camera.startYear,
      startQuarter: camera.startQuarter,
      endYear: camera.endYear,
      endQuarter: camera.endQuarter,
      data: {
        mount: camera.data.mount ?? '',
        body: {
          width: camera.data.body?.width ?? 0,
          height: camera.data.body?.height ?? 0,
          depth: camera.data.body?.depth ?? 0,
          weight: camera.data.body?.weight ?? '',
          material: camera.data.body?.material ?? '',
          verticalGrip: camera.data.body?.verticalGrip ?? '',
        },
        bonus: {
          wr: camera.data.bonus?.wr ?? false,
          sr: camera.data.bonus?.sr ?? '',
          dustRemove: camera.data.bonus?.dustRemove ?? '',
        },
        memory: camera.data.memory ?? '',
        power: camera.data.power ?? '',
        etc: camera.data.etc ?? '',
        sensor: {
          pixels: camera.data.sensor?.pixels ?? '',
          size: camera.data.sensor?.size ?? '',
          iso: camera.data.sensor?.iso ?? '',
          engine: camera.data.sensor?.engine ?? '',
        },
        modes: camera.data.modes ?? '',
        meteringK: camera.data.meteringK ?? '',
        meteringA: camera.data.meteringA ?? '',
        meteringRange: camera.data.meteringRange ?? '',
        exposureRange: camera.data.exposureRange ?? '',
        shutter: camera.data.shutter ?? '',
        continuous: camera.data.continuous ?? '',
        continuousLength: camera.data.continuousLength ?? '',
        viewFinder: {
          type: camera.data.viewFinder?.type ?? '',
          coverage: camera.data.viewFinder?.coverage ?? '',
          magnification: camera.data.viewFinder?.magnification ?? '',
          screenReplace: camera.data.viewFinder?.screenReplace ?? false,
        },
        flash: {
          interlock: camera.data.flash?.interlock ?? '',
          modes: camera.data.flash?.modes ?? '',
          syncSpeed: camera.data.flash?.syncSpeed ?? '',
          redEye: camera.data.flash?.redEye ?? false,
          internal: camera.data.flash?.internal ?? '',
          release: camera.data.flash?.release ?? '',
          releaseW: camera.data.flash?.releaseW ?? '',
        },
        focus: {
          name: camera.data.focus?.name ?? '',
          points: camera.data.focus?.points ?? '',
          sensitivity: camera.data.focus?.sensitivity ?? '',
          superImpose: camera.data.focus?.superImpose ?? false,
          supersonicMotor: camera.data.focus?.supersonicMotor ?? false,
        },
        display: camera.data.display ?? '',
        liveView: camera.data.liveView ?? false,
        liveViewAF: camera.data.liveViewAF ?? '',
        movie: camera.data.movie ?? '',
        movieType: camera.data.movieType ?? '',
        imageType: camera.data.imageType ?? '',
        refs: camera.data.refs ?? '',
        comment: camera.data.comment ?? '',
      },
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, dirtyFields, isDirty },
  } = methods;

  const submit = handleSubmit((formValues: PentaxDSLRSchema) => {
    if (!user) return;

    const keys = Object.keys(dirtyFields).filter((field) => field !== 'data');
    let dataKeys: string[] = [];
    if (dirtyFields?.data) {
      dataKeys = Object.keys(dirtyFields?.data);
    }

    patchPentaxDslrAPI({
      camera: {
        ...camera,
        ...formValues,
      },
      changed: [...keys, ...dataKeys],
      user,
      targetSubCategory: SUB_TARGET_CATEGORY.DSLR,
    }).then(() => {
      resetEditCamera();
      reloadDslr();
      reloadHistories();
    });
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alertSupporterOnly(submit);
  };

  const onClickCancel = () => {
    resetEditCamera();
  };

  return {
    methods,
    register,
    errors,
    isDirty,
    dirtyFields,
    onSubmit,
    onClickCancel,
  };
};

export default useDslrEditor;
