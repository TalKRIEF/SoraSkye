export default function generateCards(size) {
  const cards = [...Array(size).keys()].flatMap(i => [i, i]);
  return cards.sort(() => Math.random() - 0.5);
}
