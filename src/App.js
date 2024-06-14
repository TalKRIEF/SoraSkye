import React, {useState} from 'react';
import Game from './Game';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className='Main-title'>Memory Game</h1>
      <h3 className='Secondary-title'>Cliquez sur les cartes pour trouver les paires en un minimum de coups !</h3>
      <Game
      count={count}
      setCount={setCount}
      />
      <Footer />
    </div>
  );
}

export default App;
