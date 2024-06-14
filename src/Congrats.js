import React from 'react';

function Congrats({ matchedCards, totalCards, count }) {
  const isGameOver = matchedCards.length === totalCards;

  if ((isGameOver && count === totalCards)) {
    return (
      <p>Bravo ! Vous avez réussi à trouver toutes les paires en le minimum de coups possible, chapeau !</p>
    );
  } else if (isGameOver) {
    return (
      <p>Félicitations, vous avez trouvé toutes les paires !</p>
    )
  }

}

export default Congrats;
