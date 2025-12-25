import React, { Component } from 'react';


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Supabase } from "../Supabase";
import Project_details from "../components/Proj_details";

// import React, { useState } from "react";
import "../components/Proj_details.css";
import Menu from "../components/Menu";
import Header from "../components/Header";
import TextEditorInput from "../components/TextEditorInput";
const CreateItem = () => {

    
    const { id } = useParams();
  const [project, setProject] = useState(null);

    const [title, setTitle] = useState("");
    const [title1, setTitle1] = useState("");
    const [title2, setTitle2] = useState("");

    const [meta, setMeta] = useState("");
    const [slug, setSlug] = useState("");
    const [desc1, setDesc1] = useState("");
  const [desc2,setDesc2] = useState("");
    const [image, setImage] = useState("");
  


    async function addItem() {
        // console.log()

        const res = await Supabase.from("items").insert({"title": title})
    }


    return (<>

    <div className="bg">
      <section className="row_big">
        <div className="left">
          <Menu />
        </div>

        <div className="right">
          <Header />

          {/* <form onSubmit={addItem} > */}

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


             <div className="text_input">
              <p className="title">title1</p>
              <input
                className="t_input"
                value={title1}
                onChange={(e) => setTitle1(e.target.value)}
              />
            </div>

         
            <div className="text_input">
              <p className="title">title2</p>
              <input
                className="t_input"
                value={title2}
                onChange={(e) => setTitle2(e.target.value)}
              />
            </div>

           
            <div className="image_input">
              <p className="title">Thumbnail Image</p>
              {image ? <img src={image} className="thumb-preview" /> : <p>No image</p>}
              <input type="file"
            //    onChange={handleImageChange}
               />
            </div>

             <div className="image_input">
              <p className="title"> Images</p>
              <p className="t_input"></p>
              {image ? <img src={image} className="thumb-preview" /> : <p>No image</p>}
              <input type="file" 
            //   onChange={handleImageChange} 
              />
            </div>

           
          <TextEditorInput
  paragraph_title="Paragraph 1 EN"
  value={desc1}
  onChange={setDesc1}
/>

<TextEditorInput
  paragraph_title="Paragraph 2 EN"
  value={desc2}
  onChange={setDesc2}
/>


            <br />
            <button className="save_btn" 
            // onClick={handleSave}
            onClick={addItem}
            >Save Changes</button>

          </section>
    {/* </form> */}
        </div>
      </section>
    </div>


    
    </>  );
 }
  
 export default CreateItem;