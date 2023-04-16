/* eslint-disable no-alert */
import { Dispatch, FormEventHandler, SetStateAction } from 'react';

import useEditor from './useEditor';
import useAuth from '@/hooks/useAuth';
import { InputFields } from '@/types/index.d';
import { FBCameraType } from '@/types/cameras.d';

import styles from './index.module.scss';
import EditorInputs from '@/components/EditorInputs';

const basicFields: InputFields = {
  year: '*출시 연도',
  maker: '*메이커',
  maker2: '메이커2',
  mount: '*마운트',
  grade: '*등급',
  name2: '이름2',
  desc: '한줄평',
  predecessor: '전작',
  successor: '후속작',
  refs: '근거자료',
};

const sensorFields: InputFields = {
  'sensor.name': '센서명',
  'sensor.engine': '엔진명',
  'sensor.pixelsFamiliar': '화소수',
  'sensor.size': '크기',
  'sensor.type': '타입',
  'sensor.isoMin': 'ISO 저',
  'sensor.isoMax': 'ISO 고',
  'sensor.vr': {
    type: 'checkbox',
    label: '손떨림보정',
  },
  'sensor.cleaning': {
    type: 'checkbox',
    label: '센서청소',
  },
  'sensor.astro': {
    type: 'checkbox',
    label: '천체촬영',
  },
  'sensor.noLowPass': {
    type: 'checkbox',
    label: '로우패스X',
  },
  'sensor.ir': {
    type: 'checkbox',
    label: '적외선',
  },
};

const shutterAfMeteringFields: InputFields = {
  'shutter.fps': '연사속도',
  'shutter.speed': {
    type: 'number',
    label: '셔터속도',
  },
  'focus.name': '엔진명',
  'focus.desc': '설명',
  'focus.contrast': {
    type: 'checkbox',
    label: '컨트라스트',
  },
  'focus.phaseDetection': {
    type: 'checkbox',
    label: '위상차',
  },
  'metering.engine': '측광 엔진',
  'metering.desc': '측광 설명',
};

const viewfinderFields: InputFields = {
  'viewfinder.type': '타입',
  'viewfinder.magnification': {
    type: 'number',
    label: '배율',
  },
  'viewfinder.coverage': {
    type: 'number',
    label: '시야율',
  },
  'viewfinder.resolution': {
    type: 'number',
    label: '해상도',
  },
};

const displayFields: InputFields = {
  'display.desc': '설명',
  'display.liveview': {
    type: 'checkbox',
    label: '라이브뷰',
  },
  'display.touch': {
    type: 'checkbox',
    label: '터치',
  },
  'display.tilt': {
    type: 'checkbox',
    label: '틸트',
  },
  'display.swivel': {
    type: 'checkbox',
    label: '스위블',
  },
  'display.trueblack': {
    type: 'checkbox',
    label: '트루블랙',
  },
};

const etcFields: InputFields = {
  rugged: {
    type: 'checkbox',
    label: '러기드',
  },
  'video.format': '비디오포멧',
  'video.modes': '비디오해상도',
};

interface Props {
  camera: FBCameraType;
  setTab: Dispatch<SetStateAction<string>>;
}

const Editor = ({ camera, setTab }: Props) => {
  const { user, isSupporter, isAdmin } = useAuth();

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
      alert('미안, 구경 잘 했어? 로그인 하고 돌아오자.'); // 인터렉션 방해해서 얼럿 쓰면 안되는건 알지만, 범용 모달 만들기 전까지 쓴다
      return;
    }
    if (!isSupporter) {
      alert(
        '진짜 미안, 아무나 수정할 수는 없어.. 무섭잖아.. \n이준혁에게 DM을 보내보자.\n나를 도와줘! 아이돌이 너무 많아..',
      ); // 인터렉션 방해해서 얼럿 쓰면 안되는건 알지만, 범용 모달 만들기 전까지 쓴다
    }
  };

  return (
    <form className={styles.editor} onSubmit={onSubmit}>
      <p className={styles.title}>{camera.name}</p>
      <EditorInputs
        subtitle='기본 정보'
        fields={basicFields}
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
        category='camera'
      />
      <EditorInputs
        subtitle='센서 정보'
        fields={sensorFields}
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
        category='camera'
      />
      <EditorInputs
        subtitle='셔터/AF/측광 정보'
        fields={shutterAfMeteringFields}
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
        category='camera'
      />
      <EditorInputs
        subtitle='뷰파인더 정보'
        fields={viewfinderFields}
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
        category='camera'
      />
      <EditorInputs
        subtitle='디스플레이 정보'
        fields={displayFields}
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
        category='camera'
      />
      <EditorInputs
        subtitle='비디오/기타 정보'
        fields={etcFields}
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
        category='camera'
      />
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
