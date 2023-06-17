export class Card {
    constructor(templateSelector, handleCardClick, deletePopup, cardData, owner, api, likeState) {
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
      this._deletePopup = deletePopup
      this._cardData = cardData
      this._owner = owner
      this._api = api
      this._likeState = likeState
    }
    _getCardTemplate() {
      const newElement = this._templateSelector.querySelector(".element").cloneNode(true);
      return newElement
    }
    _setEventListeners(newElementImg, newElement, clickHandler) {
      newElementImg.addEventListener("click", clickHandler);
      const trashCan = newElement.querySelector(".element__delete")
      if (trashCan != null) {
        trashCan.addEventListener("click", this._deletePopup);
      }
      newElement.querySelector(".element__bottom-like").addEventListener("click", this._updateLike.bind(this));
    }
    createElement() {
      const newElement = this._getCardTemplate()
      const trashCan = newElement.querySelector(".element__delete")
      if (this._cardData.owner._id != this._owner) {
        trashCan.remove()
      }
      //console.log(this._cardData)
      if (this._likeState) {
        newElement.querySelector(".element__bottom-like").classList.add("element__bottom-like_liked")
      }
      trashCan.setAttribute("data-id", this._cardData._id)
      newElement.querySelector(".element__bottom-like-counter").textContent = this._cardData.likes.length
      const newElementImg = newElement.querySelector(".element__image");
      newElementImg.src = this._cardData.link;
      newElementImg.alt = this._cardData.name;
      newElement.querySelector(".element__bottom-text").textContent =
        this._cardData.name;
      this._setEventListeners(newElementImg, newElement, this._handleCardClick)
      return newElement;
    }
    _updateLike(e) {
      const isIn = (element) => element._id == this._owner
      const likeCounter = e.target.closest(".element__bottom-like-container").querySelector(".element__bottom-like-counter")
      const likeClassList = e.target.classList
      if (!this._cardData.likes.some(isIn)) {
        this._api.giveLike(this._cardData._id).then((result) =>{this._cardData = result,likeClassList.toggle("element__bottom-like_liked"), likeCounter.textContent = result.likes.length})
      }
      else {
        this._api.stealLike(this._cardData._id).then((result) =>{this._cardData = result,likeClassList.toggle("element__bottom-like_liked"), likeCounter.textContent = result.likes.length})
      }
    }
  }
