import React, { Component } from 'react';
import Menu from '../components/Menu';
import Header from '../components/Header';

import './Home.css';


const Home = () => {
    return ( <>

      <div className='bg'>
<div className='row'>
<div className='fixed'>
    <Menu />
   </div>

   <Header />

   </div>
    
    </div>
    
    
    </> );
}
 
export default Home;