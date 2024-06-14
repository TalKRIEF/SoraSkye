import React from 'react';

const Welcome = () => {
  return (
    <div className='welcome-title-div'>
      <img src="./imgs/icon.png" className='Clipsoulogo' alt="Logo"></img>
      <div className='title-wrappers'>
        <h1 className='Main-title'>Memory Game</h1>
        <h3 className='Secondary-title'>Cliquez sur les cartes pour trouver les paires en un minimum de coups !</h3>
      </div>
    </div>
  )
};

export default Welcome;
