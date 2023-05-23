import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from 'react';
import cx from 'clsx';

import { Comment } from '@/types/comments.d';
import { filterAuthorName } from '@/utils/auth';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';

interface Props {
  comment: Comment;
  body: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChangeBody: ChangeEventHandler<HTMLInputElement>;
  onClickCancel: MouseEventHandler<HTMLButtonElement>;
  styles: {
    readonly [key: string]: string;
  };
}

const CommentEditVertical = ({ comment, body, onSubmit, onChangeBody, onClickCancel, styles }: Props) => {
  return (
    <form onSubmit={onSubmit} className={styles.editor}>
      <div className={styles.upper}>
        <input type='text' onChange={onChangeBody} value={body} data-lpignore='true' autoComplete='off' />
      </div>
      <div className={styles.lower}>
        <div className={styles.leftWing}>
          <div className={styles.profileWrapper}>
            <ProfileImageWithFallback src={comment.author.profileUrl} uid={comment.authorId} alt='' size={36} />
          </div>
          <p className={cx(styles.name, { [styles.isFake]: comment.author.nicknameIsFake })}>
            {filterAuthorName(comment.authorId, comment.author.nickname)}
          </p>
        </div>

        <div className={styles.rightWing}>
          <button type='button' onClick={onClickCancel}>
            취소
          </button>
          <button type='submit'>확인</button>
        </div>
      </div>
    </form>
  );
};

export default CommentEditVertical;
