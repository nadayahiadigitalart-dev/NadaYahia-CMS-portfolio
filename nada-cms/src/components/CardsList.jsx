// import Card from "./Card";

// const CardsList = ({ cards, onSelect }) => {
//   return (
//     <div className="cards_container">
//       {cards.map((card, index) => (
//         <Card key={index} item={card} onSelect={onSelect} />
//       ))}
//     </div>
//   );
// };

// export default CardsList;



// import Card from "./Card";

// const CardsList = ({ cards }) => {
//   return (
//     <div className="cards-grid">
//       {cards.map((card, index) => (
//         <Card key={index} item={card} />
//       ))}
//     </div>
//   );
// };

// export default CardsList;


import Card from "./Card";
// import '.CardsList.css';
// import CardsList from './CardsList';

const CardsList = ({ cards }) => {
  return (
    <div className="cards_grid">
      {cards.map((card, index) => (
        <Card key={index} item={card} />
      ))}
    </div>
  );
};

export default CardsList;


