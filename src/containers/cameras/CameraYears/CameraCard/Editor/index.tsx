import { Dispatch, FormEventHandler, SetStateAction } from 'react';

import useEditor from './useEditor';
import useAuth from '@/hooks/useAuth';
import { FBCameraType } from '@/types/cameras.d';
import useAlert from '@/hooks/useAlert';
import { fields } from '@/containers/cameras/CameraYears/CameraCard/Editor/fields';

import styles from './index.module.scss';
import EditorInputs from '@/components/EditorInputs';

interface Props {
  camera: FBCameraType;
  setTab: Dispatch<SetStateAction<string>>;
}

const Editor = ({ camera, setTab }: Props) => {
  const { user, isSupporter, isAdmin } = useAuth();
  const { addAlert } = useAlert();

  const { errors, dirtyFields, isDirty, register, submit, reset } = useEditor(camera);

  const onClickCancel = () => {
    reset();
    setTab('internal');
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (isAdmin) {
      submit();
      setTab('internal');
      return;
    }
    if (!user) {
      addAlert({ message: '미안, 구경 잘 했어? 로그인 하고 돌아오자.' });
      return;
    }
    if (!isSupporter) {
      addAlert({
        message:
          '진짜 미안, 아무나 수정할 수는 없어.. 무섭잖아.. \n이준혁에게 DM을 보내보자.\n나를 도와줘! 카메라가 너무 많아..',
      });
    }
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
        <button type='button' onClick={onClickCancel}>
          취소
        </button>
        <button type='submit' disabled={!isDirty}>
          수정
        </button>
      </div>
    </form>
  );
};

export default Editor;
