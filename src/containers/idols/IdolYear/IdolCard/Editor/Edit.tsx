import { useResetAtom } from 'jotai/utils';

import useEditor from './useEditor';
import { FBIdolType } from '@/types/idols.d';
import { editIdolAtom } from '@/containers/idols/states';

import Form from './EditForm';

interface Props {
  idol: FBIdolType;
}

const Edit = ({ idol }: Props) => {
  const resetEditIdol = useResetAtom(editIdolAtom);

  const { errors, dirtyFields, isDirty, register, submitIdol, isLoading } = useEditor(idol);

  const onClickCancel = () => {
    resetEditIdol();
  };

  return (
    <Form
      idol={idol}
      submitIdol={submitIdol}
      onClickCancel={onClickCancel}
      errors={errors}
      dirtyFields={dirtyFields}
      isDirty={isDirty}
      register={register}
      isLoading={isLoading}
    />
  );
};

export default Edit;
