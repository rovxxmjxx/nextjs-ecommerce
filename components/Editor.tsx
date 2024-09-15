import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import React, { Dispatch, SetStateAction } from 'react';

import dynamic from 'next/dynamic';
import { EditorProps } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { read } from 'fs';

const Editor = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then((module) => module.Editor), {
  ssr: false,
});

type CustomEditorProps = {
  editorState: EditorState;
  readOnly?: boolean;
  onEditorStateChange?: Dispatch<SetStateAction<EditorState | undefined>>;
  onReadOnlyChange?: Dispatch<SetStateAction<boolean>>;
  onSave?: () => void;
};

export default function CustomEditor({
  editorState,
  onEditorStateChange,
  readOnly = false,
  onReadOnlyChange,
  onSave,
}: CustomEditorProps) {
  return (
    <div>
      <Editor
        readOnly={readOnly}
        toolbarHidden={readOnly}
        editorState={editorState}
        toolbarClassName="wrapper-class"
        wrapperClassName="editorToolbar-hidden"
        editorClassName="editor-class"
        toolbar={{
          options: ['inline', 'list', 'textAlign', 'link'],
        }}
        localization={{ locale: 'ko' }}
        onEditorStateChange={onEditorStateChange}
      />
      {/* {readOnly ? (
        <button onClick={() => onReadOnlyChange(false)}>Edit</button>
      ) : (
        <button onClick={onSave}>Save</button>
      )} */}
    </div>
  );
}
