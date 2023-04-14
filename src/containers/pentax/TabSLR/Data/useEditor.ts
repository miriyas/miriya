/* eslint-disable no-alert */

import { atom } from 'jotai';
import { User } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResetAtom } from 'jotai/utils';
import { FormEventHandler } from 'react';

import useAuth from '@/hooks/useAuth';
import { UserWithRole } from '@/types/auth.d';
import { SUB_TARGET_CATEGORY } from '@/types/comments.d';
import { FBPentaxSlr, PentaxSlrMountTypes } from '@/types/pentaxes';
import { PentaxSLRSchema, pentaxSlrValidator } from '@/utils/validator';
import { editPentaxDoc } from '@/services/firebase/pentaxes';
import { editCameraAtom } from '../states';

export const currentUserAtom = atom<User | null>(null);
export const adminUsersAtom = atom<UserWithRole[]>([]);

const useEditor = (camera: FBPentaxSlr) => {
  const { isAdmin, isSupporter, user } = useAuth();
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

    editPentaxDoc(
      {
        ...camera,
        ...formValues,
      },
      [...keys, ...dataKeys],
      user,
      SUB_TARGET_CATEGORY.SLR,
    ).then(() => {
      resetEditCamera();
    });
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (isAdmin) {
      submit();
      return;
    }
    if (!user) {
      alert('미안, 구경 잘 했어? 로그인 하고 돌아오자.'); // 인터렉션 방해해서 얼럿 쓰면 안되는건 알지만, 범용 모달 만들기 전까지 쓴다
      return;
    }
    if (!isSupporter) {
      alert(
        '진짜 미안, 아무나 수정할 수는 없어.. 무섭잖아.. \n이준혁에게 DM을 보내보자.\n나를 도와줘! 아이돌이 너무 많아..',
      ); // 인터렉션 방해해서 얼럿 쓰면 안되는건 알지만, 범용 모달 만들기 전까지 쓴다
    }
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

export default useEditor;