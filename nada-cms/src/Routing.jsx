import React from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project_details from "./components/Proj_details";
import ContactManage from "./pages/ContactManage";
import MessageDetail from "./pages/MessageDetail";
import Category from "./pages/Category";
import Projectdetails from "./pages/Projectdetails";

// import { Link } from "react-router";


const Routing = () => {
    return ( 
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
           <Route path='/home' element={<Home />} />
           <Route path='/projects' element={<Projects />} />
           <Route path="/projects/:id" element={<Projectdetails />} />
           <Route path='/projectdetails' element={<Project_details />} />
           <Route path='/ContactMessages' element={<ContactManage />} />
           <Route path="/ContactMessages/:id" element={<MessageDetail />} />
           {/* <Route path='/Message' element={<MessageDetail />} /> */}
           {/* <Route path="/contact-manage" element={<ContactManage />} /> */}
           <Route path="/category" element={<Category />} />

           








            

            </Routes>
            </BrowserRouter>
        
        
        
        
        </>



     );
}
 
export default Routing;