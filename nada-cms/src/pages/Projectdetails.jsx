import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Supabase } from "../Supabase";
import Project_details from "../components/Proj_details";

// import React, { useState } from "react";
import "../components/Proj_details.css";
import Menu from "../components/Menu";
import Header from "../components/Header";
import TextEditorInput from "../components/TextEditorInput";

const Projectdetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

    const [title, setTitle] = useState("");
    const [meta, setMeta] = useState("");
    const [slug, setSlug] = useState("");
    const [paragraph, setParagraph] = useState("");
  
    const [image, setImage] = useState("");
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) setImage(URL.createObjectURL(file));
    };
  
    const handleSave = async () => {
  const { error } = await Supabase
    .from("projects")
    .update({
      title,
      meta_desc: meta,
      slug,
      paragraph,
      image_url: image,
    })
    .eq("id", id);

  if (error) {
    console.error(error);
    alert("Error saving project");
  } else {
    alert("Project updated successfully");
  }
};


 useEffect(() => {
  async function fetchProject() {
    const { data, error } = await Supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
    } else {
      setProject(data);
    }
  }

  fetchProject();
}, [id]);

useEffect(() => {
  if (project) {
    setTitle(project.title || "");
    setMeta(project.meta_desc || "");
    setSlug(project.slug || "");
    setParagraph(project.paragraph || "");
    setImage(project.image_url || "");
  }
}, [project]);


  if (!project) return <p>Loading...</p>;

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
                value={meta}
                  onChange={(e) => setSlug(e.target.value)}
              />
            </div>


             <div className="text_input">
              <p className="title">title1</p>
              <input
                className="t_input"
                value={meta}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

         
            <div className="text_input">
              <p className="title">title2</p>
              <input
                className="t_input"
                value={slug}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

           
            <div className="image_input">
              <p className="title">Thumbnail Image</p>
              {image ? <img src={image} className="thumb-preview" /> : <p>No image</p>}
              <input type="file" onChange={handleImageChange} />
            </div>

             <div className="image_input">
              <p className="title"> Images</p>
              <p className="t_input"></p>
              {image ? <img src={image} className="thumb-preview" /> : <p>No image</p>}
              <input type="file" onChange={handleImageChange} />
            </div>

           
            <TextEditorInput
              paragraph_title="Paragraph 1 EN"
              par={paragraph}
            />

             <TextEditorInput
              paragraph_title="Paragraph 2 EN"
              par={paragraph}
            />

            <br />
            <button className="save_btn" onClick={handleSave}>Save Changes</button>

          </section>
        </div>
      </section>
    </div>
  );
}

export default Projectdetails;