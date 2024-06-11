import React from 'react';
import generateCards from './generateCards';


export default function NouvellePartie({ setCards, setFlippedCards, setMatchedCards }) {
  const resetGame = () => {
    setMatchedCards([]);
    setFlippedCards([]);
    setCards(generateCards());
  };

  return <button onClick={resetGame}>Nouvelle partie</button>
}
