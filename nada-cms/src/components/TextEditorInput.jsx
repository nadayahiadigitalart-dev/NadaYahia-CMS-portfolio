
import React, { useEffect, useRef } from "react";
import '../components/TextEditorInput.css';
// import TextEditorInput from './ReactQuill';


const TextEditorInput = ({ paragraph_title, value, onChange }) => {

  
  const editorRef = useRef(null);

   useEffect(() => {
    if (editorRef.current && value !== undefined) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const format = (cmd, value = null) => {
    editorRef.current.focus();
    document.execCommand(cmd, false, value);
  };

  const addLink = () => {
    const url = prompt("Enter link URL:");
    if (url) format("createLink", url);
  };

  const addImage = () => {
    const url = prompt("Enter image URL:");
    if (url) format("insertImage", url);
  };

  return (
    <div className="text_input">
      <p className="title">{paragraph_title}</p>

      <div className="editor-toolbar">

        {/* Headings */}
        <select className="color_select" onChange={(e) => format("formatBlock", e.target.value)}>
          <option value="p">Paragraph</option>
          <option value="h1">H1</option>
          <option value="h2">H2</option>
          <option value="h3">H3</option>
        </select>

        {/* Text styles */}
        <button onClick={() => format("bold")}><b>B</b></button>
        <button onClick={() => format("italic")}><i>I</i></button>
        <button onClick={() => format("underline")}><u>U</u></button>

        {/* Fonts */}
        <select  className="color_select"  onChange={(e) => format("fontName", e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times</option>
          <option value="Poppins Reagular">Poppins</option>
          <option value="Poppins Extralight">Poppins Extralight</option>
          <option value="Poppins light">Poppins light</option>
          <option value="Poppins medium">Poppins Medium</option>
          <option value="Poppins semibold">Poppins Semibold</option>



        </select>

        <select className="color_select" onChange={(e) => format("fontSize", e.target.value)}>
          <option value="2">Small</option>
          <option value="3">Normal</option>
          <option value="4">Large</option>
          <option value="5">XL</option>

        </select>

        {/* Lists */}
        <button onClick={() => format("insertUnorderedList")}>• List</button>
        <button onClick={() => format("insertOrderedList")}>1. List</button>

        {/* Alignment */}
        <button onClick={() => format("justifyLeft")}>⬅</button>
        <button onClick={() => format("justifyCenter")}>⬍</button>
        <button onClick={() => format("justifyRight")}>➡</button>

        {/* Media */}
        <button onClick={addLink}>🔗</button>
        <button onClick={addImage}>
            {/* 🖼 */}
            🖼️🔗
            </button>
      </div>

    <div
        ref={editorRef}
        contentEditable
        className="editor-area"
        onInput={(e) => onChange(e.currentTarget.innerHTML)}
      >
    </div>
      

    </div>
  );
};

export default TextEditorInput;


