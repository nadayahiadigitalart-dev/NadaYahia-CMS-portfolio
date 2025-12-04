import React, { Component } from 'react';
import src from './../../node_modules/react-scripts/lib/react-app.d';

import './ProjectCards.css';

import i1 from '../assets/Vector.png';
import i2 from '../assets/eye-line.png';
import i3 from '../assets/delete-bin-line.png';


const ProjectCards = (props) => {
    return ( <>

    <div className='proj_card'>
        <img src={props.img} alt='projects' />
        <p className='t'>{props.t}</p>
        <div className='row_icons'>
            <img src={i1} />
            <img src={i2} />
            <img src={i3} />

        </div>
    </div>
    
    
    </> );
}
 
export default ProjectCards;