
import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import ProjectCards from "../components/ProjectCards";
import "./Projects.css";
import { Supabase } from "../Supabase";
import { Link } from "react-router-dom";

const Projects = () => {
  const [newTitle, setNewTitle] = useState("");
const [newDesc, setNewDesc] = useState("");
const [showCreate, setShowCreate] = useState(false);
const [showNewCard, setShowNewCard] = useState(false);
  const [data, setData] = useState([]);
  

  
  
  const [newProject, setNewProject] = useState(null);
  
  const [newImg, setNewImg] = useState(""); // state for image
  
  // const [loading, setLoading] = useState(true);






  const [categories, setCategories] = useState([]);
  // const [projects, setProjects] = useState([]);
       const [projects, setProjects] = useState([{
        id:"",
        title:"",
        cover_img:"",
        desc:""
}]);
  const [activeCategory, setActiveCategory] = useState("");


  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await Supabase
        .from("Categories")
        .select("title")
        .order("id");

      if (!error && data.length > 0) {
        setCategories(data);
        setActiveCategory(data[0].title);
      }
    }

    fetchCategories();
  }, []);



useEffect(() => {
  async function fetchCategories() {
    const { data, error } = await Supabase
      .from("Categories")
      .select("title")
      .order("id");
      // .order("created_at", { ascending: false });


    if (!error && data.length > 0) {
      setCategories(data);
      setActiveCategory(data[0].title); 
    }
  }
  fetchCategories();
}, []);


useEffect(() => {
  if (!activeCategory) return; // skip if not set yet

  async function fetchProjects() {
    const { data, error } = await Supabase
      .from("projects")
      .select("*")
      .eq("category", activeCategory); // ✅ filter by selected category

    if (!error) {
      setProjects(data || []); // ✅ ensure it's always an array
    } else {
      console.error("Error fetching projects:", error);
    }
  }

  fetchProjects();
}, [activeCategory]);

async function deleteRow(id) {
  try {
    const { data: deletedData, error } = await Supabase
      .from("projects") 
      .delete()
      .eq('id', id);
      // .order("created_at", created_at)

    if (error) {
      console.error("Delete failed:", error);
    } else {
      console.log("Deleted:", deletedData);
      setProjects(prev => prev.filter(p => p.id !== id)); // remove from state
    }
  } catch (err) {
    console.error("Delete error:", err);
  }
}

// if (loading) return <p>Loading...</p>




    // useEffect(()=>{
        
    // async function CallGetAPI() {
    //     const projects = await Supabase.from("projects").select("*")
    //     setProjects(projects.data);
    //     // console.log(projects);

    //     // {projects[0].category.map((c)=>{
    //     //     return <p>{c}</p>
    //     // })}
    //     }

    //      CallGetAPI();

    // },[]
    // )

  return (
    <div className="bg">
      <section className="row_big">
        <div className="left">
          <Menu />
        </div>

        <div className="right">
          <Header />
<Link to='/CreateItem'>
           <button 
          //  onClick={() => setShowCreate(!showCreate)}
            className='buttonnn'>
  Create Project
</button>
</Link>

{/* <div 
className={`create_panel ${
showCreate ? "show" : ""}`}>

  // <h3 className='date'>Create New Project</h3> */}

  
  {/* <input
    placeholder="Project title"
    value={newTitle}
    onChange={(e) => setNewTitle(e.target.value)}
  />
  <br />
  <p className="date2">image size should be 342*246 px</p>
  
  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      if (e.target.files && e.target.files[0]) {
        setNewImg(URL.createObjectURL(e.target.files[0]));
      }
    }}
  />
  <br /><br />

  <button
    onClick={() => {
      // Simple check: must have title and image
      if (newTitle.trim() && newImg) {
        // Create new project object
        const tempProject = {
          id: Date.now(),                  // unique key
          title: newTitle,
          cover_img: newImg,               // uploaded image
          desc: "",                         // optional
          category: activeCategory,         // selected category
          created_at: new Date().toLocaleString(), // for display
        };

        // Add to projects array
        setProjects((prev) => [...prev, tempProject]);

        // Hide create panel and reset inputs
        setShowCreate(true);
        setNewTitle("");
        setNewImg("");
      }
    }}
  >
    Save
  </button>
</div> */}

          
          <div className="row_cat">
            {categories.map((cat) => (
              <button
                key={cat.title}
                className={`category-btn ${
                  activeCategory === cat.title ? "selected" : ""
                }`}
                onClick={() => setActiveCategory(cat.title)}
              >
                {cat.title}
              </button>
            ))}
          </div>

         
          <div className="cards_p">
            {projects.length === 0 ? (
              <p>No projects found for this category.</p>
            ) : (
              projects.map((p) => (

      //            <Link
      //   to={`/ContactMessages/${p.id}`}
      //   style={{ textDecoration: "none", color: "inherit" }}
      // >
       
                <ProjectCards
                  // key={p.id}
                  img={p.cover_img}
                  t={p.title}
                  par={p.created_at}
                  onDelete={() => deleteRow(p.id)}
                  id={`/projects/${p.id}`} 
                />

                // </Link>

                // </Link>
              ))
            )}


      
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;



































// import React, { useState, useEffect } from 'react';
// import Menu from "../components/Menu";
// import Header from "../components/Header";
// import './Projects.css';
// import Categorybutton from '../components/Categorybutton';
// import Main from '../components/Main';

// // import ProjectCards from '../components/ProjectCards';
// // import img from '../components/Group 97.png';

// import uximg1 from "../assets/img6.png";
// import uximg2 from "../assets/img1.png";
// import uximg3 from "../assets/img2.png";
// import uximg4 from "../assets/img3.png";
// import uximg5 from "../assets/img4.png";
// import uximg6 from "../assets/img5.png";
// import ProjectCards from '../components/ProjectCards';

// import { Supabase } from '../Supabase';








// const Projects = () => {

//   // const categories = Object.keys(projectData);

// const [activeCat, setActiveCat] = useState(categories[0]);

// const [showCreate, setShowCreate] = useState(false);


// const [newTitle, setNewTitle] = useState("");
// const [newDesc, setNewDesc] = useState("");

// const [showNewCard, setShowNewCard] = useState(false);

// const [data, setData] = useState();
// const [projectData, setPData] = useState();


// // async function callAPI(id) {
// //   const res = await Supabase.from("projects").select("*")

// // }

// const [projects, setProjects] = useState([]);
// const [activeCategory, setActiveCategory] = useState("UX UI"); // default


// useEffect(() => {
//   async function fetchProjects() {
//     const { data, error } = await Supabase
//       .from("Projects")
//       .select("*")
//       .eq("category", activeCategory); // 🔑 FILTER HERE

//     if (error) {
//       console.error(error);
//     } else {
//       setProjects(data || []);
//     }
//   }

//   fetchProjects();
// }, [activeCategory]);




//     return ( <>

//       <div className='bg'>

// <section className='row_big'>
//   <div className='left'>
//     <Menu />
//   </div>

//   <div className='right'>
//     <Header />

//      <div className='horizontal_menu'>
//                     {/* <Categorybutton category="UX UI" /> */}
//                     {/* <Categorybutton category="3D &AR" />
//                     <Categorybutton category="Graphic design" />
//                     <Categorybutton category="Front-end" />
//                     <Categorybutton category="Motion Graphics" /> */}

//                     {/* <Main/> */}

//                     </div>

// <button onClick={() => setShowCreate(!showCreate)} className='buttonnn'>Create Project</button>

// <br>
// </br>

// {showCreate && (
//   <div className="overlay" onClick={() => setShowCreate(false)} />
// )}


// <div className={`create-panel ${showCreate ? "show" : ""}`}>
//     <h3 className='date' >Create New Project</h3>
//     <input
//   placeholder="Project title"
//   value={newTitle}
//   onChange={(e) => setNewTitle(e.target.value)}
// />
// <br></br>
// <textarea
//   placeholder="Project description"
//   value={newDesc}
//   onChange={(e) => setNewDesc(e.target.value)}
// />
//     <br></br>
//     <button onClick={() => setShowNewCard(true)} >Save</button>
//   </div>

// <div className="row_cat">
//   {categories.map((cat) => (
//     <button
//       key={cat}
//       className={`category-btn ${activeCategory === cat ? "selected" : ""}`}
//       onClick={() => setActiveCategory(cat)}
//     >
//       {cat}
//     </button>
//   ))}
// </div>


// <div className="cards_p">
 
//   {projects.length === 0 ? (
//     <p>No projects found</p>
//   ) : (
//     projects.map((p) => (
//       <ProjectCards
//         key={p.id}
//         img={p.cover_img}
//         t={p.title}
//         par={p.des}
//       />
//     ))
//   )
//   }
 

   

// </div>



                


//       </div>
//       </section>
//     </div>


//     </> );
// }
 
// export default Projects;