import React, { Component } from 'react';

import Contact from '../assets/icon/messg.png';
import Noti from '../assets/icon/planner.png';
import p from '../assets/icon/p.png';

import './Header.css';

const Header = () => {
    return ( <>

    <div className='welc'> 
        <p className="p">Welcome, Nada!</p>
        <div className='row'>
        <p className='date'>Wed, 3 Dec</p> 
        <img src={Contact} alt='icons_message' />
        <img src={Noti} alt='icon_planner' />
        <img src={p} alt='icons_profil' />

         </div>
                
           
       
         </div>
    
    
    </> );
}
 
export default Header;