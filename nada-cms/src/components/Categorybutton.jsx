import React, { Component } from 'react';
import Card from './Card';
import ProjectCards from './ProjectCards';
 
const Categorybutton = (props) => {

    





    return ( <>

<section className='row_bu'>

    <div className='bu'>{props.c1}</div>
    <div className='bu'>{props.c2}</div>
    <div className='bu'>{props.c3}</div>
    <div className='bu'>{props.c4}</div>
    <div className='bu'>{props.c5}</div>

</section>

<section className='projectCards'>
   <ProjectCards />
</section>
    
    
    </> );
}
 
export default Categorybutton;