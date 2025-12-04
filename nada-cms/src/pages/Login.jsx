// import React, { Component } from 'react';
import React, { useState } from "react";
import l from "../assets/nadayahia-logo.png";
// import ko from "../assets/Home_dashboard.png";

import './Login.css';
import { Link } from "react-router-dom";

<meta name="robots" content="noindex, nofollow"></meta>


const Login = () => {

  const [remember, setRemember] = useState(false);
    return (

        <>
        <div className='bg'>
          <div className="mid_all">

        <div className='Log_header'>
            <img src={l} alt='nada logo' />
        </div>

        <section className='mid'>
            <h1 className='t'>Nada Portfolio</h1>
            <form className='form' >
  <label>
  
  <label>
    Email:
    <input type="email" placeholder="Enter your email" />
  </label>
  <br />

    Password:
    <input type="text" placeholder="Enter your password" />
  </label>


  <div className='forget_pass'>
    {/* <div className='row_forget'> */}
      <div className='row_remember'>
         <div className="row_rem">
      <input className="r"
        type="checkbox"
        checked={remember}
        onChange={() => setRemember(!remember)}
      />
      <span>Remember me</span>
    </div>
      {/* </div> */}
        <p className='forg'>forget password?</p>
    </div>
  </div>
  <br />

  {/* <label> */}
    {/* Message: */}
    {/* <textarea placeholder="Write your message"></textarea> */}
  {/* </label> */}
  {/* <br /> */}
 
  <button type="button">Login</button> 
   {/* <Link link:Home /> */}
</form>

        </section>

        </div>
        </div>
        </>


      );
}
 
export default Login;