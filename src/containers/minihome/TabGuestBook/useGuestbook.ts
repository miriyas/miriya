import { useAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';
import { useRouter } from 'next/navigation';

import { patchGuestbookAPI, postGuestbookAPI, deleteGuestbookAPI } from '@/services/minihome';
import { Guestbook } from '@/types/minihome.d';
import useAuth from '@/hooks/useAuth';
import { revalidatePathApi } from '@/services';

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
    revalidatePathApi(`/minihome/guestbook`).then(() => {
      router.refresh();
    });
  };

  const submitNewGuestbook = () => {
    if (!user) return;
    postGuestbookAPI({
      body: newPostBody,
      hidden: newPostHidden,
    }).then(() => {
      resetNewPostBody();
      resetNewPostHidden();
      reload();
    });
  };

  const submitEditGuestbook = (guestbook: Guestbook) => {
    if (!user) return;
    patchGuestbookAPI({
      ...guestbook,
      body: editPostBody,
      hidden: editPostHidden,
    }).then(() => {
      resetEditPostBody();
      resetEditPostHidden();
      reload();
    });
  };

  const submitEditGuesbookHidden = (guestbook: Guestbook, hidden: boolean) => {
    if (!user) return;
    patchGuestbookAPI({
      ...guestbook,
      hidden,
    }).then(reload);
  };

  const deleteGuestbook = (guestbook: Guestbook) => {
    if (!user) return;
    deleteGuestbookAPI(guestbook.id, user.uid).then(reload);
  };

  return {
    newPostBody,
    setNewPostBody,
    newPostHidden,
    setNewPostHidden,
    submitNewGuestbook,

    editPostBody,
    setEditPostBody,
    editPostHidden,
    setEditPostHidden,
    submitEditGuestbook,

    submitEditGuesbookHidden,
    deleteGuestbook,
  };
};

export default useGuestbook;
