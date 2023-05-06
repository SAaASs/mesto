const elementsContainer = document.querySelector(".elements");
export class Card {
    constructor(templateSelector, currentCardImg, currentCardTitle) {
      this._templateSelector = templateSelector;
      this._currentCardImg = currentCardImg;
      this._currentCardTitle = currentCardTitle;
    }
    _createElement() {
      let newElement = this._templateSelector.querySelector(".element").cloneNode(true);
      let newElementImg = newElement.querySelector(".element__image");
      newElementImg.src = this._currentCardImg;
      newElementImg.alt = this._currentCardTitle;
      newElement.querySelector(".element__bottom-text").textContent =
        this._currentCardTitle;
      newElementImg.addEventListener("click", openImagePopup);
      newElement.querySelector(".element__delete").addEventListener("click", deleteElement);
      newElement
        .querySelector(".element__bottom-like")
        .addEventListener("click", updateLike);
      return newElement;
    }
    _addElement(event) {
      elementsContainer.prepend(
        this._createElement()
      );
    }
  }
  const imgPopupImg = document.querySelector("#full-image-popup__img");
  const imgPopupName = document.querySelector(".full-image-popup__img-name");
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
  function openPopup(targetPopup) {
    targetPopup.classList.add("popup_opened");
    document.addEventListener("keydown", closeByEsc)
  }
  const imgPopup = document.querySelector(".full-image-popup");
  function closeByEsc(e) {
    if (e.key === "Escape") {
      const popup = document.querySelector(".popup_opened")
      closePopup(popup);
    }
  }
  function closePopup(targetPopup) {
    targetPopup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeByEsc)
  }