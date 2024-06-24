import React  from 'react';
import generateCards from './generateCards';

const DifficultyButton = ({setDifficulty, setCards, setFlippedCards, setMatchedCards, setCount}) => {
  const handleDifficultyChange = (size) => {
    setDifficulty(size);
    setCards(generateCards(size));
    setCount(0);
    setFlippedCards([]);
    setMatchedCards([]);
  }
  return (
    <>
      <button className='difficulty-button easy' onClick={() => handleDifficultyChange(3)}>Facile</button>
      <button className='difficulty-button medium' onClick={() => handleDifficultyChange(6)}>Normal</button>
      <button className='difficulty-button hardaf' onClick={() => handleDifficultyChange(12)}>Difficile</button>
    </>
  );
}

export default DifficultyButton;
