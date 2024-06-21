import React from 'react';
import './button.css'

export default function NouvellePartie({ resetGame }) {
  return <button onClick={resetGame} className='newGameButton'>Recommencer</button>
}
