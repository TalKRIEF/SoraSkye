import React, { useState, useEffect } from 'react';
import Card from './Card';
import Congrats from './Congrats';
import generateCards from './generateCards';
import NouvellePartie from './NouvellePartie';
import Counter from './Counter';

function Game({count, setCount}) {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards(prev => [...prev, firstIndex, secondIndex]);
      }
      const timeout = setTimeout(() => setFlippedCards([]), 1000);
      return () => clearTimeout(timeout); // Nettoyage de l'effet
    }
  }, [flippedCards, cards]);

  const handleCardClick = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
      setFlippedCards(prev => [...prev, index]);
      setCount(prevCount => prevCount + 1);
    }
  };

  return (
    <div className='wrapper'>
    <div className='header'>
      <NouvellePartie
        setCards = {setCards}
        setFlippedCards={setFlippedCards}
        setMatchedCards={setMatchedCards}
        setCount={setCount}
      />
      <Counter count={count} />
    </div>
      <Congrats
        matchedCards={matchedCards}
        totalCards={cards.length}
        count={count}
      />
      <div className='gameboard-container'>
        <div className="game-board">
          {cards.map((card, index) => (
            <Card
              key={index}
              index={index}
              card={card}
              isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
