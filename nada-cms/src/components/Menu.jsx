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

  

    <div className='menu'>
        <img src={Logo} alt='nada logo'/>

        <div className='nav'>
             <Nav img={home}  title="Dashboard" to="/home" style={{ textDecoration: "none", color: "inherit" }}/>
    <Nav img={proj_manage}  title="Project management" to="/projects" />
    <Nav img={pages}  title="About Management" to="/" />
    <Nav img={categories}  title="Categories" to="/category" />
    <Nav img={Blog}  title="Blog management" to="/" />
    <Nav img={Contact}  title="Contact messages" to="/ContactMessages" style={{ textDecoration: "none", color: "inherit" }}/>
    <br />
    <br />
    <br />
    <br />
    <Nav img={Noti}  title="planner" to="/" />
    <Nav img={Set}  title="Profile/Settings" to="/" />
    <Nav img={log}  title="Log out" to="/" />

        </div>


    </div>
    
    
    
    
    </> );
}
 
export default Menu;