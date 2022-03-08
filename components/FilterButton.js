export default class FilterButton {
  constructor({ data, handleButtonClick} , buttonSelector) {
    this._handleButtonClick = handleButtonClick
    this._additionalButtonClass = data.buttonClass;
    this._buttonSelector = buttonSelector;
    this._isGrid = data.isGrid;
  }

  _getElement() {
    const buttonElement = document
      .querySelector(this._buttonSelector)
      .content
      .querySelector('.filter__button')
      .cloneNode(true);

    return buttonElement;
  }

  generateButton() {
    this._element = this._getElement();
    this._element.classList.add(this._additionalButtonClass);
    
    this._setEventListeners();
    return this._element;
  }
  _setEventListeners(){
    this._element.addEventListener('click', () => {
      this._handleButtonClick (this._isGrid)
    })
  }
}