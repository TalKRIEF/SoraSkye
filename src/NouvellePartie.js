import React from 'react';
import generateCards from './generateCards';
import './button.css'

export default function NouvellePartie({ setCards, setFlippedCards, setMatchedCards }) {
  const resetGame = () => {
    setMatchedCards([]);
    setFlippedCards([]);
    setCards(generateCards());
  };

  return <button onClick={resetGame} className='newGameButton'>Nouvelle partie</button>
}
