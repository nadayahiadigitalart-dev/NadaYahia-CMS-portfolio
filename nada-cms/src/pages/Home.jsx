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
import k from '../assets/kids most view.png';

const Home = () => {
    return ( <>

      <div className='bg'>
{/* <section className='bigrow'> */}
{/* <div className='fixed'> */}
    <Menu />
   {/* </div> */}

<div className='seventy'>
   {/* <div className='col'> */}

   <Header />

   <div className='big_col'>

   <div className='row_cards'>
   <VerySmallCard bu="+add project" />
   <VerySmallCard bu="+add blog post" />
   <VerySmallCard bu="view planner" />

   </div>

   {/* <br></br> */}

      {/* <div className='bigcard'> */}
      <div className='map'>

        <div className='col'>
            <p className='bf'>
Global Visitor Distribution<br/>
Australia — 1.86k Visitors
            </p>

            <p className='pp'>Australia — 1.86k (12%)<br />
Egypt — 2.4k<br />
UAE — 980<br />
USA — 720</p>

        </div>

        <img className='map_photo' src={m} alt='map' />
        </div>
    </div>
    {/* </div> */}

    <div className='row_cards_stat'>

    <Card stat={s} t="Project Views" />
    <Card stat={s2} t="Blogs Views" />
    <Card stat={s3} t="Total visitors" />

</div>


    {/* <Card t="Recent Activity" 
    desc={[
        "New message from Sarah M.",
        
        "LaLiga Project updated",
        
        "New visitor peak today",
        "Skills updated"
    ]}
/> */}

<br></br>

<div className='row_third'>
<div className='card2'>
    <p className='titlee'>Recent Activity</p>
    <p className='parag'>
        -New message from Sarah M. <br></br>
        -“LaLiga Project” updated<br></br>
        -New visitor peak today<br></br>
        -Skills updated
    </p>
</div>

<div className='most_views'>
    <div className='col_most'>
    <p className='titlee'>Most Viewed Project</p>
    <p className='parag'>Kids app <br></br>
    24% of total traffic </p>
    </div>

    <img src={k} alt='project'/>
    
</div>


</div>



    



   </div>

   {/* </div> */}
</div>

   {/* </section> */}
    
    {/* </div> */}

    <br></br>
    <br></br>
    <br></br>

    
    </> );
}
 
export default Home;