// import React, { Component } from 'react';

// import './Nav.css';

// const Nav = (props) => {
//     return ( <>

//     <div className='icon_row'>
//                 <img src={props.img} alt='Home Dashboard' />
//                 <p className='title'>{props.title}</p>
//             </div>
    
//     </> );
// }
 
// export default Nav;


// import { NavLink } from "react-router-dom";
// import "./Nav.css";

// const Nav = ({ img, title, to }) => {
//   return (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         isActive ? "icon_row active" : "icon_row"
//       }
//     >
//       <img src={img} alt={title} />
//       <p className="title">{title}</p>
//     </NavLink>
//   );
// };

// export default Nav;

import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ img, title, to }) => {
  return (
    <Link to={to} className="icon_row">
      <img src={img} alt={title} />
      <p className="title">{title}</p>
    </Link>
  );
};

export default Nav;

