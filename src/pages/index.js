import './index.css';
import { PopupWithForm } from '../components/popupWithForm';
import { PopupWithImage } from '../components/picturePopup';
import { Section } from '../components/Section';
import { UserInfo } from '../components/UserInfo';
import { FormValidator } from '../components/FormValidator';
import { Card } from '../components/Card';
import { initialCards } from '../utils/constants';

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
const mainSection = new Section({items: initialCards, renderer: (itemsToRender) =>{
  const renderedItems = []
  for(let i =0; i<itemsToRender.length;i++){
      const newCard = new Card(elementTemplate, itemsToRender[i].link, itemsToRender[i].name, imagePopup._openPopup.bind(imagePopup))
      renderedItems.push(newCard)
  }
  return renderedItems
}}, ".elements")
mainSection.addItem(mainSection.renderer(mainSection._items))
const profileInfo = new UserInfo({userName: "#profile__name", userWork:"#profile__work"})
const profilePopup = new PopupWithForm("#popupEdit", function (e){
  e.preventDefault()
  profileInfo.setUserInfo(profilePopup._getInputValues().name_input, profilePopup._getInputValues().work_input)
  profilePopup._closePopup()
})
profilePopup.setEventListeners()
const addPopup = new PopupWithForm("#popupAdd", function (e){
  e.preventDefault()
  mainSection.addItem(mainSection.renderer([{name: addPopup._getInputValues().newPlaceName, link: addPopup._getInputValues().newPlaceImgLink}]))
  addPopup._closePopup()
})
addPopup.setEventListeners()
const popupName = document.querySelector("#popupName")
const popupWork = document.querySelector("#popupWork")
addButton.addEventListener("click", addPopup._openPopup.bind(addPopup))
editButton.addEventListener("click", profilePopup._openPopup.bind(profilePopup))
editButton.addEventListener("click", function(){
  popupName.value = profileInfo.getUserInfo().name
  popupWork.value = profileInfo.getUserInfo().work
})