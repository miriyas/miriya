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
      image: undefined,
      name: '',
      vin: '',
      maker: '',
      lineup: '',
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

    const formData = new FormData();
    formData.append('image', formValues.image[0]);
    formData.append('name', formValues.name);
    formData.append('vin', formValues.vin);
    formData.append('maker', formValues.maker);
    formData.append('lineup', formValues.lineup);

    postCarDataAPI(formData)
      .then((res) => {
        refetchCars();
        router.push(`/mycar/${res.data.id}`);
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
