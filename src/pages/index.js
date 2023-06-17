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
  api.deleteCard(this._targetCardId).then(this._targetCard.remove()).then(this.closePopup()).catch(err => {console.log(err)}).finally(savebtn.textContent = "Да")
})
deletePopup.setEventListeners()
const imagePopup = new PopupWithImage("#full-image-popup")
imagePopup.setEventListeners()



const addButton = document.querySelector(".profile__add-button")
const editButton = document.querySelector(".profile__edit-button")
const avatarEditButton = document.querySelector(".profile__avatar-shadow")
addButton.addEventListener("click", function(){
  addPopup.openPopup.call(addPopup)///////////////
  validatorAddCard.toggleButtonState();
})
editButton.addEventListener("click", function(){
  profilePopup.openPopup.call(profilePopup)
  popupName.value = profileInfo.getUserInfo().name
  popupWork.value = profileInfo.getUserInfo().work
})
avatarEditButton.addEventListener("click", function(){
  avatarPopup.openPopup.call(avatarPopup)
  validatorChangeAvatar.toggleButtonState();
})
const profileInfo = new UserInfo({userName: "#profile__name", userWork:"#profile__work", userAvatar: ".profile__avatar"})
const profilePopup = new PopupWithForm("#popupEdit", function (e){
  const savebtn = e.target.querySelector(".popup__save")
  savebtn.textContent = "Сохранение..."
  const dataToSend = profilePopup.getInputValues.call(profilePopup)
  api.updateProfile(dataToSend.name_input, dataToSend.work_input).then((result)=>{profileInfo.renderUser(result)}).then(profilePopup.closePopup()).catch(err => {console.log(err)}).finally(savebtn.textContent="Сохранить")
})





profilePopup.setEventListeners()
const addPopup = new PopupWithForm("#popupAdd", function (e){
  const savebtn = e.target.querySelector(".popup__save")
  savebtn.textContent = "Сохранение..."
  const dataToSend = addPopup.getInputValues.call(addPopup)
  api.sendCard(dataToSend.newPlaceName, dataToSend.newPlaceImgLink).then((result)=> {mainSection.renderCardsPrepend([result])}).then(addPopup.closePopup()).catch(err => {console.log(err)}).finally(savebtn.textContent = "Создать") 
})

addPopup.setEventListeners()
const popupName = document.querySelector("#popupName")
const popupWork = document.querySelector("#popupWork")



const avatarPopup = new PopupWithForm("#popupAvatar", function(e) {
  const savebtn = e.target.querySelector(".popup__save")
  savebtn.textContent = "Сохранение..."
  const dataToSend = avatarPopup.getInputValues.call(avatarPopup)
  api.updateAvatar(dataToSend.newPlaceAvatarLink).then((result)=>{profileInfo.renderUser(result)}).then(avatarPopup.closePopup()).catch(err => {console.log(err)}).finally(savebtn.textContent = "Сохранить")
})
const api = new API({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-68/", headers: {authorization: '051fb33f-0728-4468-b1b3-22d15f3b12d4', 'Content-Type': 'application/json'}})



avatarPopup.setEventListeners()
const mainSection = new Section({selector: ".elements", renderer: (cardsToRender)=>{ let elementsToRender = []
for(let i =0; i<cardsToRender.length;i++){
    const isIn = (element) => element._id == profileInfo._userId
    let likeState = ""
    if (cardsToRender[i].likes.some(isIn)) {
        likeState = true
    }
    else {
        likeState = false
    }
    const newCard = new Card(elementTemplate, imagePopup.openPopup.bind(imagePopup), deletePopup.openPopup.bind(deletePopup), cardsToRender[i], profileInfo._userId, api, likeState)
    elementsToRender.push(newCard.createElement())
} return elementsToRender}})


Promise.all([api.getUser(), api.getCards()])
// тут деструктурируете ответ от сервера, чтобы было понятнее, что пришло
  .then(([userData, cards]) => {
    profileInfo.renderUser(userData),
    mainSection.renderCards(cards)
  })
  .catch(err => {
    console.log(err)
  });