import { Dispatch, FormEventHandler, SetStateAction } from 'react';

import useEditor from './useEditor';
import { FBCameraType } from '@/types/cameras.d';
import useAlert from '@/hooks/useAlert';
import { fields } from '@/containers/cameras/CameraYears/CameraCard/Editor/fields';

import styles from './index.module.scss';
import EditorInputs from '@/components/EditorInputs';
import Button from '@/components/Button';

interface Props {
  camera: FBCameraType;
  setTab: Dispatch<SetStateAction<string>>;
}

const Editor = ({ camera, setTab }: Props) => {
  const { alertSupporterOnly } = useAlert();

  const { errors, dirtyFields, isDirty, register, submit, reset } = useEditor(camera);

  const onClickCancel = () => {
    reset();
    setTab('internal');
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alertSupporterOnly(() => {
      submit();
      setTab('internal');
    });
  };

  return (
    <form className={styles.editor} onSubmit={onSubmit}>
      <p className={styles.title}>{camera.name}</p>
      {fields.map((item) => (
        <EditorInputs
          key={item.subtitle}
          subtitle={item.subtitle}
          fields={item.fields}
          register={register}
          errors={errors}
          dirtyFields={dirtyFields}
          category='camera'
        />
      ))}
      <div className={styles.buttonWrapper}>
        <Button onClick={onClickCancel} skin='inverse' size='small'>
          취소
        </Button>
        <Button type='submit' disabled={!isDirty} skin='primary' size='small'>
          수정
        </Button>
      </div>
    </form>
  );
};

export default Editor;
