// import React, { Component } from 'react';
import React, { useState } from "react";


import './Proj_details.css';
import Menu from './Menu';
import Header from './Header';
import TextEditorInput from './TextEditorInput';

const Project_details = (props) => {

      const [image, setImage] = useState(null);

  // Called when user selects a file
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a preview URL
      setImage(URL.createObjectURL(file));
    }
  };


    return ( <>
    
     <div className='bg'>

<section className='row_big'>
  <div className='left'>
    <Menu />
  </div>

  <div className='right'>
    <Header />

    <section className='inputs'>
        <p className='f'>{props.smalltitle}</p>
        <div className='text_input'>
            <p className='title'>Page Title</p>
            <input className='t_input' placeholder=''></input>
        </div>

        <div className='text_input'>
            <p className='title'>Meta Description</p>
            <input className='t_input' placeholder=''></input>
        </div>

        <div className='text_input'>
            <p className='title'>Slug</p>
            <input className='t_input' placeholder=''></input>
        </div>

        <div className='image_input'>
            <div className='row_title'>
                <p className='title'>Add Thubnail Image</p>
                <div className='row_iconss'>
                    {/* <img src={props.th_img} alt='ux_ui_projectimage'/> */}

                       {image ? (
          <img src={image} alt="Thumbnail Preview" className="thumb-preview" />
        ) : (
          <p>No image selected</p>
        )}

         {/* File input */}
      <input
        className="img_input"
        type="file"
        accept=".png,.jpg,.jpeg,.gif,video/*"
        onChange={handleImageChange}
      />

      
    </div>
        </div>
                    
                </div>

                 <div className='row_title'>
                <p className='title'>Add Hero Images </p>
                <div className='row_iconss'>
                    {/* <img src={props.th_img} alt='ux_ui_projectimage'/> */}

                       {image ? (
          <img src={image} alt="Thumbnail Preview" className="thumb-preview" />
        ) : (
          <p>No image selected</p>
        )}

         {/* File input */}
      <input
        className="img_input"
        type="file"
        accept=".png,.jpg,.jpeg,.gif,video/*"
        onChange={handleImageChange}
      />

      
    </div>
        </div>

            <div className='text_input'>
            <p className='title'>Title 1 EN</p>
            <input className='t_input' placeholder=''></input>
            </div>

            <div className='text_input'>
            <p className='title'>Title 1 AR</p>
            <input className='t_input' placeholder=''></input>
            </div>

             {/* <div className='text_input'>
            <p className='title'>Paragraph 2 A</p>
            <input className='t_input' placeholder=''></input>
            </div> */}

            <TextEditorInput paragraph_title="Paragraph 1 EN"/>
            <TextEditorInput paragraph_title="Paragraph 1 AR"/>


             <div className='text_input'>
            <p className='title'>Title 2 EN</p>
            <input className='t_input' placeholder=''></input>
            </div>

             <div className='text_input'>
            <p className='title'>Title 2 AR</p>
            <input className='t_input' placeholder=''></input>
            </div>

             <div className='row_title'>
                <p className='title'>Add Graphics</p>
                <div className='row_iconss'>
                    {/* <img src={props.th_img} alt='ux_ui_projectimage'/> */}

                       {image ? (
          <img src={image} alt="Thumbnail Preview" className="thumb-preview" />
        ) : (
          <p>No image selected</p>
        )}

         {/* File input */}
      <input
        className="img_input"
        type="file"
        accept=".png,.jpg,.jpeg,.gif,video/*,.gltf,.glb"
        onChange={handleImageChange}
      />

      
    </div>
        </div>

        <br></br>
        <br></br>


        <button className="">Save Changes</button>
                    

        
    </section>
    </div>


    </section>
    </div>
    
    
    </> );
}
 
export default Project_details;