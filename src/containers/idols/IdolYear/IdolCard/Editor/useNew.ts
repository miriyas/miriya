import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

import useAuth from '@/hooks/useAuth';
import { NewIdolSchema, newIdolValidator } from '@/utils/validator';
import { postIdolDataApi } from '@/services/idols';
import useIdols from '../../../useIdols';

const useNew = () => {
  const { user } = useAuth();
  const { reload } = useIdols();
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
    })
      .then(() => {
        reload();
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
