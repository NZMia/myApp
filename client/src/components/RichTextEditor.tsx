import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor: React.FC = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('e.target.value', e.target);
  };
  return (
    <form className="richTextEditor">
      {/* Title */}
      <input className="input blotTitle" type="text" aria-label="blog-title" />
      {/* Content */}
      <ReactQuill className="blogContent" />
      {/* <input type="text" aria-label="blog-content" /> */}
      {/* ImageUpload */}
      {/* Button  */}
      <button className="btn--yellow" onClick={handleClick}>
        submit
      </button>
    </form>
  );
};

export default RichTextEditor;
