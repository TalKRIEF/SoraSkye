import React from 'react';
import generateCards from './generateCards';

function NewGameButton({ matchedCards, totalCards, setCards, setFlippedCards, setMatchedCards }) {
  const isGameOver = matchedCards.length === totalCards;

  const resetGame = () => {
    setCards(generateCards());
    setFlippedCards([]);
    setMatchedCards([]);
  };

  return (
    isGameOver && (
      <div className="game-over">
        <p>Félicitations ! Vous avez trouvé toutes les paires !</p>
        <button onClick={resetGame}>Nouvelle partie</button>
      </div>
    )
  );
}

export default NewGameButton;