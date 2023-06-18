'use client';

import { useAtom } from 'jotai';

import useM2day from '../../useM2day';
import { M2PostType } from '@/types/m2day.d';
import { getTimeDiffText } from '@/utils/date';
import { editModeAtom } from '@/containers/m2day/states';
import Functions from '@/containers/m2day/Contents/Post/Functions';

import LeftIcon from './LeftIcon';
import Content from './Content';
import FormEdit from './FormEdit';
import PannelImage from './PannelImage';
import PannelYoutube from './PannelYoutube';
import styles from './index.module.scss';

interface Props {
  post: M2PostType;
}

const M2Post = ({ post }: Props) => {
  const { createdAt, content } = post;
  const [editMode, setEditMode] = useAtom(editModeAtom);

  const { onClickDelete } = useM2day();

  const onClickEdit = () => {
    setEditMode(post.id);
  };

  return (
    <li className={styles.post}>
      <LeftIcon post={post} />
      <div className={styles.rightWing}>
        {editMode === post.id ? (
          <FormEdit me2postId={post.id} content={post.content} />
        ) : (
          <>
            <div className={styles.content}>
              <Content postId={post.id} content={content} />
              <time>{getTimeDiffText(createdAt)}</time>
              <button type='button' onClick={onClickEdit}>
                수정
              </button>
              <button type='button' onClick={onClickDelete} data-targetid={post.id}>
                삭제
              </button>
            </div>
            <PannelYoutube postId={post.id} />
            <PannelImage postId={post.id} />
            <Functions post={post} />
          </>
        )}
      </div>
    </li>
  );
};

export default M2Post;
