import React, { Component } from 'react';
import Menu from '../components/Menu';
import Header from '../components/Header';

import m from "../assets/Group 1.png";

import './Home.css';
import VerySmallCard from '../components/VerySmallCard';
import Card from '../components/Card';

import s from '../assets/Chart 6.png';
import s2 from '../assets/Chart 7.png';
import s3 from '../assets/Chart 8.png';

const Home = () => {
    return ( <>

      <div className='bg'>
<section className='bigrow'>
{/* <div className='fixed'> */}
    <Menu />
   {/* </div> */}

<div className='seventy5'>
   {/* <div className='col'> */}

   <Header />

   <div className='big_col'>

   <div className='row_cards'>
   <VerySmallCard bu="+add project" />
   <VerySmallCard bu="+add blog post" />
   <VerySmallCard bu="view planner" />

   </div>

      <div className='bigcard'>
        <div className='col'>
            <p className='bf'>
Global Visitor Distribution<br/>
Australia — 1.86k Visitors
            </p>

            <p className='p'>Australia — 1.86k (12%)<br />
Egypt — 2.4k<br />
UAE — 980<br />
USA — 720</p>

        </div>

            <img src={m} alt='map' />
    </div>

    <Card stat={s} t="Project Views" />
    <Card stat={s2} t="Blogs Views" />
    <Card stat={s3} t="Total visitors" />

   </div>

   {/* </div> */}
</div>

   </section>
    
    </div>
    
    </> );
}
 
export default Home;