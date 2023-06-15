import './index.css';
import { PopupWithForm } from '../components/popupWithForm';
import { PopupWithImage } from '../components/picturePopup';
import { UserInfo } from '../components/UserInfo';
import { FormValidator } from '../components/FormValidator';
import { Card } from '../components/Card';
import { addValidationParametersDict } from '../utils/constants';
import { editValidationParametersDict } from '../utils/constants';
import { API } from '../components/API';
import { DeletePopup } from '../components/deletePopup';
import { Popup } from '../components/Popup';
import { changeAvatarValidationParametersDict } from '../utils/constants';
import { Section } from '../components/Section';

const elementTemplate = document.querySelector("#element").content;
function transitionAfterPageLoad() {
  document.querySelector(".page").classList.remove("no-transition");
}

(function() {
  transitionAfterPageLoad();
})();


function getCards(cardTemplate, cardOpener, cardDeleter) {
  console.log(11)
}


const popupDeleteForm = document.querySelector(".popup__form_delete")


const popupAddForm = document.querySelector("#profileAddForm")
const popupEditForm = document.querySelector("#profileEditForm")
const changeAvatarForm = document.querySelector("#profileAvatarForm")
const validatorAddCard = new FormValidator(addValidationParametersDict, popupAddForm)
validatorAddCard.enableValidation()
const validatorEditProfile = new FormValidator(editValidationParametersDict, popupEditForm)
validatorEditProfile.enableValidation()
const validatorChangeAvatar = new FormValidator(changeAvatarValidationParametersDict, changeAvatarForm)
validatorChangeAvatar.enableValidation()
const deletePopup = new DeletePopup("#popupDelete", function(e) {
  e.preventDefault()
  const savebtn = e.target.querySelector(".popup__save")
  savebtn.textContent = "Сохранение..."
  api.deleteCard(this._targetCardId).then(()=>{api.getCards().then((result)=>{mainSection.renderCards(result)})}).then(savebtn.textContent = "Да").then(this.closePopup())
})
deletePopup.setEventListeners()
popupDeleteForm.addEventListener('submit', deletePopup.submitter.bind(deletePopup))
const imagePopup = new PopupWithImage("#full-image-popup")
imagePopup.setEventListeners()



const addButton = document.querySelector(".profile__add-button")
const editButton = document.querySelector(".profile__edit-button")

const profileInfo = new UserInfo({userName: "#profile__name", userWork:"#profile__work", userAvatar: ".profile__avatar"})
const profilePopup = new PopupWithForm("#popupEdit", function (e){
  const savebtn = e.target.querySelector(".popup__save")
  savebtn.textContent = "Сохранение..."
  api.updateProfile().then((result)=>{mainSection.renderUser(result)}).then(profilePopup.closePopup()).finally(savebtn.textContent="Сохранить")
  
})





profilePopup.setEventListeners()
const addPopup = new PopupWithForm("#popupAdd", function (e){
  const savebtn = e.target.querySelector(".popup__save")
  savebtn.textContent = "Сохранение..."
  api.sendCard().then((result)=> {api.getCards().then((result)=>{mainSection.renderCards(result)})}).then(addPopup.closePopup()).finally(savebtn.textContent = "Создать")
  
})

addPopup.setEventListeners()
const popupName = document.querySelector("#popupName")
const popupWork = document.querySelector("#popupWork")
addButton.addEventListener("click", function(){
  addPopup.openPopup.call(addPopup)///////////////
  validatorAddCard.toggleButtonState(validatorAddCard._inputList, validatorAddCard._buttonElement, addValidationParametersDict.inactiveButtonClass);
})

editButton.addEventListener("click", function(){
  profilePopup.openPopup.call(profilePopup)
  popupName.value = profileInfo.getUserInfo().name
  popupWork.value = profileInfo.getUserInfo().work
})
const AvatarPopup = new PopupWithForm("#popupAvatar", function(e) {
  const savebtn = e.target.querySelector(".popup__save")
  savebtn.textContent = "Сохранение..."
  api.updateAvatar().then((result)=>{mainSection.renderUser(result)}).then(AvatarPopup.closePopup()).finally(savebtn.textContent = "Сохранить")
})
const api = new API({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-68/", headers: {authorization: '051fb33f-0728-4468-b1b3-22d15f3b12d4', 'Content-Type': 'application/json'}},profileInfo.setUserInfo.bind(profileInfo), Card, elementTemplate, imagePopup, profilePopup.getInputValues.bind(profilePopup), addPopup.getInputValues.bind(addPopup), deletePopup, AvatarPopup.getInputValues.bind(AvatarPopup))
api.getUser().then((result)=>{mainSection.renderUser(result)})

const avatarEditButton = document.querySelector(".profile__avatar-shadow")
avatarEditButton.addEventListener("click", function(){
  AvatarPopup.openPopup.call(AvatarPopup)
})
AvatarPopup.setEventListeners()
const mainSection = new Section({items: "initialCards"}, ".elements",profileInfo.setUserInfo.bind(profileInfo), Card, elementTemplate, imagePopup, profilePopup.getInputValues.bind(profilePopup), addPopup.getInputValues.bind(addPopup), deletePopup, api)
api.getCards().then((result)=>{mainSection.renderCards(result)})