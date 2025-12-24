
import React, { useState } from "react";
import "./Proj_details.css";
import Menu from "./Menu";
import Header from "./Header";
import TextEditorInput from "./TextEditorInput";

const Project_details = ({ projects }) => {
  // editable fields
  const [title, setTitle] = useState("");
  const [meta, setMeta] = useState("");
  const [slug, setSlug] = useState("");
  const [paragraph, setParagraph] = useState("");

  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSave = () => {
  const newProject = { title, meta, slug, paragraph, image };
  fetch("/api/projects", {
    method: "POST", // for create
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProject)
  })
    .then(res => res.json())
    .then(data => console.log("Created project:", data))
    .catch(err => console.error(err));
};


  return (
    <div className="bg">
      <section className="row_big">
        <div className="left">
          <Menu />
        </div>

        <div className="right">
          <Header />

          <section className="inputs">
           
            <div className="text_input">
              <p className="title">Page Title</p>
              <input
                className="t_input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

          
            <div className="text_input">
              <p className="title">Meta Description</p>
              <input
                className="t_input"
                value={meta}
                onChange={(e) => setMeta(e.target.value)}
              />
            </div>

         
            <div className="text_input">
              <p className="title">Slug</p>
              <input
                className="t_input"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>

           
            <div className="image_input">
              <p className="title">Thumbnail Image</p>
              {image ? <img src={image} className="thumb-preview" /> : <p>No image</p>}
              <input type="file" onChange={handleImageChange} />
            </div>

           
            <TextEditorInput
              paragraph_title="Paragraph 1 EN"
              par={paragraph}
            />

            <br />
            <button className="save_btn" onClick={handleSave}>Save Changes</button>

          </section>
        </div>
      </section>
    </div>
  );
};

export default Project_details;





