import React from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project_details from "./components/Proj_details";
import ContactManage from "./pages/ContactManage";
import MessageDetail from "./pages/MessageDetail";

// import { Link } from "react-router";


const Routing = () => {
    return ( 
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
           <Route path='/home' element={<Home />} />
           <Route path='/projects' element={<Projects />} />
           <Route path='/projectdetails' element={<Project_details />} />
           <Route path='/ContactMessages' element={<ContactManage />} />
           <Route path='/Message' element={<MessageDetail />} />






            

            </Routes>
            </BrowserRouter>
        
        
        
        
        </>



     );
}
 
export default Routing;