import React from 'react';

// Composant Card
function Card(props) {
  // Déstructuration des props dans une variable
  const { index, card, isFlipped, onClick } = props;

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
