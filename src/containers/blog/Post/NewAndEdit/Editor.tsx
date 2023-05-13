'use client';

import dynamic from 'next/dynamic';
import * as commands from '@uiw/react-md-editor/lib/commands';

import './form.css';
import styles from './index.module.scss';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

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
