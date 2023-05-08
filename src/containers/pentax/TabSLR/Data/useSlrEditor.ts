import { atom } from 'jotai';
import { User } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResetAtom } from 'jotai/utils';
import { FormEventHandler } from 'react';

import usePentax from '../../usePentax';
import useAuth from '@/hooks/useAuth';
import useAlert from '@/hooks/useAlert';
import { SUB_TARGET_CATEGORY, TARGET_CATEGORY } from '@/types/comments.d';
import { FBPentaxSlr, PentaxSlrMountTypes } from '@/types/pentaxes';
import { PentaxSLRSchema, pentaxSlrValidator } from '@/utils/validator';
import { editCameraAtom } from '../states';
import { patchPentaxSlrAPI } from '@/services/pentaxes';

import useCommentAndHistory from '@/components/CommentAndHistory/useCommentAndHistory';

export const currentUserAtom = atom<User | null>(null);

const useSlrEditor = (camera: FBPentaxSlr) => {
  const { reloadHistories } = useCommentAndHistory({
    targetCategory: TARGET_CATEGORY.PENTAX,
    targetSubCategory: SUB_TARGET_CATEGORY.SLR,
    targetId: camera.id,
  });
  const { reloadSlr } = usePentax();

  const { user } = useAuth();
  const { alertSupporterOnly } = useAlert();
  const resetEditCamera = useResetAtom(editCameraAtom);

  const methods = useForm<PentaxSLRSchema>({
    mode: 'onBlur',
    resolver: yupResolver(pentaxSlrValidator),
    defaultValues: {
      startYear: camera.startYear,
      endYear: camera.endYear,
      mount: camera.mount as PentaxSlrMountTypes,
      data: {
        body: {
          width: camera.data.body.width ?? 0,
          height: camera.data.body.height ?? 0,
          depth: camera.data.body.depth ?? 0,
          weight: camera.data.body.weight ?? 0,
          color: camera.data.body.color ?? '',
          verticalGrip: camera.data.body.verticalGrip ?? '',
        },
        power: camera.data.power ?? '',
        etc: camera.data.etc ?? '',
        refs: camera.data.refs ?? '',
        modes: camera.data.modes ?? '',
        metering: {
          k: camera.data.metering?.k ?? '',
          a: camera.data.metering?.a ?? '',
          range: camera.data.metering?.range ?? '',
        },
        exposure: {
          range: camera.data.exposure?.range ?? '',
          fix: camera.data.exposure?.fix ?? false,
        },
        asa: {
          dx: camera.data.asa?.dx ?? '',
          manual: camera.data.asa?.manual ?? '',
        },
        panorama: camera.data.panorama ?? false,
        shutter: {
          build: camera.data.shutter?.build ?? '',
          speed: camera.data.shutter?.speed ?? '',
          emergency: camera.data.shutter?.emergency ?? '',
          timer: camera.data.shutter?.timer ?? '',
          release: camera.data.shutter?.release ?? '',
          releaseW: camera.data.shutter?.releaseW ?? '',
        },
        winder: {
          internal: camera.data.winder?.internal ?? '',
          external: camera.data.winder?.external ?? '',
          motorDrive: camera.data.winder?.motorDrive ?? '',
        },
        viewFinder: {
          magnification: camera.data.viewFinder?.magnification ?? 0,
          coverage: camera.data.viewFinder?.coverage ?? 0,
          seeAperture: camera.data.viewFinder?.seeAperture ?? '',
          seeShutterSpeed: camera.data.viewFinder?.seeShutterSpeed ?? '',
          finderReplace: camera.data.viewFinder?.finderReplace ?? false,
          screenReplace: camera.data.viewFinder?.screenReplace ?? false,
        },
        focus: {
          name: camera.data.focus?.name ?? '',
          sensitivity: camera.data.focus?.sensitivity ?? '',
          support: camera.data.focus?.support ?? false,
          powerZoom: camera.data.focus?.powerZoom ?? '',
        },
        flash: {
          sync: camera.data.flash?.sync ?? '',
          modes: camera.data.flash?.modes ?? '',
          syncSpeed: camera.data.flash?.syncSpeed ?? '',
          internal: camera.data.flash?.internal ?? '',
          redEye: camera.data.flash?.redEye ?? false,
        },
        comment: camera.data.comment ?? '',
      },
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, dirtyFields, isDirty },
  } = methods;

  const submit = handleSubmit((formValues: PentaxSLRSchema) => {
    if (!user) return;

    const keys = Object.keys(dirtyFields).filter((field) => field !== 'data');
    let dataKeys: string[] = [];
    if (dirtyFields?.data) {
      dataKeys = Object.keys(dirtyFields?.data);
    }

    patchPentaxSlrAPI({
      user,
      camera: {
        ...camera,
        ...formValues,
      },
      changed: [...keys, ...dataKeys],
      targetSubCategory: SUB_TARGET_CATEGORY.SLR,
    }).then(() => {
      resetEditCamera();
      reloadSlr();
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

export default useSlrEditor;
