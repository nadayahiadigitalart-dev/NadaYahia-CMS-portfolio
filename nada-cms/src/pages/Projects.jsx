import React, { useState } from 'react';
import Menu from "../components/Menu";
import Header from "../components/Header";
import './Projects.css';
// import Categorybutton from '../components/Categorybutton';
// import Main from '../components/Main';
// import Categorybutton from '../components/Categorybutton';
// import ProjectCards from '../components/ProjectCards';
// import img from '../components/Group 97.png';

import uximg1 from "../assets/img6.png";
import uximg2 from "../assets/img1.png";
import uximg3 from "../assets/img2.png";
import uximg4 from "../assets/img3.png";
import uximg5 from "../assets/img4.png";
import uximg6 from "../assets/img5.png";
import ProjectCards from '../components/ProjectCards';

import { Supabase } from '../Supabase';



// const projectData = {
//   "UX UI": [
//     { title: "SoundFix", des: "Date uploaded: 18/11/2025", img: uximg1 },
//     { title: "Giza zo", des: "Description 2", img: uximg2 },
//     { title: "Muegy-web/app", des: "Description 3", img: uximg3 },
//     { title: "Lamar redesign", des: "Description 4", img: uximg4 },
//     { title: "Laliga redesign", des: "Description 5", img: uximg5 },
//     { title: "Kids app", des: "Description 6", img: uximg6 }
//   ],

//   "3D & AR Design": [
//     { title: "3D Project 1", des: "Description A", img: uximg1 },
//     { title: "3D Project 2", des: "Description B", img: uximg1 },
//     { title: "3D Project 3", des: "Description C", img: uximg1 },
//     { title: "3D Project 4", des: "Description D", img: uximg1 },
//     { title: "3D Project 5", des: "Description E", img: uximg1 },
//     { title: "3D Project 6", des: "Description F", img: uximg1 }
//   ],

//   "Front-end": [
//      { title: "frontend1", des: "Description A", img: uximg1 },
//     { title: "front-end2", des: "Description B", img: uximg1 },
//     { title: "front-end3", des: "Description C", img: uximg1 }

//   ],

//   "Graphic Design": [
//      { title: "frontend1", des: "Description A", img: uximg1 },
//     { title: "front-end2", des: "Description B", img: uximg1 },
//     { title: "front-end3", des: "Description C", img: uximg1 }

//   ],

//   "Motion Graphics": [
//      { title: "frontend1", des: "Description A", img: uximg2 },
//     { title: "front-end2", des: "Description B", img: uximg4 },
//     { title: "front-end3", des: "Description C", img: uximg3 }

//   ]
// };






const Projects = () => {

  const categories = Object.keys(projectData);

const [activeCat, setActiveCat] = useState(categories[0]);

const [showCreate, setShowCreate] = useState(false);


const [newTitle, setNewTitle] = useState("");
const [newDesc, setNewDesc] = useState("");

const [showNewCard, setShowNewCard] = useState(false);

const [data, setData] = useState();

async function callAPI(id) {
  const res = await Supabase.from("Projects").select("*")

}



    return ( <>

      <div className='bg'>

<section className='row_big'>
  <div className='left'>
    <Menu />
  </div>

  <div className='right'>
    <Header />

     <div className='horizontal_menu'>
                    {/* <Categorybutton category="UX UI" /> */}
                    {/* <Categorybutton category="3D &AR" />
                    <Categorybutton category="Graphic design" />
                    <Categorybutton category="Front-end" />
                    <Categorybutton category="Motion Graphics" /> */}

                    {/* <Main/> */}

                    </div>

<button onClick={() => setShowCreate(!showCreate)} className='buttonnn'>Create Project</button>

<br>
</br>

{showCreate && (
  <div className="overlay" onClick={() => setShowCreate(false)} />
)}


<div className={`create-panel ${showCreate ? "show" : ""}`}>
    <h3 className='date' >Create New Project</h3>
    <input
  placeholder="Project title"
  value={newTitle}
  onChange={(e) => setNewTitle(e.target.value)}
/>
<br></br>
<textarea
  placeholder="Project description"
  value={newDesc}
  onChange={(e) => setNewDesc(e.target.value)}
/>
    <br></br>
    <button onClick={() => setShowNewCard(true)} >Save</button>
  </div>

  <div className="row_cat">
  {categories.map((cat) => (
    <button
      key={cat}
      className={`category-btn ${activeCat === cat ? "selected" : ""}`}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </button>
  ))}
</div>

<div className="cards_p">
  {/* {projectData[activeCat].map((item, index) => ( */}
    <ProjectCards
      key={data.id}
      img={data.img} alt=""
      t={data.title}
      par={date.des}
    />
  {/* ))} */}

    {/* <div
    className="new-card"
    style={{ display: showNewCard ? "block" : "none" }} 
  >

    
   


  </div> */}

   

</div>



                


      </div>
      </section>
    </div>


    </> );
}
 
export default Projects;