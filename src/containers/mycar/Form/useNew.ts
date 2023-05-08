import { FormEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';

import useMyCar from '../useMyCar';
import useAuth from '@/hooks/useAuth';
import { NewMyCarSchema, newMyCarValidator } from '@/utils/validator';
import { postCarDataAPI } from '@/services/mycar';
import useAlert from '@/hooks/useAlert';

const useNew = () => {
  const { user } = useAuth();
  const router = useRouter();
  const { refetchCars } = useMyCar();
  const { alertUserOnly } = useAlert();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<NewMyCarSchema>({
    mode: 'onBlur',
    resolver: yupResolver(newMyCarValidator),
    defaultValues: {
      name: '차량 별명',
      vin: '차대 번호',
      maker: '제조사',
      lineup: '모델명',
    },
  });

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, dirtyFields, isDirty },
  } = methods;

  const submit = handleSubmit((formValues: NewMyCarSchema) => {
    if (!user) return;
    setIsLoading(true);

    postCarDataAPI({
      name: formValues.name,
      vin: formValues.vin,
      maker: formValues.maker,
      lineup: formValues.lineup,
    })
      .then(() => {
        refetchCars();
        router.push('/mycar');
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alertUserOnly(submit);
  };

  return {
    dirtyFields,
    isDirty,
    isLoading,
    errors,
    onSubmit,
    register,
    watch,
  };
};

export default useNew;
