import React, { Component } from 'react';


import stat from "../assets/Chart 6.png";


const Card = (props) => {
    return ( <>

    <div className='static'>
        <p className='s'>{props.t}</p>
        <img src={props.stat} alt='statics' />
    </div>

    
    
    
    </> );
}
 
export default Card;