import React from 'react';

const Toolbar = ({ editor }) => {
  const handleClick = (format) => {
    editor.toggleMark(format);
  };

  return (
    <div>
      <button onClick={() => handleClick('bold')}>Bold</button>
      <button onClick={() => handleClick('italic')}>Italic</button>
      <button onClick={() => handleClick('underline')}>Underline</button>
    </div>
  );
};

export default Toolbar;
