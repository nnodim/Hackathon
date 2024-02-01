import React, { useState } from 'react'
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import TextEditor from './TextEditor';

const MyEditor = () => {
  var modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
      [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ]
  };

  var formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];

  const handleProcedureContentChange = (content) => {
    console.log("content---->", content);
  };

  const [showEditor, setShowEditor] = useState(false);
  const toggleEditor = () => {
    setShowEditor(!showEditor);
  };
  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto">
      <input type='text' placeholder='Article Title' className='bg-transparent outline-none w-full max-w-3xl text-3xl'/>
  {/* <h1 className="text-center">Article Title</h1> */}
  <div className="w-full max-w-3xl mt-4">
    <button onClick={toggleEditor} className="flex items-center">
      {showEditor ? '' : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      )}
    </button>
  </div>
  {showEditor && (
    <div className="w-full max-w-3xl mt-4">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="Write your content ...."
        onChange={handleProcedureContentChange}
        
      />
    </div>
  )}
</div>


  )
}
export default MyEditor