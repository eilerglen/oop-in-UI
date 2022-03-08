import { cardList, items } from './constants.js';
import DefaultCard from '../components/DefaultCard.js';
import HorizontalCard from '../components/HorizontalCard.js';

const renderElements = (isGrid) => {
  cardList.innerHTML = '';
  items.forEach((item) => {
    const card = isGrid
      ? new DefaultCard(item, '.default-card')
      : new HorizontalCard(item, '.horizontal-card');

    const cardElement = card.generate();
    cardList.append(cardElement);
  });
};

export {renderElements}