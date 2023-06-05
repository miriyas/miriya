import { useAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';
import { useRouter } from 'next/navigation';

import { patchGuestbookAPI, postGuestbookAPI, deleteGuestbookAPI } from '@/services/minihome';
import { Comment, TARGET_CATEGORY } from '@/types/comments.d';
import useAuth from '@/hooks/useAuth';
import { revalidateApi } from '@/services';

export const newPostBodyAtom = atomWithReset<string>('');
export const newPostHiddenAtom = atomWithReset<boolean>(false);
export const editPostBodyAtom = atomWithReset<string>('');
export const editPostHiddenAtom = atomWithReset<boolean>(false);

const useGuestbook = () => {
  const { user } = useAuth();
  const router = useRouter();

  const [newPostBody, setNewPostBody] = useAtom(newPostBodyAtom);
  const resetNewPostBody = useResetAtom(newPostBodyAtom);
  const [newPostHidden, setNewPostHidden] = useAtom(newPostHiddenAtom);
  const resetNewPostHidden = useResetAtom(newPostHiddenAtom);

  const [editPostBody, setEditPostBody] = useAtom(editPostBodyAtom);
  const resetEditPostBody = useResetAtom(editPostBodyAtom);
  const [editPostHidden, setEditPostHidden] = useAtom(editPostHiddenAtom);
  const resetEditPostHidden = useResetAtom(editPostHiddenAtom);

  const reload = () => {
    revalidateApi(`/minihome/guestbook`).then(() => {
      router.refresh();
    });
  };

  const submitNewGuestComment = () => {
    if (!user) return;
    postGuestbookAPI({
      body: newPostBody,
      hidden: newPostHidden,
      targetCategory: TARGET_CATEGORY.GUESTBOOK,
    }).then(() => {
      resetNewPostBody();
      resetNewPostHidden();
      reload();
    });
  };

  const submitEditGuestComment = (comment: Comment) => {
    if (!user) return;
    patchGuestbookAPI({
      ...comment,
      body: editPostBody,
      hidden: editPostHidden,
      targetCategory: TARGET_CATEGORY.GUESTBOOK,
    }).then(() => {
      resetEditPostBody();
      resetEditPostHidden();
      reload();
    });
  };

  const submitEditGuestCommentHidden = (comment: Comment, hidden: boolean) => {
    if (!user) return;
    patchGuestbookAPI({
      ...comment,
      hidden,
    }).then(reload);
  };

  const deleteGuestComment = (comment: Comment) => {
    if (!user) return;
    deleteGuestbookAPI(comment.id, user.uid).then(reload);
  };

  return {
    newPostBody,
    setNewPostBody,
    newPostHidden,
    setNewPostHidden,
    submitNewGuestComment,

    editPostBody,
    setEditPostBody,
    editPostHidden,
    setEditPostHidden,
    submitEditGuestComment,

    submitEditGuestCommentHidden,
    deleteGuestComment,
  };
};

export default useGuestbook;
