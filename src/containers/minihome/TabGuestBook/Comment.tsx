'use client';

import { MouseEventHandler, useState } from 'react';
import cx from 'clsx';
import Image from 'next/image';

import { getTimeDiffText } from '@/utils/date';
import useAuth from '@/hooks/useAuth';
import useGuestbook from './useGuestbook';
import { filterAuthorName } from '@/utils/auth';
import { Guestbook } from '@/types/minihome.d';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import EditForm from './EditForm';
import styles from './Comment.module.scss';

interface Props {
  guestbook: Guestbook;
}

const GuestbookItem = ({ guestbook }: Props) => {
  const { submitEditGuesbookHidden, deleteGuestbook } = useGuestbook();
  const { isAdmin, isMineOrAdmin } = useAuth();
  const [editMode, setEditMode] = useState(false);

  const onClickEdit: MouseEventHandler<HTMLButtonElement> = () => {
    setEditMode(true);
  };

  const onClickDelete: MouseEventHandler<HTMLButtonElement> = () => {
    deleteGuestbook(guestbook);
  };

  const onClickHide: MouseEventHandler<HTMLButtonElement> = () => {
    submitEditGuesbookHidden(guestbook, true);
  };

  const onClickShow: MouseEventHandler<HTMLButtonElement> = () => {
    submitEditGuesbookHidden(guestbook, false);
  };

  const deleted = guestbook.deletedAt !== null;

  if (guestbook.hidden && !isMineOrAdmin(guestbook.authorId)) return null;
  if (deleted && !isAdmin) return null;

  return (
    <li
      className={cx(styles.commentItem, {
        [styles.deleted]: deleted,
        [styles.hidden]: guestbook.hidden,
      })}
    >
      <div className={styles.upper}>
        <div className={styles.leftWing}>
          <p className={styles.number}>No.{guestbook.guestbookNo}</p>
          <p className={cx(styles.name, { [styles.isFake]: guestbook.author.nicknameIsFake })}>
            {filterAuthorName(guestbook.authorId, guestbook.author.nickname)}
          </p>
          {deleted && <time>({getTimeDiffText(guestbook.deletedAt, true)} 삭제됨)</time>}
          {!deleted && guestbook.updatedAt && <time>({getTimeDiffText(guestbook.updatedAt, true)} 수정됨)</time>}
          {!deleted && !guestbook.updatedAt && guestbook.createdAt && (
            <time>({getTimeDiffText(guestbook.createdAt, true)})</time>
          )}
        </div>
        {!editMode && isMineOrAdmin(guestbook.authorId) && (
          <div className={styles.rightWing}>
            <button type='button' onClick={onClickEdit}>
              수정
            </button>
            {guestbook.hidden ? (
              <button type='button' onClick={onClickShow}>
                공개하기
              </button>
            ) : (
              <button type='button' onClick={onClickHide}>
                비밀로하기
              </button>
            )}
            {!deleted && (
              <button type='button' onClick={onClickDelete} data-id={guestbook.id} data-author-id={guestbook.authorId}>
                삭제
              </button>
            )}
          </div>
        )}
      </div>
      <div className={styles.lower}>
        <div className={styles.leftWing}>
          <ProfileImageWithFallback src={guestbook.author.profileUrl} uid={guestbook.authorId} alt='' size={192} />
        </div>
        <div className={styles.rightWing}>
          {editMode ? (
            <EditForm guestbook={guestbook} setEditMode={setEditMode} />
          ) : (
            <div className={styles.bodyWrapper}>
              {guestbook.hidden && (
                <div className={styles.hiddenInfo}>
                  <Image src='/images/minihome/lock.png' alt='' width={24} height={24} className={styles.image} />
                  <p className={styles.status}>비밀이야</p>
                  <p className={styles.info}>(이 글은 홈 주인과 작성자만 볼 수 있어요)</p>
                </div>
              )}
              <p className={styles.body}>{guestbook.body}</p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default GuestbookItem;
