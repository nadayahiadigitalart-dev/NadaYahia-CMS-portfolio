import React, { Component } from 'react';
import src from './../../node_modules/react-scripts/lib/react-app.d';

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