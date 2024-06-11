import React from 'react';

function Card({ index, card, isFlipped, onClick }) {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
          {/* Affichage de la face avant de la carte */}
        </div>
        <div className="card-back">
          {card} {/* Affichage de la valeur de la carte */}
        </div>
      </div>
    </div>
  );
}

export default Card;
