import React, {useState} from 'react';
import Game from './Game';
import Footer from './Footer';
import Welcome from './Welcome';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Welcome />
      <Game
      count={count}
      setCount={setCount}
      />
      <Footer />
    </div>
  );
}

export default App;
