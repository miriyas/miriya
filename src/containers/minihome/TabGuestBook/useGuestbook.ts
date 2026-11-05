import { useAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';
import { useQueryClient } from '@tanstack/react-query';

import { patchGuestbookAPI, postGuestbookAPI, deleteGuestbookAPI } from '@/services/minihome';
import { Guestbook } from '@/types/minihome';
import useAuth from '@/hooks/useAuth';

/** React Query key of the guestbook list (Comments.tsx). */
export const GUESTBOOK_QUERY_KEY = 'getGuestbookDataAPI';

export const newPostBodyAtom = atomWithReset<string>('');
export const newPostHiddenAtom = atomWithReset<boolean>(false);
export const editPostBodyAtom = atomWithReset<string>('');
export const editPostHiddenAtom = atomWithReset<boolean>(false);

const useGuestbook = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const [newPostBody, setNewPostBody] = useAtom(newPostBodyAtom);
  const resetNewPostBody = useResetAtom(newPostBodyAtom);
  const [newPostHidden, setNewPostHidden] = useAtom(newPostHiddenAtom);
  const resetNewPostHidden = useResetAtom(newPostHiddenAtom);

  const [editPostBody, setEditPostBody] = useAtom(editPostBodyAtom);
  const resetEditPostBody = useResetAtom(editPostBodyAtom);
  const [editPostHidden, setEditPostHidden] = useAtom(editPostHiddenAtom);
  const resetEditPostHidden = useResetAtom(editPostHiddenAtom);

  // The list is loaded in the browser with React Query, so router.refresh() did not change it.
  // Invalidate the query: the list loads again at once (all loaded pages).
  const reload = () => queryClient.invalidateQueries({ queryKey: [GUESTBOOK_QUERY_KEY] });

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
