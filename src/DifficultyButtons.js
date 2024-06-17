import React  from 'react';

const DifficultyButton = ({ setDifficulty}) => {
  return (
    <>
      <button className='difficulty-button' onClick={() => setDifficulty(3)}>Facile</button>
      <button className='difficulty-button' onClick={() => setDifficulty(6)}>Normal</button>
      <button className='difficulty-button' onClick={() => setDifficulty(12)}>Difficile</button>
    </>
  );
}

export default DifficultyButton;
