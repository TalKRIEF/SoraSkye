import React from 'react';
import generateCards from './generateCards';
import './button.css'

export default function NouvellePartie({ resetGame }) {
  return <button onClick={resetGame} className='newGameButton'>Recommencer</button>
}
