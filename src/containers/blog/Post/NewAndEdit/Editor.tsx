'use client';

import dynamic from 'next/dynamic';
import * as commands from '@uiw/react-md-editor/lib/commands'; // Next.js fix

import './form.css';

import { uploadImageAPI } from '@/services/s3';

import styles from './index.module.scss';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

const insertToTextArea = (intsertString: string) => {
  const textarea = document.querySelector('textarea');
  if (!textarea) {
    return null;
  }

  let sentence = textarea.value;
  const len = sentence.length;
  const pos = textarea.selectionStart;
  const end = textarea.selectionEnd;

  const front = sentence.slice(0, pos);
  const back = sentence.slice(pos, len);

  sentence = front + intsertString + back;

  textarea.value = sentence;
  textarea.selectionEnd = end + intsertString.length;

  return sentence;
};

const onImagePasted = async (dataTransfer: DataTransfer, setMarkdown: (v?: string) => void) => {
  const files: File[] = [];
  for (let index = 0; index < dataTransfer.items.length; index += 1) {
    const file = dataTransfer.files.item(index);
    if (file) files.push(file);
  }

  await Promise.all(
    files.map(async (file) => {
      const formData = new FormData();
      formData.append('image', file);
      const {
        data: { url },
      } = await uploadImageAPI(formData);
      const imageUrl = `${process.env.NEXT_PUBLIC_CDN_URL}/${url}`;
      const insertedMarkdown = insertToTextArea(`![](${imageUrl})`);
      if (!insertedMarkdown) {
        return;
      }
      setMarkdown(insertedMarkdown);
    }),
  );
};

interface Props {
  body: string;
  onChangeBody: (v?: string) => void;
}

const Editor = ({ body, onChangeBody }: Props) => {
  return (
    <MDEditor
      value={body}
      onChange={onChangeBody}
      autoFocus
      visibleDragbar={false}
      className={styles.editor}
      onPaste={async (e) => {
        await onImagePasted(e.clipboardData, onChangeBody);
      }}
      onDrop={async (e) => {
        e.preventDefault();
        await onImagePasted(e.dataTransfer, onChangeBody);
      }}
      commands={[
        commands.bold,
        commands.strikethrough,
        commands.hr,
        commands.divider,
        commands.group(
          [commands.title1, commands.title2, commands.title3, commands.title4, commands.title5, commands.title6],
          {
            name: 'title',
            groupName: 'title',
            buttonProps: { 'aria-label': 'Insert title' },
          },
        ),
        commands.link,
        commands.quote,
        commands.code,
        commands.codeBlock,
        commands.comment,
        commands.image,
      ]}
    />
  );
};

export default Editor;
