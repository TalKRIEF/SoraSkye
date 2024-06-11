import React, { useState, useEffect } from 'react';
import Card from './Card';
import NewGameButton from './NewGameButton';
import generateCards from './generateCards';

function Game() {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards(prev => [...prev, firstIndex, secondIndex]);
      }
      const timeout = setTimeout(() => setFlippedCards([]), 500);
      return () => clearTimeout(timeout); // Nettoyage de l'effet
    }
  }, [flippedCards, cards]);

  const handleCardClick = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
      setFlippedCards(prev => [...prev, index]);
    }
  };

  return (
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
      <NewGameButton
        matchedCards={matchedCards}
        totalCards={cards.length}
        setCards={setCards}
        setFlippedCards={setFlippedCards}
        setMatchedCards={setMatchedCards}
      />
    </div>
  );
}

export default Game;