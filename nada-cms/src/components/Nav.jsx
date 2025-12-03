import React, { Component } from 'react';

import './Nav.css';

const Nav = (props) => {
    return ( <>

    <div className='icon_row'>
                <img src={props.img} alt='Home Dashboard' />
                <p className='title'>{props.title}</p>
            </div>
    
    </> );
}
 
export default Nav;