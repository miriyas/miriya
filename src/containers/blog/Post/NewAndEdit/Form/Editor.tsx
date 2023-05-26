/* eslint-disable react/no-danger */

'use client';

import { SimpleMdeReact } from 'react-simplemde-editor';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import { uploadImageAPI } from '@/services/s3';
import { renderMarkdown } from '@/utils/blog';
import { imageOptimize } from '../../utils';
import { bodyAtom } from './states';

import { OPTIONS } from './editorOptions';
import './editor.scss';
import styles from './index.module.scss';

const Editor = () => {
  const [body, setBody] = useAtom(bodyAtom);
  const [preview, setPreview] = useState('');
  const [uploading, setUploading] = useState(false);

  const onImagePasted = async (e: DragEvent) => {
    e.preventDefault();
    const { dataTransfer } = e;
    if (!dataTransfer) return;

    const files: File[] = [];
    for (let index = 0; index < dataTransfer.items.length; index += 1) {
      const file = dataTransfer.files.item(index);
      if (file) files.push(file);
    }

    await Promise.all(
      files.map(async (file) => {
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true);
        const {
          data: { url },
        } = await uploadImageAPI(formData);
        setUploading(false);
        const imageUrl = `${process.env.NEXT_PUBLIC_CDN_URL}/${url}`;
        const mdToInsert = `![${file.name}](${imageUrl})`;
        setBody((prev) => `${prev}\n\n${mdToInsert}`);
      }),
    );
  };

  useEffect(() => {
    renderMarkdown(body).then((res) => {
      setPreview(res);
    });
  }, [body]);

  useEffect(() => {
    window.addEventListener('drop', onImagePasted);
    return () => {
      window.removeEventListener('drop', onImagePasted);
    };
  });

  const onChangeBody = (v?: string) => setBody(v ?? '');

  return (
    <div className={styles.editorWrapper}>
      {uploading && <div className={styles.uploading}>업로드중..</div>}
      <SimpleMdeReact className={styles.editor} value={body} onChange={onChangeBody} options={OPTIONS} />
      <div className={styles.previewWrapper}>
        <div className={styles.preview} id='previewData' dangerouslySetInnerHTML={{ __html: imageOptimize(preview) }} />
      </div>
    </div>
  );
};

export default Editor;
