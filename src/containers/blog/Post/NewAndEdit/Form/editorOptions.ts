import EasyMDE from 'easymde';

type ToolbarButton =
  | 'bold'
  | 'italic'
  | 'quote'
  | 'unordered-list'
  | 'ordered-list'
  | 'link'
  | 'image'
  | 'strikethrough'
  | 'code'
  | 'table'
  | 'redo'
  | 'heading'
  | 'undo'
  | 'heading-bigger'
  | 'heading-smaller'
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'clean-block'
  | 'horizontal-rule'
  | 'preview'
  | 'side-by-side'
  | 'fullscreen'
  | 'guide';

interface CustomAttributes {
  [key: string]: string;
}

interface ToolbarIcon {
  name: string;
  action: string | ((editor: EasyMDE) => void);
  className: string;
  title: string;
  noDisable?: boolean;
  noMobile?: boolean;
  icon?: string;
  attributes?: CustomAttributes;
}

interface ArrayOneOrMore<T> extends Array<T> {
  0: T;
}

interface ToolbarDropdownIcon {
  name: string;
  children: ArrayOneOrMore<ToolbarIcon | ToolbarButton>;
  className: string;
  title: string;
  noDisable?: boolean;
  noMobile?: boolean;
}

type Toolbar = boolean | ReadonlyArray<'|' | ToolbarButton | ToolbarIcon | ToolbarDropdownIcon>;

const TOOLBAR: Toolbar = [
  // https://github.com/Ionaru/easy-markdown-editor/issues/443
  'bold',
  {
    name: 'em',
    action: (editor: EasyMDE) => {
      const cm = editor.codemirror;
      const text = cm.getSelection();
      cm.replaceSelection(`<em>${text}</em>`);
    },
    className: 'fa fa-bold toolbar-em',
    title: 'Emphasize',
  },
  'italic',
  '|',
  'quote',
  '|',
  'link',
  {
    name: 'hr',
    action: (editor: EasyMDE) => {
      const cm = editor.codemirror;
      const text = cm.getSelection();
      cm.replaceSelection(`${text}\n\n---`);
    },
    className: 'fa fa-minus',
    title: 'HR',
  },
  'image',
  {
    name: 'frame320',
    action: (editor: EasyMDE) => {
      const cm = editor.codemirror;
      const text = cm.getSelection();
      cm.replaceSelection(`<div class='image320'>\n\n${text}\n\n</div>`);
    },
    className: 'fa fa-file-image-o',
    title: 'Image Frame 320px',
  },
];

export const OPTIONS = {
  // autofocus: true,
  mode: {
    name: 'markdown',
  },
  shortcuts: {
    em: 'Cmd-E',
  },
  spellChecker: false,
  syncSideBySidePreviewScroll: false,
  // status: false,
  toolbar: TOOLBAR,
  indentWithTabs: false,
  tabSize: 2,
  renderingConfig: {
    codeSyntaxHighlighting: true,
  },
};
