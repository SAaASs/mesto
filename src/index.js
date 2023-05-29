import '../pages/index.css';
import { PopupWithForm, PopupWithImage } from './Popup';
import { Section } from './Section';
import {
  FormValidator
} from "./FormValidator.js";
import {
  Card
} from "./Card.js";
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
















function transitionAfterPageLoad() {
  document.querySelector(".page").classList.remove("no-transition");
}

(function() {
  transitionAfterPageLoad();
})();







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

//console.log("> imagePopup.getOwnPropertyNames", Object.getOwnPropertyNames(imagePopup), imagePopup.__proto__)

const addButton = document.querySelector(".profile__add-button")
const editButton = document.querySelector(".profile__edit-button")
const profileName = document.querySelector(".profile__name")
const profileWork = document.querySelector(".profile__work")
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
  profileName.textContent = profilePopup._getInputValues().name_input
  profileWork.textContent = profilePopup._getInputValues().work_input
  profilePopup._closePopup()
})
profilePopup.setEventListeners()
const addPopup = new PopupWithForm("#popupAdd", function (e){
  e.preventDefault()
  mainSection.addItem(mainSection._renderer([{name: addPopup._getInputValues().newPlaceName, link: addPopup._getInputValues().newPlaceImgLink}]))
  addPopup._closePopup()
})
addPopup.setEventListeners()

addButton.addEventListener("click", addPopup._openPopup)
editButton.addEventListener("click", profilePopup._openPopup)
