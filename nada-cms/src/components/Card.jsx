// import React, { Component } from 'react';


// import stat from "../assets/Chart 6.png";


// const Card = (props) => {
//     return ( <>

//     <div className='static'>
//         <p className='s'>{props.t}</p>
//         <img src={props.stat} alt='statics' />
//     </div>

    
    
    
//     </> );
// }
 
// export default Card;


// const Card = ({ item, onSelect }) => {
//   return (
//     <div className="card">
//       <img src={item.src} alt={item.name} />
//       <p className="font24">{item.name}</p>

//       <div className="row_w">
//         <p className="font20">{item.price}</p>
//         <p className="font20_">{item.material}</p>
//       </div>

//       <div className="bu" onClick={() => onSelect(item)}>
//         {item.button}
//       </div>
//     </div>
//   );
// };

// export default Card;


// const Card = ({ item }) => {
//   return (
//     <div className="skill-card">
//       <img src={item.src} alt={item.title} className="card-img" />
//       <h3>{item.title}</h3>
//       <p>{item.desc}</p>
//     </div>
//   );
// };

// export default Card;


const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.src} alt={item.title} className="card-img" />
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  );
};

export default Card;


