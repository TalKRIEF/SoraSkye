import React, { useState, useEffect } from 'react';
import Card from './Card';
import Congrats from './Congrats';
import generateCards from './generateCards';
import NouvellePartie from './NouvellePartie';
import Counter from './Counter';
import DifficultyButton from './DifficultyButtons';


function Game({count, setCount}) {
  const [difficulty, setDifficulty] = useState(6);
  const [cards, setCards] = useState(generateCards(difficulty));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const resetGame = (difficulty) => {
    const newCards = generateCards(difficulty);
    setFlippedCards([]);
    setMatchedCards([]);
    setCards(newCards);
    setCount(0);
  };

  useEffect(() => {
    setCards(generateCards(difficulty));
  }, [difficulty]);

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
    <>
    <div className='wrapper'>
      <div className='header'>
        <NouvellePartie
          setDifficulty={setDifficulty}
          setCards={setCards}
          setFlippedCards={setFlippedCards}
          setMatchedCards={setMatchedCards}
          setCount={setCount}
          difficulty={difficulty}
        />
        <DifficultyButton
          setDifficulty={setDifficulty}
          setCards={setCards}
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
        <div className={`${difficulty === 3 ? 'easy-grid' : difficulty === 6 ? 'game-board-normal' : 'difficult-grid'}`}>
        {/* <div className='game-board-normal'> */}
          {cards.map((card, index) => (
            <Card
              key={index}
              index={index}
              card={card}
              isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
              onClick={() => handleCardClick(index)}
            />
          ))}
        {/* </div> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default Game;
