import React from 'react';

function Card(props) {
  const { card, isFlipped, onClick } = props;

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
        </div>
        <div className="card-back">
          <img src={`/imgs/${card}.png`} alt={`Card ${card}`} />
        </div>
      </div>
    </div>
  );
}

export default Card;
