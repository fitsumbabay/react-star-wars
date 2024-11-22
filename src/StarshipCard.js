import React from "react";
import "./StarshipCard.css"; // Optional: If you want to add specific styles for the card

const StarshipCard = ({ starship }) => {
  return (
    <div className="starship-card">
      <h2>{starship.name}</h2>
      <p>
        <strong>Model:</strong> {starship.model}
      </p>
      <p>
        <strong>Manufacturer:</strong> {starship.manufacturer}
      </p>
      <p>
        <strong>Cost:</strong> {starship.cost_in_credits} credits
      </p>
      <p>
        <strong>Crew:</strong> {starship.crew}
      </p>
      <p>
        <strong>Passengers:</strong> {starship.passengers}
      </p>
    </div>
  );
};

export default StarshipCard;
