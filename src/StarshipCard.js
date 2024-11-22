import React from "react";
import "./StarshipCard.css"; 

const StarshipCard = ({ starship }) => {
  return (
    <div className="starship-card">
      <h2>{starship.name}</h2>
    </div>
  );
};

export default StarshipCard;
