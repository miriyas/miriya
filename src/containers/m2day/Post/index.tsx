'use client';

/* eslint-disable react/no-danger */
import Image from 'next/image';
import { useAtom } from 'jotai';

import useM2day from '../useM2day';
import { M2PostType } from '@/types/m2day.d';
import { getTimeDiffText } from '@/utils/date';
import { editModeAtom } from '@/containers/m2day/states';

import M2PostContent from './Content';
import FormEdit from './FormEdit';
import PannelYoutube from './PannelYoutube';
import styles from './index.module.scss';

interface Props {
  post: M2PostType;
}

const M2Post = ({ post }: Props) => {
  const { createdAt, content, likes, comments } = post;
  const [editMode, setEditMode] = useAtom(editModeAtom);

  const { onClickDelete } = useM2day();

  const onClickEdit = () => {
    setEditMode(post.id);
  };

  const onClickMeToo = () => {
    // console.log('me2');
  };

  const onClickComment = () => {
    // console.log('me2');
  };

  return (
    <li className={styles.post}>
      <div className={styles.leftWing}>
        <div className={styles.imageBox} />
      </div>
      <div className={styles.rightWing}>
        {editMode === post.id ? (
          <FormEdit me2postId={post.id} content={post.content} />
        ) : (
          <>
            <div className={styles.content}>
              <M2PostContent postId={post.id} content={content} />
              <time>{getTimeDiffText(createdAt)}</time>
              <button type='button' onClick={onClickEdit}>
                수정
              </button>
              <button type='button' onClick={onClickDelete} data-targetid={post.id}>
                삭제
              </button>
            </div>
            <PannelYoutube postId={post.id} />
            <div className={styles.functions}>
              <button type='button' onClick={onClickMeToo} className={styles.me2}>
                <Image className={styles.logo} src='/images/m2day/me2.png' width={50} height={58} alt='' />
                미투
              </button>
              <button type='button' onClick={onClickMeToo} className={styles.me2Count}>
                {likes}
              </button>
              <button type='button' onClick={onClickComment} className={styles.comment}>
                {comments.length > 0 ? '댓글' : '댓글달기'}
                {comments.length > 0 && <span>{comments.length}</span>}
              </button>
            </div>
          </>
        )}
      </div>
    </li>
  );
};

export default M2Post;
