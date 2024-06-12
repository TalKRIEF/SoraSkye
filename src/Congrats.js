import React from 'react';
// import generateCards from './generateCards';

function Congrats({ matchedCards, totalCards }) {
  const isGameOver = matchedCards.length === totalCards;

  // const resetGame = () => {
  //   generateCards();
  //   setFlippedCards([]);
  //   setMatchedCards([]);
  // };

  return (
    isGameOver && (
        <p>Félicitations ! Vous avez trouvé toutes les paires !</p>
    )
  );
}

export default Congrats;
