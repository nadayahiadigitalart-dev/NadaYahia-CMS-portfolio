import React, { Component } from 'react';
import Menu from "../components/Menu";
import Header from "../components/Header";
import './Projects.css';
import Categorybutton from '../components/Categorybutton';
// import Categorybutton from '../components/Categorybutton';
// import ProjectCards from '../components/ProjectCards';
// import img from '../components/Group 97.png';


const Projects = () => {
    return ( 

<>
      {/* <div className='bg'>
        <div className='row'>
          <div className='fixed'>
            <Menu />
          </div>

          <div className='seventy5'>
            <div className='col'>
              <Header />

              <div className='big_col'>


                <div className='horizontal_menu'>
                    <Categorybutton category="UX UI" />
                    <Categorybutton category="3D &AR" />
                    <Categorybutton category="Graphic design" />
                    <Categorybutton category="Front-end" />
                    <Categorybutton category="Motion Graphics" />

                </div>

                <div className='add_bu'>+add project</div>

                <div className='projectscards'>
                    <ProjectCards img={img} t="Kids app" />
                    <ProjectCards img={img} t="Kids app" />
                    <ProjectCards img={img} t="Kids app" />
                    <ProjectCards img={img} t="Kids app" />
                    <ProjectCards img={img} t="Kids app" />
                    <ProjectCards img={img} t="Kids app" />

                </div>



              </div>

            </div>
          </div>
        </div>
      </div> */}

      <div className='bg'>

<section className='row_big'>
  <div className='left'>
    <Menu />
  </div>

  <div className='right'>
    <Header />

     <div className='horizontal_menu'>
                    <Categorybutton category="UX UI" />
                    {/* <Categorybutton category="3D &AR" />
                    <Categorybutton category="Graphic design" />
                    <Categorybutton category="Front-end" />
                    <Categorybutton category="Motion Graphics" /> */}

                </div>

  </div>
</section>

</div>


    </>
  );
};
 
export default Projects;