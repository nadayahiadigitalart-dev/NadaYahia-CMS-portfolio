import React, { Component } from 'react';

import Nav from '../components/Nav';

import Logo from "../assets/nadayahia-logo.png";
import proj_manage from '../assets/icon/projects.png';
import pages from '../assets/icon/arrow.png';
import categories from '../assets/icon/skills.png';
import Blog from '../assets/icon/article.png';
import Contact from '../assets/icon/messg.png';
import Set from '../assets/icon/settings.png';
import Noti from '../assets/icon/planner.png';
import log from '../assets/icon/logout.png';

import home from '../assets/icon/home.png';
// import Menu from '../components/Menu';

import './Menu.css';

const Menu = () => {
    return ( <>

    <div className='bg'>

    <div className='menu'>
        <img src={Logo} alt='nada logo'/>

        <div className='nav'>
             <Nav img={home}  title="Dashboard" />
    <Nav img={proj_manage}  title="Project management" />
    <Nav img={pages}  title="Pages management" />
    <Nav img={categories}  title="Categories" />
    <Nav img={Blog}  title="Blog management" />
    <Nav img={Contact}  title="Contact messages" />
    <br />
    <br />
    <br />
    <br />
    <Nav img={Noti}  title="planner" />
    <Nav img={Set}  title="Profile/Settings" />
    <Nav img={log}  title="Log out" />

        </div>


    </div>
    </div>
    
    
    
    </> );
}
 
export default Menu;