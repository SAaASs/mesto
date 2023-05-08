import {openPopup, closeByEsc, closePopup} from './utils.js'
export class Card {
    constructor(templateSelector, currentCardImg, currentCardTitle) {
      this._templateSelector = templateSelector;
      this._currentCardImg = currentCardImg;
      this._currentCardTitle = currentCardTitle;
    }
    _getCardTemplate() {
      const newElement = this._templateSelector.querySelector(".element").cloneNode(true);
      return newElement
    }
    _setEventListeners(newElementImg, newElement) {
      newElementImg.addEventListener("click", openImagePopup);
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
      this._setEventListeners(newElementImg, newElement)
      return newElement;
    }
  }

  function deleteElement(e) {
    e.target.closest(".element").remove();
  }
  function openImagePopup(e) {
    openPopup(imgPopup);
    imgPopupImg.src = e.target.src;
    const imageName = e.target
      .closest(".element")
      .querySelector(".element__bottom-text").textContent;
    imgPopupImg.alt = imageName;
    imgPopupName.textContent = imageName;
  }
  function updateLike(e) {
    e.target.classList.toggle("element__bottom-like_liked");
  }
