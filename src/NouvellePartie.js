import React from 'react';
import generateCards from './generateCards';
import './button.css'

export default function NouvellePartie({ resetGame }) {
  // const resetGame = () => {
  //   setMatchedCards([]);
  //   setFlippedCards([]);
  //   setCards(generateCards());
  //   setCount(0);
  // };

  return <button onClick={resetGame} className='newGameButton'>Recommencer</button>
}
