/* eslint-disable react/no-danger */

'use client';

import MonacoEditor from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import { uploadImageAPI } from '@/services/s3';
import { renderMarkdown } from '@/utils/blog';
import { bodyAtom } from './states';

import './formCommon.scss';
import styles from './index.module.scss';

const Editor = () => {
  const [body, setBody] = useAtom(bodyAtom);
  const [preview, setPreview] = useState('');
  // const em: commands.ICommand = {
  //   name: 'em',
  //   keyCommand: 'em',
  //   buttonProps: { 'aria-label': 'Emphasize' },
  //   icon: (
  //     <svg role='img' width='12' height='12' viewBox='0 0 384 512'>
  //       <path
  //         fill='#fb5fa7'
  //         d='M304.793 243.891c33.639-18.537 53.657-54.16 53.657-95.693 0-48.236-26.25-87.626-68.626-104.179C265.138 34.01 240.849 32 209.661 32H24c-8.837 0-16 7.163-16 16v33.049c0 8.837 7.163 16 16 16h33.113v318.53H24c-8.837 0-16 7.163-16 16V464c0 8.837 7.163 16 16 16h195.69c24.203 0 44.834-1.289 66.866-7.584C337.52 457.193 376 410.647 376 350.014c0-52.168-26.573-91.684-71.207-106.123zM142.217 100.809h67.444c16.294 0 27.536 2.019 37.525 6.717 15.828 8.479 24.906 26.502 24.906 49.446 0 35.029-20.32 56.79-53.029 56.79h-76.846V100.809zm112.642 305.475c-10.14 4.056-22.677 4.907-31.409 4.907h-81.233V281.943h84.367c39.645 0 63.057 25.38 63.057 63.057.001 28.425-13.66 52.483-34.782 61.284z'
  //       />
  //     </svg>
  //   ),
  //   execute: (state, api) => {
  //     api.replaceSelection(`<em>${state.selectedText}</em>`);
  //   },
  // };

  // const img320: commands.ICommand = {
  //   name: 'img320',
  //   keyCommand: 'img320',
  //   buttonProps: { 'aria-label': '320px image' },
  //   icon: (
  //     <svg width='13' height='13' viewBox='0 0 20 20'>
  //       <path
  //         fill='currentColor'
  //         d='M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z'
  //       />
  //     </svg>
  //   ),
  //   execute: (state, api) => {
  //     api.replaceSelection(`<div class='image320'>\n\n${state.selectedText}\n</div>\n`);
  //   },
  // };

  //   Argument of type '() => Promise<void>' is not assignable to parameter of type 'EffectCallback'.
  //   Type 'Promise<void>' is not assignable to type 'void | Destructor'.ts(2345)
  // Effect callbacks are synchronous to prevent race conditions. Put the async function inside:

  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await MyAPI.getData(someId);
  //     // ...
  //   }
  //   fetchData();
  // }, [someId]); // Or [] if effect doesn't need props or state

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
        const {
          data: { url },
        } = await uploadImageAPI(formData);
        const imageUrl = `${process.env.NEXT_PUBLIC_CDN_URL}/${url}`;
        const mdToInsert = `![](${imageUrl})`;
        setBody((prev) => {
          // Monaco Editor에서 강제로 집어넣는 드랍 액션을 무효화한다.
          const lindex = prev.lastIndexOf(file.name);
          return `${prev.substring(0, lindex - 1)}\n\n${mdToInsert}`;
        });
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
      <MonacoEditor
        value={body}
        onChange={onChangeBody}
        defaultLanguage='markdown'
        wrapperProps={{
          className: styles.editor, // 좀 사용 방법이 저질이다.
        }}
        theme='vs-dark'
        options={{
          tabSize: 2,
          wordWrap: 'on',
          fontFamily: 'D2coding ligature',
          fontLigatures: true,
        }}
      />
      <div className={styles.previewWrapper}>
        <div className={styles.preview} dangerouslySetInnerHTML={{ __html: preview }} />
      </div>
    </div>
  );

  // return (
  //   <MDEditor
  //     value={body}
  //     onChange={onChangeBody}
  //     autoFocus
  //     visibleDragbar={false}
  //     className={styles.editor}
  //     onPaste={async (e) => {
  //       await onImagePasted(e.clipboardData, onChangeBody);
  //     }}
  //     onDrop={async (e) => {
  //       e.preventDefault();
  //       await onImagePasted(e.dataTransfer, onChangeBody);
  //     }}
  //     commands={[
  //       commands.bold,
  //       em,
  //       commands.strikethrough,
  //       commands.hr,
  //       commands.divider,
  //       commands.group(
  //         [commands.title1, commands.title2, commands.title3, commands.title4, commands.title5, commands.title6],
  //         {
  //           name: 'title',
  //           groupName: 'title',
  //           buttonProps: { 'aria-label': 'Insert title' },
  //         },
  //       ),
  //       commands.link,
  //       commands.quote,
  //       commands.code,
  //       commands.codeBlock,
  //       commands.comment,
  //       img320,
  //       commands.image,
  //     ]}
  //   />
  // );
};

export default Editor;
