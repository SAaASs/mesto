import {FormValidator} from "./FormValidator.js";
import { Card } from "./card.js";


const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const elementTemplate = document.querySelector("#element").content;
const elementsContainer = document.querySelector(".elements");

const popupEditCloseButton = document.querySelector("#popupEditCloseButton");
const popupAddCloseButton = document.querySelector("#popupAddCloseButton");

const imgPopupImg = document.querySelector("#full-image-popup__img");
const imgPopup = document.querySelector(".full-image-popup");
const popupEdit = document.querySelector("#popupEdit");
const popupAdd = document.querySelector("#popupAdd");
const imgPopupName = document.querySelector(".full-image-popup__img-name");
const cardImg = document.querySelectorAll(".element__image");
const newPlaceNameInput = document.querySelector("#newPlaceName");
const newPlaceImgLinkInput = document.querySelector("#newPlaceImgLink");
const imgPopupClose = document.querySelector(".full-image-popup__close-button");

const editPopUpOverlay = document.querySelector("#popupEdit")
editPopUpOverlay.addEventListener("mousedown", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(popupEdit);
  }
})
const addPopUpOverlay = document.querySelector("#popupAdd")
addPopUpOverlay.addEventListener("mousedown", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(popupAdd);
  }
})
const fullImagePopUpOverlay = document.querySelector("#full-image-popup")
fullImagePopUpOverlay.addEventListener("mousedown", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(imgPopup);
  }
})

imgPopupClose.addEventListener("click", closeImgPopup);
popupEditCloseButton.addEventListener("click", closeEditPopup);
popupAddCloseButton.addEventListener("click", closeAddPopup);
function deleteElement(e) {
  e.target.closest(".element").remove();
}

function updateLike(e) {
  e.target.classList.toggle("element__bottom-like_liked");
}

function closeImgPopup() {
  closePopup(imgPopup);
}
function closeEditPopup() {
  closePopup(popupEdit);
}
function closeAddPopup() {
  closePopup(popupAdd);
  newPlaceImgLinkInput.value = "";
  newPlaceNameInput.value = "";
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
function closePopup(targetPopup) {
  targetPopup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc)
}
function openPopup(targetPopup) {
  targetPopup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc)
}
function closeByEsc(e) {
  if (e.key === "Escape") {
    const popup = document.querySelector(".popup_opened")
    closePopup(popup);
  }
}
function openEditProfilePopup() {
  openPopup(popupEdit);
  popupNameInput.value = profileName.textContent;
  popupWorkInput.value = profileWork.textContent;
}
function openAddCardPopup() {
  openPopup(popupAdd);
}
function transitionAfterPageLoad() {
  document.querySelector(".page").classList.remove("no-transition");
}

(function () {
  transitionAfterPageLoad();
})();
const popupNameInput = document.querySelector("#popupName");
const popupWorkInput = document.querySelector("#popupWork");

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

editButton.addEventListener("click", openEditProfilePopup);
addButton.addEventListener("click", openAddCardPopup);

const profileEditForm = document.querySelector("#profileEditForm");
const profileAddForm = document.querySelector("#profileAddForm");
profileAddForm.addEventListener("submit", addElement);

const popupEditSave = document.querySelector("#popupEditSave");
const popupAddCreate = document.querySelector("#popupAddCreate");
profileAddForm.addEventListener("submit", function() {popupAddCreate.classList.add("popup__save_disabled")} )
const profileName = document.querySelector(".profile__name");
const profileWork = document.querySelector(".profile__work");

profileEditForm.addEventListener("submit", changeProfile);

function changeProfile(e) {
  e.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileWork.textContent = popupWorkInput.value;
  closePopup(popupEdit);
}

function createElement(newPlaceImgLinkParameter, newPlaceNameParameter) {
  newElement = elementTemplate.querySelector(".element").cloneNode(true);
  newElementImg = newElement.querySelector(".element__image");
  newElementImg.src = newPlaceImgLinkParameter;
  newElementImg.alt = newPlaceNameParameter;
  newElement.querySelector(".element__bottom-text").textContent =
    newPlaceNameParameter;
  newElementImg.addEventListener("click", openImagePopup);
  newElement.querySelector(".element__delete").addEventListener("click", deleteElement);
  newElement
    .querySelector(".element__bottom-like")
    .addEventListener("click", updateLike);
  return newElement;
}

function addElement(event) {
  event.preventDefault();
  const newCard = new Card(elementTemplate, newPlaceImgLinkInput.value, newPlaceNameInput.value)
  newCard._addElement()
  closeAddPopup();
}





for (let i = 0; i < initialCards.length; i++) {
  const newCard = new Card(elementTemplate, initialCards[i].link, initialCards[i].name)
  newCard._addElement()
}






const validationParametersDict = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_err',
  errorClass: 'popup__error_visible'
}

const popupAddForm = "#profileAddForm"
const popupEditForm = "#profileEditForm"
const addPopupObj = new FormValidator(validationParametersDict, popupAddForm)
addPopupObj.enableValidation()
const editPopupObj = new FormValidator(validationParametersDict, popupEditForm)
editPopupObj.enableValidation()