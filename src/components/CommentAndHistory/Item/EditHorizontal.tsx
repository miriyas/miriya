import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from 'react';
import cx from 'clsx';

import { Comment } from '@/types/comments.d';
import { filterAuthorName } from '@/utils/auth';
import { getTimeDiffText } from '@/utils/date';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';

interface Props {
  comment: Comment;
  body: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChangeBody: ChangeEventHandler<HTMLTextAreaElement>;
  onClickCancel: MouseEventHandler<HTMLButtonElement>;
  styles: {
    readonly [key: string]: string;
  };
}

const CommentEditVertical = ({ comment, body, onSubmit, onChangeBody, onClickCancel, styles }: Props) => {
  return (
    <form onSubmit={onSubmit} className={styles.editor}>
      <div className={styles.leftWing}>
        <div className={styles.profileWrapper}>
          <ProfileImageWithFallback src={comment.author.profileUrl} uid={comment.authorId} alt='' size={36} />
        </div>
      </div>
      <div className={styles.rightWing}>
        <div className={styles.upper}>
          <p className={cx(styles.name, { [styles.isFake]: comment.author.nicknameIsFake })}>
            {filterAuthorName(comment.authorId, comment.author.nickname)}
          </p>
          <time>{getTimeDiffText(comment.createdAt, true)}</time>
        </div>
        <textarea onChange={onChangeBody} value={body} data-lpignore='true' autoComplete='off' />
        <div className={styles.lower}>
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
