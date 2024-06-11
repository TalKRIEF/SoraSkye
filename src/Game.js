import React, { useState, useEffect } from 'react';
import Card from './Card';

// Fonction pour générer les cartes mélangées
function generateCards() {
  // Génère un tableau de paires de cartes
  const cards = [...Array(6).keys()].flatMap(i => [i, i]);
  // Mélange les cartes de manière aléatoire
  return cards.sort(() => Math.random() - 0.5);
}

// Composant principal du jeu
function Game() {
  // Définition des états du jeu
  const [cards, setCards] = useState(generateCards()); // Cartes du jeu
  const [flippedCards, setFlippedCards] = useState([]); // Cartes retournées
  const [matchedCards, setMatchedCards] = useState([]); // Cartes trouvées

  // Effet pour réinitialiser les cartes si plus de deux cartes sont retournées
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards; // Indices des deux cartes retournées
      if (cards[firstIndex] === cards[secondIndex]) { // Vérification si les cartes sont identiques
        setMatchedCards([...matchedCards, firstIndex, secondIndex]); // Ajout des cartes trouvées aux cartes correspondantes
      }
      // Réinitialisation des cartes retournées après 1 seconde
      setTimeout(() => setFlippedCards([]), 750);
    }
  }, [flippedCards]); // Exécution de l'effet lorsque flippedCards change

  // Fonction pour gérer le clic sur une carte
  const handleCardClick = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
      // Ajout de l'index de la carte retournée à flippedCards
      setFlippedCards([...flippedCards, index]);
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
    </div>
  );
}

export default Game;
