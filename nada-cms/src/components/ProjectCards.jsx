import React, { Component } from 'react';
// import src from './../../node_modules/react-scripts/lib/react-app.d';

import './ProjectCards.css';

import i1 from '../assets/Vector.png';
import i2 from '../assets/eye-line.png';
import i3 from '../assets/delete-bin-line.png';
import { Link } from 'react-router-dom';


const ProjectCards = (props) => {
    return ( <>

    <div className='proj_card'>
        <img src={props.img} alt='projects' />
        <p className='t'>{props.t}</p>
        <p className='pr'>{props.par}</p>
        <div className='row_icons'>
            <Link to={props.id} 
                   style={{ textDecoration: "none", color: "inherit" }}
                   
                   >
           <img src={i1} />
           </Link>
            {/* <img src={i2} /> */}
            <div className='buttonn_n' onClick={props.onDelete}>
               <img src={i3} alt="Delete" />
           </div>

        </div>
    </div>
    
    
    </> );
}
 
export default ProjectCards;