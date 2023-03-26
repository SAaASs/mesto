let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');

editButton.addEventListener('click', popupApear);
let closeButton = document.querySelector('.popup__close-button');
function popupDisapear() {
    popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click',popupDisapear);
let profileName = document.querySelector('#profile__name');
let profileWork = document.querySelector('#profile__work');
let nameInput = document.querySelector('#popup__name');
let workInput = document.querySelector('#popup__work');

function popupApear(){
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent
    workInput.value = profileWork.textContent
}
function changeProfile(e) {
    e.preventDefault()
    profileName.textContent = nameInput.value
    profileWork.textContent = workInput.value
    popupDisapear()
}
let popupForm = document.querySelector('.popup__form')
popupForm.addEventListener('submit',changeProfile)
//let likeButton = document.querySelector(".element__bottom-like")
//function giveLike(){
//    likeButton.src = './images/Union.svg';
//}
//likeButton.addEventListener('click', giveLike)