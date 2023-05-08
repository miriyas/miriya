import { FormEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';

import useMyCar from '../useMyCar';
import useAuth from '@/hooks/useAuth';
import { NewMyCarSchema, newMyCarValidator } from '@/utils/validator';
import { patchCarDataAPI } from '@/services/mycar';
import { FBMyCar } from '@/types/mycar.d';
import useAlert from '@/hooks/useAlert';

const useEdit = (currentCar: FBMyCar) => {
  const router = useRouter();
  const { refetchCars } = useMyCar();
  const { addAlert } = useAlert();
  const { user, isSupporter, isAdmin } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<NewMyCarSchema>({
    mode: 'onBlur',
    resolver: yupResolver(newMyCarValidator),
    defaultValues: {
      name: currentCar.name,
      vin: currentCar.vin,
      maker: currentCar.maker,
      lineup: currentCar.lineup,
    },
  });

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, dirtyFields, isDirty },
  } = methods;

  const submit = handleSubmit((formValues: NewMyCarSchema) => {
    if (!user || !currentCar) return;
    setIsLoading(true);

    patchCarDataAPI(currentCar.id ?? '', {
      name: formValues.name,
      vin: formValues.vin,
      maker: formValues.maker,
      lineup: formValues.lineup,
    })
      .then(() => {
        refetchCars();
        router.push(`/mycar/${currentCar.id}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (isAdmin || isSupporter) {
      submit();
      return;
    }
    if (!user) {
      addAlert({ message: '미안, 구경 잘 했어? 로그인 하고 돌아오자.' });
    }
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

export default useEdit;
