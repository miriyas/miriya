import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';

import useAuth from '@/hooks/useAuth';
import { NewIdolSchema, newIdolValidator } from '@/utils/validator';
import { postIdolDataApi } from '@/services/idols';

const useNew = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<NewIdolSchema>({
    mode: 'onBlur',
    resolver: yupResolver(newIdolValidator),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, dirtyFields, isDirty },
  } = methods;

  const submitIdol = handleSubmit((formValues: NewIdolSchema) => {
    if (!user) return;
    setIsLoading(true);

    postIdolDataApi({
      name: formValues.name,
      category: formValues.category,
      debutYear: formValues.debutYear,
      endYear: formValues.endYear,
      youtubeUrl: formValues.youtubeUrl ?? '',
      youtubeStartsAt: formValues.youtubeStartsAt ?? 0,
      descTitle: formValues.descTitle,
      descNamu: formValues.descNamu,
      descVibe: formValues.descVibe,
      descMelon: formValues.descMelon,
    })
      .then(() => {
        router.refresh();
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
    isLoading,
    dirtyFields,
    submitIdol,
  };
};

export default useNew;
