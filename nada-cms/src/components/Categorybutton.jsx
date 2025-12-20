// import React, { Component } from 'react';
// import Card from './Card';
// import ProjectCards from './ProjectCards';
 
// const Categorybutton = (props) => {

//     const handleClick = (product) => {
//     localStorage.setItem("selectedCard", JSON.stringify(product));
//     window.location.href = "/productdetails"; // or use React Router
//   };



//     return ( <>

// <section className='row_bu'>

//     <div className='bu'>{props.c1}</div>
//     <div className='bu'>{props.c2}</div>
//     <div className='bu'>{props.c3}</div>
//     <div className='bu'>{props.c4}</div>
//     <div className='bu'>{props.c5}</div>

// </section>

// <section className='projectCards'>
//    <ProjectCards />
// </section>
    
    
//     </> );
// }
 
// export default Categorybutton;


const CategoryButton = ({ options, selected, onSelect }) => {
  return (
    <div className="buttons_row">
      {options.map((option, index) => (
        <button
          key={index}
          className={`category-btn ${selected === option.name ? "active" : ""}`}
          onClick={() => onSelect(option.name)}
        >
          <img src={option.icon} alt={option.name} className="btn-icon" />
          {/* {option.name} */}
        </button>
      ))}
    </div>
  );
};

export default CategoryButton;
