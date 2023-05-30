export class Card {
    constructor(templateSelector, currentCardImg, currentCardTitle, handleCardClick) {
      this._templateSelector = templateSelector;
      this._currentCardImg = currentCardImg;
      this._currentCardTitle = currentCardTitle;
      this._handleCardClick = handleCardClick;
    }
    _getCardTemplate() {
      const newElement = this._templateSelector.querySelector(".element").cloneNode(true);
      return newElement
    }
    _setEventListeners(newElementImg, newElement, clickHandler) {
      newElementImg.addEventListener("click", clickHandler);
      newElement.querySelector(".element__delete").addEventListener("click", deleteElement);
      newElement.querySelector(".element__bottom-like").addEventListener("click", updateLike);
    }
    _createElement() {
      const newElement = this._getCardTemplate()
      const newElementImg = newElement.querySelector(".element__image");
      newElementImg.src = this._currentCardImg;
      newElementImg.alt = this._currentCardTitle;
      newElement.querySelector(".element__bottom-text").textContent =
        this._currentCardTitle;
      this._setEventListeners(newElementImg, newElement, this._handleCardClick)
      return newElement;
    }
  }

  function deleteElement(e) {
    e.target.closest(".element").remove();
  }
  function updateLike(e) {
    e.target.classList.toggle("element__bottom-like_liked");
  }


