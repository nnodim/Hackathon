import React, { useState, useMemo, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const TextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'Start typing here...' }],
    },
  ]);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Slate editor={editor} value={value} onChange={onChange}>
      <Editable />
    </Slate>
  );
};

export default TextEditor;
