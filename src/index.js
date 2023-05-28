import '../pages/index.css';
import { PopupWithForm, PopupWithImage } from './Popup';
import { Section } from './Section';
import {
  FormValidator
} from "./FormValidator.js";
import {
  Card
} from "./Card.js";
import {openPopup, closePopup} from './utils.js'
const initialCards = [{
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


const popupEdit = document.querySelector("#popupEdit");
const popupAdd = document.querySelector("#popupAdd");

const cardImg = document.querySelectorAll(".element__image");
const newPlaceNameInput = document.querySelector("#newPlaceName");
const newPlaceImgLinkInput = document.querySelector("#newPlaceImgLink");

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



popupEditCloseButton.addEventListener("click", closeEditPopup);
popupAddCloseButton.addEventListener("click", closeAddPopup);




const imgPopupClose = document.querySelector(".full-image-popup__close-button");
const imgPopup = document.querySelector("#full-image-popup");
fullImagePopUpOverlay.addEventListener("mousedown", (evt) => {
  if (evt.currentTarget === evt.target) {
      closePopup(imgPopup);
  }
})
imgPopupClose.addEventListener("click", closeImgPopup);
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

(function() {
  transitionAfterPageLoad();
})();
const popupNameInput = document.querySelector("#popupName");
const popupWorkInput = document.querySelector("#popupWork");

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

editButton.addEventListener("click", openEditProfilePopup);
addButton.addEventListener("click", openAddCardPopup);

const profileEditForm = document.querySelector("#profileEditForm");


const popupEditSave = document.querySelector("#popupEditSave");
const popupAddCreate = document.querySelector("#popupAddCreate");
profileAddForm.addEventListener("submit", function() {
  popupAddCreate.classList.add("popup__save_disabled")
})
const profileName = document.querySelector(".profile__name");
const profileWork = document.querySelector(".profile__work");






const addValidationParametersDict = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_err',
  errorClass: 'popup__error_visible'
}
const editValidationParametersDict = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_err',
  errorClass: 'popup__error_visible'
}

const popupAddForm = document.querySelector("#profileAddForm")
const popupEditForm = document.querySelector("#profileEditForm")
const validatorAddCard = new FormValidator(addValidationParametersDict, popupAddForm)
validatorAddCard.enableValidation()
const validatorEditProfile = new FormValidator(editValidationParametersDict, popupEditForm)
validatorEditProfile.enableValidation()


const imagePopup = new PopupWithImage("#full-image-popup")
imagePopup.setEventListeners()
console.log("> PopupWithImage", imgPopup, PopupWithImage);



const mainSection = new Section({items: initialCards, renderer: (itemsToRender) =>{
  const renderedItems = []
  for(let i =0; i<itemsToRender.length;i++){
      let newCard = new Card(elementTemplate, itemsToRender[i].link, itemsToRender[i].name, imagePopup._openPopup)
      renderedItems.push(newCard)
  }
  return renderedItems
}}, ".elements")
mainSection.addItem(mainSection._renderer(mainSection._items))

const profilePopup = new PopupWithForm("#popupEdit", function (e){
  e.preventDefault()
  profileName.textContent = profilePopup._getInputValues()[0]
  profileWork.textContent = profilePopup._getInputValues()[1]
  profilePopup._closePopup()
})
profilePopup.setEventListeners()
const addPopup = new PopupWithForm("#popupAdd", function (e){
  e.preventDefault()
  mainSection.addItem(mainSection._renderer([{name: addPopup._getInputValues()[0], link: addPopup._getInputValues()[1]}]))
  addPopup._closePopup()
})
addPopup.setEventListeners()
