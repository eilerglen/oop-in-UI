import {defaultCardButton, 
  horizontalCardButton, 
  items,
  cardListSelector,
  filterButtons,
  filterListSelector,
  filterButtonTemplate } from 
'../utils/constants.js';
import Section from '../components/Section.js'

import DefaultCard from '../components/DefaultCard.js';
import HorizontalCard from '../components/HorizontalCard.js';
import FilterButton from '../components/FilterButton.js';


const defaultCardList = new Section({
  data: items,
  renderer: (item) => {
    const card = new DefaultCard(item, '.default-card');
    const cardElement = card.generate();
    defaultCardList.setItem(cardElement);
  }
}, cardListSelector);

const horizontalCardList = new Section({
  data: items,
  renderer: (item) => {
    const card = new HorizontalCard(item, '.horizontal-card');
    const cardElement = card.generate();
    horizontalCardList.setItem(cardElement);
  }
}, cardListSelector);

const filterList = new Section({
  data: filterButtons,
  renderer: (item) => {
    const filterButton = new FilterButton({
      data: item,
    handleButtonClick: (isGrid) => {
      if(isGrid) {
        defaultCardList.clear();
        defaultCardList.renderItems()
      }
      else {
        horizontalCardList.clear();
        horizontalCardList.renderItems()
        }
      }
    }, filterButtonTemplate
   );
    const filterButtonElement = filterButton.generateButton();
    filterList.setItem(filterButtonElement);
  }
}, filterListSelector);


defaultCardList.renderItems();
filterList.renderItems();