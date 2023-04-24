import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResetAtom } from 'jotai/utils';

import useIdols from '../../../useIdols';
import useAuth from '@/hooks/useAuth';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { FBIdolType } from '@/types/idols.d';
import { IdolSchema, idolValidator } from '@/utils/validator';
import { editIdolAtom } from '@/containers/idols/states';
import { editIdolDataApi } from '@/services/idols';

import useCommentAndHistory from '@/components/CommentAndHistory/useCommentAndHistory';

const useEditor = (idol: FBIdolType) => {
  const { reloadHistories } = useCommentAndHistory({
    targetCategory: TARGET_CATEGORY.IDOLS,
    targetId: idol.name,
  });

  const { user } = useAuth();
  const { reload } = useIdols();
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

    editIdolDataApi(
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
    ).then(() => {
      resetEditIdol();
      reload();
      reloadHistories();
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
