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

const elementTemplate = document.querySelector("#element").content;
function transitionAfterPageLoad() {
  document.querySelector(".page").classList.remove("no-transition");
}

(function() {
  transitionAfterPageLoad();
})();





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
  api.deleteCard(this._targetCardId, e.target)
  this.closePopup()
})
deletePopup.setEventListeners()
popupDeleteForm.addEventListener('submit', deletePopup.submitter.bind(deletePopup))
const imagePopup = new PopupWithImage("#full-image-popup")
imagePopup.setEventListeners()

//console.log("> imagePopup.getOwnPropertyNames", Object.getOwnPropertyNames(imagePopup), imagePopup.__proto__)

const addButton = document.querySelector(".profile__add-button")
const editButton = document.querySelector(".profile__edit-button")

const profileInfo = new UserInfo({userName: "#profile__name", userWork:"#profile__work"})
const profilePopup = new PopupWithForm("#popupEdit", function (e){
  api.updateProfile(e.target)
  profilePopup.closePopup()
})
profilePopup.setEventListeners()
const addPopup = new PopupWithForm("#popupAdd", function (e){
  api.createCard(e.target)
  addPopup.closePopup()
})
const AvatarPopupLink = document.querySelector("#newPlaceAvatarLink")
const AvatarPopup = new PopupWithForm("#popupAvatar", function(e) {
  api.updateAvatar(AvatarPopupLink.value, e.target)
  AvatarPopup.closePopup()
})
addPopup.setEventListeners()
const popupName = document.querySelector("#popupName")
const popupWork = document.querySelector("#popupWork")
addButton.addEventListener("click", function(){
  addPopup.openPopup.call(addPopup)
  validatorAddCard.toggleButtonState(validatorAddCard._inputList, validatorAddCard._buttonElement, addValidationParametersDict.inactiveButtonClass);
})

editButton.addEventListener("click", function(){
  profilePopup.openPopup.call(profilePopup)
  popupName.value = profileInfo.getUserInfo().name
  popupWork.value = profileInfo.getUserInfo().work
})
const api = new API(profileInfo.setUserInfo.bind(profileInfo), Card, elementTemplate, imagePopup, profilePopup.getInputValues.bind(profilePopup), addPopup.getInputValues.bind(addPopup), deletePopup)
api.getUser()
api.getCards()
const avatarEditButton = document.querySelector(".profile__avatar-shadow")
avatarEditButton.addEventListener("click", function(){
  AvatarPopup.openPopup.call(AvatarPopup)
})
AvatarPopup.setEventListeners()
