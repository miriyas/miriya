'use client';

import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useMount } from 'react-use';

import useM2day from '../useM2day';
import { editModeAtom, editContentAtom } from '../states';
import { patchM2dayAPI } from '@/services/m2day';
import { calcContentLength } from '../utils';

import styles from './FormEdit.module.scss';

const FormEdit = ({ me2postId, content }: { me2postId: string; content: string }) => {
  const { refetchPosts } = useM2day();
  const [loading, setLoading] = useState(false);
  const [editContent, setEditContent] = useAtom(editContentAtom);
  const setEditMode = useSetAtom(editModeAtom);

  useMount(() => {
    setEditContent(content);
  });

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newValue = e.currentTarget.value;
    const length = calcContentLength(newValue);
    if (length > 150) return;
    setEditContent(newValue);
  };

  const onClickEditCancel = () => {
    setEditMode(RESET);
  };

  const onSubmitEdit: FormEventHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    patchM2dayAPI(me2postId, {
      content: editContent,
    }).finally(() => {
      setEditContent(RESET);
      setEditMode(RESET);
      setLoading(false);
      refetchPosts();
    });
  };

  return (
    <div className={styles.formEdit}>
      <form className={styles.form} onSubmit={onSubmitEdit}>
        <textarea value={editContent} onChange={onChange} />
        <div className={styles.editBottom}>
          <button type='button' onClick={onClickEditCancel} tabIndex={-1}>
            취소
          </button>
          <button type='submit' disabled={loading} tabIndex={0}>
            올리기
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEdit;
