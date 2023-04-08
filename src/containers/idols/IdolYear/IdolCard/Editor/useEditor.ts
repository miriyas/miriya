import { atom } from 'jotai';
import { User } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResetAtom } from 'jotai/utils';

import useAuth from '@/hooks/useAuth';
import { FBIdolType } from '@/types/idols.d';
import { UserWithRole } from '@/types/auth.d';
import { IdolSchema, idolValidator } from '@/utils/validator';
import { editIdolDoc } from '@/services/firebase/idols';
import { editIdolAtom } from '@/containers/idols/states';

export const currentUserAtom = atom<User | null>(null);
export const adminUsersAtom = atom<UserWithRole[]>([]);

const useEditor = (idol: FBIdolType) => {
  const { user } = useAuth();
  const resetEditIdol = useResetAtom(editIdolAtom);

  const methods = useForm<IdolSchema>({
    mode: 'onBlur',
    resolver: yupResolver(idolValidator),
    defaultValues: {
      category: idol.category,
      endYear: idol.endYear,
      youtube: {
        url: idol.youtube?.url,
        startsAt: idol.youtube?.startsAt,
      },
      desc: idol.desc,
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, dirtyFields, isDirty },
  } = methods;

  const submitIdol = handleSubmit((formValues: IdolSchema) => {
    if (!user) return;

    editIdolDoc(
      {
        ...idol,
        category: formValues.category,
        endYear: formValues.endYear,
        youtube: {
          url: formValues.youtube?.url ?? '',
          startsAt: formValues.youtube?.startsAt ?? 0,
        },
        desc: {
          title: formValues.desc.title,
          melon: formValues.desc.melon,
          namu: formValues.desc.namu,
          naver: formValues.desc.naver,
        },
      },
      Object.keys(dirtyFields),
      user,
    ).then(() => {
      resetEditIdol();
    });
  });

  return {
    methods,
    register,
    errors,
    isDirty,
    dirtyFields,
    submitIdol,
  };
};

export default useEditor;
