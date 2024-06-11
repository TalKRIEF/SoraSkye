export default function generateCards() {
  const cards = [...Array(2).keys()].flatMap(i => [i, i]);
  return cards.sort(() => Math.random() - 0.5);
}
