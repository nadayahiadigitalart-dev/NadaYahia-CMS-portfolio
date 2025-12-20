// import { useState } from "react";
// // import Buttons from "./Button";
// import CardsList from "./CardsList";
// import Categorybutton from "./Categorybutton";

// const data = {
//   wooden: [
//     {
//       name: "Coloured waves",
//       price: "305€",
//       material: "wooden",
//     //   button: "Buy Now",
//       src: "photo/c26 1-5.png",
//       des: `Bring the ocean to your living room...`
//     }
//   ],
//   soy: [
//     {
//       name: "White bubbles",
//       price: "95€",
//       material: "soy wax",
//     //   button: "Buy Now",
//       src: "photo/c26 1-7.png",
//       des: `Playful and chic...`
//     }
//   ]
// };

// const Main = () => {
//   const [selectedCategory, setSelectedCategory] = useState("wooden");

//   const handleCardSelect = (product) => {
//     localStorage.setItem("selectedCard", JSON.stringify(product));
//     window.location.href = "/productdetails";
//   };

//   return (
//     <div>
//       {/* Category Buttons */}
//       <Categorybutton
//         options={Object.keys(data)}
//         selected={selectedCategory}
//         onSelect={setSelectedCategory}
//       />

//       {/* Cards for that category */}
//       <CardsList
//         cards={data[selectedCategory]}
//         onSelect={handleCardSelect}
//       />
//     </div>
//   );
// };

// export default Main;


// import { useState } from "react";
// import Buttons from "../components/Categorybutton";
// import CardsList from "../components/CardsList";

// // -------- BUTTONS + ICONS --------
// const skillButtons = [
//   { name: "UX", icon: "/icons/ux.png" },
//   { name: "UI", icon: "/icons/ui.png" },
//   { name: "3D & AR", icon: "/icons/ar.png" },
//   { name: "Graphic Design", icon: "/icons/graphic.png" },
//   { name: "Front-end Development", icon: "/icons/frontend.png" },
//   { name: "Motion Graphics", icon: "/icons/motion.png" }
// ];

// // -------- CARDS DATA (6 for each skill) --------
// const cardsData = {
//   UXUI: [
//     { title: "User Research", desc: "Empathy maps, interviews", src: "/cards/ux1.png" },
//     { title: "Personas", desc: "Realistic user models", src: "/cards/ux2.png" },
//     { title: "Journey Maps", desc: "Mapping pain points", src: "/cards/ux3.png" },
//     { title: "Usability Testing", desc: "Testing flows", src: "/cards/ux4.png" },
//     { title: "Wireframes", desc: "Low-fidelity UX flows", src: "/cards/ux5.png" },
//     { title: "Heuristic Evaluation", desc: "UX issue analysis", src: "/cards/ux6.png" },
//   ],
  
//   "3D & AR": [
//     { title: "Modeling", desc: "Spline / Blender basics", src:"/cards/ar1.png" },
//     { title: "Texturing", desc: "Materials & lighting", src:"/cards/ar2.png" },
//     { title: "Animations", desc: "Keyframe work", src:"/cards/ar3.png" },
//     { title: "AR Filters", desc: "Instagram & Spark AR", src:"/cards/ar4.png" },
//     { title: "Scene Setup", desc: "3D environment design", src:"/cards/ar5.png" },
//     { title: "Integration", desc: "3D in websites", src:"/cards/ar6.png" },
//   ],

//   Graphic_Design: [
//     { title: "Visual Design", desc: "Color, typography", src:"/cards/ui1.png" },
//     { title: "Components", desc: "Reusable UI elements", src:"/cards/ui2.png" },
//     { title: "Design Systems", desc: "Consistency rules", src:"/cards/ui3.png" },
//     { title: "Layouts", desc: "Grid & spacing", src:"/cards/ui4.png" },
//     { title: "Responsive UI", desc: "Adaptive design", src:"/cards/ui5.png" },
//     { title: "Prototyping", desc: "Interactive screens", src:"/cards/ui6.png" },
//   ],


//  front_end: [
//   { title: "Placeholder", desc: "Coming soon", src: "/cards/placeholder.png" },
//   { title: "Placeholder", desc: "Coming soon", src: "/cards/placeholder.png" },
//   { title: "Placeholder", desc: "Coming soon", src: "/cards/placeholder.png" },
//   { title: "Placeholder", desc: "Coming soon", src: "/cards/placeholder.png" },
//   { title: "Placeholder", desc: "Coming soon", src: "/cards/placeholder.png" },
//   { title: "Placeholder", desc: "Coming soon", src: "/cards/placeholder.png" },
// ],

// };

// const SkillsPage = () => {
//   const [selected, setSelected] = useState("UX");

//   return (
//     <div className="skills-page">
      
//       {/* Buttons Row */}
//       <Buttons
//         options={skillButtons}
//         selected={selected}
//         onSelect={setSelected}
//       />

//       {/* Cards — change dynamically */}
//       <CardsList cards={cardsData[selected]} />
//     </div>
//   );
// };

// export default SkillsPage;




import { useState } from "react";
import Categorybutton from "../components/Categorybutton";
import CardsList from "../components/CardsList";
import './Main.css';

// ----------------- CATEGORY BUTTONS -----------------
const categories = [
  { name: "UX" },
//   { name: "UI", icon: "/icons/ui.png" },
  { name: "3D & AR" },
  { name: "Graphic Design"},
  { name: "Front-end Development" },
  { name: "Motion Graphics"}
];

// ----------------- CARDS DATA (6 each) -----------------
const cardsData = {
  UX: [
    { title: "User Research", desc: "Empathy maps, interviews", src: "/cards/ux1.png" },
    { title: "Personas", desc: "Realistic user models", src: "/cards/ux2.png" },
    { title: "Journey Maps", desc: "Mapping pain points", src: "/cards/ux3.png" },
    { title: "Usability Testing", desc: "Testing flows", src: "/cards/ux4.png" },
    { title: "Wireframes", desc: "Low-fidelity UX flows", src: "/cards/ux5.png" },
    { title: "Heuristic Evaluation", desc: "UX analysis", src: "/cards/ux6.png" }
  ],

  "3D & AR": [
    { title: "Modeling", desc: "Spline/Blender basics", src: "/cards/ar1.png" },
    { title: "Texturing", desc: "Realistic materials", src: "/cards/ar2.png" },
    { title: "Lighting", desc: "Scene setup", src: "/cards/ar3.png" },
    { title: "AR Filters", desc: "Instagram/Spark AR", src: "/cards/ar4.png" },
    { title: "3D Animation", desc: "Keyframe design", src: "/cards/ar5.png" },
    { title: "Web Integration", desc: "3D on websites", src: "/cards/ar6.png" }
  ],

  "Graphic Design": [
    { title: "Visual Hierarchy", desc: "Typography & layout", src: "/cards/ui1.png" },
    { title: "Color Systems", desc: "Palettes & schemes", src: "/cards/ui2.png" },
    { title: "Components", desc: "Reusable UI elements", src: "/cards/ui3.png" },
    { title: "Spacing Rules", desc: "Grids and balance", src: "/cards/ui4.png" },
    { title: "Responsive UI", desc: "Adaptive screens", src: "/cards/ui5.png" },
    { title: "Prototypes", desc: "Clickable UX/UI", src: "/cards/ui6.png" }
],

  "Front-end Development": [
    { title: "Visual Hierarchy", desc: "Typography & layout", src: "/cards/ui1.png" },
    { title: "Color Systems", desc: "Palettes & schemes", src: "/cards/ui2.png" },
    { title: "Components", desc: "Reusable UI elements", src: "/cards/ui3.png" },
    { title: "Spacing Rules", desc: "Grids and balance", src: "/cards/ui4.png" },
    { title: "Responsive UI", desc: "Adaptive screens", src: "/cards/ui5.png" },
    { title: "Prototypes", desc: "Clickable UX/UI", src: "/cards/ui6.png" }
],
  "Motion Graphics": [
    { title: "Visual Hierarchy", desc: "Typography & layout", src: "/cards/ui1.png" },
    { title: "Color Systems", desc: "Palettes & schemes", src: "/cards/ui2.png" },
    { title: "Components", desc: "Reusable UI elements", src: "/cards/ui3.png" },
    { title: "Spacing Rules", desc: "Grids and balance", src: "/cards/ui4.png" },
    { title: "Responsive UI", desc: "Adaptive screens", src: "/cards/ui5.png" },
    { title: "Prototypes", desc: "Clickable UX/UI", src: "/cards/ui6.png" }
  ]
};

const Main = () => {
  const [selected, setSelected] = useState("UX");

  return (
    <div className="main-page">
      {/* Category Buttons Row */}
      {/* <div className="r"> */}
      <Categorybutton
        options={categories}
        selected={selected}
        onSelect={setSelected}
      />
      {/* </div> */}

      {/* Cards Area */}
      <CardsList cards={cardsData[selected]} />
    </div>



 






  );
};

export default Main;

