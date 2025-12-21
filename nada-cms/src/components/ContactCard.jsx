import React, { Component } from 'react';

import './ContactCard.css';
// import ContactCard from './ContactCard';
import i2 from '../assets/eye-line.png';
import i3 from '../assets/delete-bin-line.png';

const ContactCard = (props) => {
    return ( <>
<div className='cont_row'>
    <div className='cont_card'>
        <img src={props.img} alt={props.alt}/>
        <div className='col_email'>
            <p className='font'>{props.name}</p>
            <p className='font'>{props.email}</p>

        </div>
            <p className='font'>{props.date}</p>
            <div className='font2'>{props.status}</div>
            <p className='font'>{props.sub}</p>
            <button className='buttonn'>View</button>

    </div>
     <div className='row_icons'>

                <img src={i2} />
                <img src={i3} />
    
            </div>

    </div>

    
    
    
    
    </> );
}
 
export default ContactCard;