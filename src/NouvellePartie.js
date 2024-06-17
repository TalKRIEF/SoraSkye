import React from 'react';
import generateCards from './generateCards';
import './button.css'

export default function NouvellePartie({ setCards, setFlippedCards, setMatchedCards, setCount, difficulty }) {
  const resetGame = () => {
    setCount(0);
    setCards(generateCards(difficulty))
    setMatchedCards([]);
    setFlippedCards([]);
  }
  return <button onClick={resetGame} className='newGameButton'>Recommencer</button>
}
