const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
let closeButton = document.querySelector('.popup__close-button');
function popupDisapear() {
    popup.classList.remove("popup_opacity")
    setTimeout("popup.classList.remove('popup_opened')",250)
    nameInput.classList.remove("popup__input_add")
    workInput.classList.remove("popup__input_add")
}
closeButton.addEventListener('click',popupDisapear);
let profileName = document.querySelector('#profile__name');
let profileWork = document.querySelector('#profile__work');
let nameInput = document.querySelector('#popup__name');
let workInput = document.querySelector('#popup__work');

let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let popupSave = document.querySelector('.popup__save');
let popupTitle = document.querySelector('.popup__title');
let popupForm = document.querySelector("#popupForm")
editButton.addEventListener('click', editProfilePopupApear);
addButton.addEventListener('click', addButtonPopupApear);

function changeProfile(e) {
  e.preventDefault()
  profileName.textContent = nameInput.value
  profileWork.textContent = workInput.value
  popupDisapear()
  popupForm.removeEventListener("submit", changeProfile)
}
function addElement(e) {
  e.preventDefault()
  elementsList[elementsList.length-1] = elementTemplate.querySelector(".element").cloneNode(true);
  elementsList[elementsList.length-1].querySelector('.element__image').src = workInput.value;
  elementsList[elementsList.length-1].querySelector('.element__bottom-text').textContent =  nameInput.value;
  elements.append(elementsList[elementsList.length-1]);
  elementsList[elementsList.length-1].querySelector(".element__image").addEventListener("click", imgPopupApear);
  elementsList[elementsList.length-1].querySelector(".element__delete").addEventListener("click", deleteElement);
  elementsList[elementsList.length-1].querySelector(".element__bottom-like").addEventListener("click", giveLike);
  popupForm.removeEventListener("submit", addElement);
  popupDisapear()
}
function editProfilePopupApear(){
    popup.classList.add("popup_opened");
    setTimeout('popup.classList.add("popup_opacity")',1)
    nameInput.value = profileName.textContent
    workInput.value = profileWork.textContent
    popupSave.textContent = "Сохранить"
    popupTitle.textContent = "Редактировать профиль"
    popupForm.addEventListener('submit',changeProfile);
}
function addButtonPopupApear(){
  popup.classList.add("popup_opened")
  setTimeout('popup.classList.add("popup_opacity")',1)
  nameInput.value = "Название"
  workInput.value = "Ссылка на картинку"
  popupSave.textContent = "Создать"
  popupTitle.textContent = "Новое место"
  popupForm.addEventListener("submit",addElement)
  nameInput.classList.add("popup__input_add")
  workInput.classList.add("popup__input_add")
}

const elementTemplate = document.querySelector("#element").content;
const elements = document.querySelector(".elements")
const elementsList = []
for(let i =0; i< initialCards.length; i++){
  elementsList[i] = elementTemplate.querySelector(".element").cloneNode(true);
  elementsList[i].querySelector('.element__image').src = initialCards[i].link;
  elementsList[i].querySelector('.element__bottom-text').textContent = initialCards[i].name;
  elements.append(elementsList[i]);
}
let imgPopupImg = document.querySelector("#full-image-popup__img")
let imgPopup = document.querySelector(".full-image-popup")
let imgPopupName = document.querySelector(".full-image-popup__img-name")
function imgPopupApear(e) {
  imgPopup.classList.add("popup_opened");
  setTimeout('imgPopup.classList.add("popup_opacity")',1)
  imgPopupImg.src = e.target.src
  console.log(e.target.parentElement.querySelector(".element__bottom-text").textContent)
  imgPopupName.innerHTML = e.target.parentElement.querySelector(".element__bottom-text").textContent
}
let cardImg = document.querySelectorAll(".element__image")
console.log(cardImg.length)
for(let i =0;i<cardImg.length;i++){
  cardImg[i].addEventListener("click", imgPopupApear)
}
let imgPopupClose = document.querySelector(".full-image-popup__close-button")
function imgPopupDiasapear(){
  imgPopup.classList.remove("popup_opacity")
  setTimeout('imgPopup.classList.remove("popup_opened")',250)
}
imgPopupClose.addEventListener("click",imgPopupDiasapear)
let deleteElementBtn = document.querySelectorAll(".element__delete")
function deleteElement(e) {
  e.target.parentElement.remove(e.target)
}
for(let i =0;i<cardImg.length;i++){
  deleteElementBtn[i].addEventListener("click",deleteElement)
}

let likeButton = document.querySelectorAll(".element__bottom-like")
for(let i =0;i<cardImg.length;i++){
  likeButton[i].addEventListener("click",giveLike)
}
function giveLike(e){
  e.target.style.backgroundImage = "url('./images/Union.svg')"
  e.target.removeEventListener("click",giveLike)
  e.target.addEventListener("click",takeLike)
}
function takeLike(e) {
  e.target.style.backgroundImage = "url('./images/Vector.svg')"
  e.target.addEventListener("click",giveLike)
  e.target.removeEventListener("click",takeLike)
}