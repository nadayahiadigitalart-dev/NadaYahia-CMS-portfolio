import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './TextInput.css'; // your custom CSS

const TextEditorInput = () => {
  const [value, setValue] = useState('');

  return (
    <div className='text_input'>
      <p className='title'>Paragraph 1 EN</p>
      <ReactQuill 
        value={value} 
        onChange={setValue} 
        placeholder="Write your text here..."
        className='t_input'
      />
    </div>
  );
}

export default TextEditorInput;
