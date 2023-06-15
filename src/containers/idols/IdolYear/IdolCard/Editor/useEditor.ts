import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResetAtom } from 'jotai/utils';

import useAuth from '@/hooks/useAuth';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { Idol } from '@/types/idols.d';
import { EditIdolSchema, editIdolValidator } from '@/utils/validator';
import { editIdolAtom } from '@/containers/idols/states';
import { editIdolDataApi } from '@/services/idols';

import useCommentAndHistory from '@/components/CommentAndHistory/useCommentAndHistory';

const useEditor = (idol: Idol) => {
  const { reloadHistories } = useCommentAndHistory({
    targetCategory: TARGET_CATEGORY.IDOLS,
    targetId: idol.name,
  });

  const { user } = useAuth();
  const router = useRouter();
  const resetEditIdol = useResetAtom(editIdolAtom);
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<EditIdolSchema>({
    mode: 'onBlur',
    resolver: yupResolver(editIdolValidator),
    defaultValues: {
      category: idol.category,
      endYear: idol.endYear,
      youtubeUrl: idol.youtubeUrl,
      youtubeStartsAt: idol.youtubeStartsAt,
      descTitle: idol.descTitle,
      descNamu: idol.descNamu,
      descVibe: idol.descVibe,
      descMelon: idol.descMelon,
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, dirtyFields, isDirty },
  } = methods;

  const submitIdol = handleSubmit((formValues: EditIdolSchema) => {
    if (!user) return;

    setIsLoading(true);
    editIdolDataApi(
      idol.id,
      {
        category: formValues.category,
        endYear: formValues.endYear,
        youtubeUrl: formValues.youtubeUrl ?? '',
        youtubeStartsAt: formValues.youtubeStartsAt ?? 0,
        descTitle: formValues.descTitle,
        descNamu: formValues.descNamu,
        descVibe: formValues.descVibe,
        descMelon: formValues.descMelon,
      },
      Object.keys(dirtyFields),
    )
      .then(() => {
        router.refresh();
        resetEditIdol();
        reloadHistories();
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  return {
    methods,
    register,
    errors,
    isDirty,
    dirtyFields,
    submitIdol,
    isLoading,
  };
};

export default useEditor;
