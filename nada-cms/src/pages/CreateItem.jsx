import React, { Component } from 'react';


import { useNavigate, useParams } from "react-router-dom";
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
    const [heroimg, setHimg] = useState("");

  
    const [categories, setCategories] = useState([]);
const [categoryId, setCategoryId] = useState("");

const Navigate = useNavigate();


    async function addItem() {
        // console.log()

        const res = await Supabase.from("projects").insert({"title": title})
    }

    async function save() {
        const {data, error} = await Supabase.from("projects").insert({
            "title": title, "title1":title1, "title2":title2, "desc1":desc1,
"desc2":desc2, "images": image,  "heroimg":heroimg, "slug": slug, "meta_desc": meta , category: categoryId 
        })
        .select();
        // .eq("id", id)

   console.log("Supabase response:", { data, error });

  if (error) {
    alert(error.message);
    return;
  }

  alert("Project created successfully!");



  // Navigate(`/projects/${data.id}`);
  Navigate(`/projects/${data[0].id}`);


    }


    useEffect(() => {
  async function fetchCategories() {
    const { data, error } = await Supabase
      .from("Categories")
      .select("*")
      .order("title", { ascending: true });

    if (!error) setCategories(data);
  }

  fetchCategories();
}, []);


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
  <p className="title">Category</p>

  <select
    className="t_input"
    value={categoryId}
    onChange={(e) => setCategoryId(e.target.value)}
  >
    <option value="">Select category</option>

    {categories.map((cat) => (
      <option key={cat.id} value={cat.id}>
        {cat.title}
      </option>
    ))}
  </select>
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
              <p className="title"> Hero Image</p>
              <p className="t_input"></p>
              {image ? <img src={heroimg} className="thumb-preview" /> : <p>No image</p>}
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
           
            onClick={save}
            // onClick={() => Navigate(`/projects/${p.id}`)}
            >Save Changes</button>

          </section>
    {/* </form> */}
        </div>
      </section>
    </div>


    
    </>  );
 }
  
 export default CreateItem;