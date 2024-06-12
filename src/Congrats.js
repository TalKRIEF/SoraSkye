import React from 'react';

function Congrats({ matchedCards, totalCards }) {
  const isGameOver = matchedCards.length === totalCards;
  return (
    isGameOver && (
        <p>Félicitations ! Vous avez trouvé toutes les paires !</p>
    )
  );
}

export default Congrats;
