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
for (let i = 0; i < initialCards.length; i++) {
  elementsContainer.append(
    createElement(initialCards[i].link, initialCards[i].name)
  );
}
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

function apearImgPopup(e) {
  openPopup(imgPopup);
  imgPopupImg.src = e.target.src;
  let imageName = e.target
    .closest(".element")
    .querySelector(".element__bottom-text").textContent;
  imgPopupImg.alt = imageName;
  imgPopupName.innerHTML = imageName;
}

function closePopup(target_popup) {
  target_popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePopup(target_popup);
    }
  })
}
function openPopup(target_popup) {
  target_popup.classList.add("popup_opened");
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePopup(target_popup);
    }
  })
}

function apearEditProfilePopup() {
  openPopup(popupEdit);
  popupNameInput.value = profileName.textContent;
  popupWorkInput.value = profileWork.textContent;
}

function addCardPopupApear() {
  openPopup(popupAdd);
}

function transitionAfterPageLoad() {
  document.querySelector(".page").classList.remove("no-transition");
}

// call the function inside an Immediately Invoked Function Expression (IIFE) to invoke it immediately after page load
(function () {
  transitionAfterPageLoad();
})();

const popupNameInput = document.querySelector("#popupName");
const popupWorkInput = document.querySelector("#popupWork");

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

editButton.addEventListener("click", apearEditProfilePopup);
addButton.addEventListener("click", addCardPopupApear);

const profileEditForm = document.querySelector("#profileEditForm");
const profileAddForm = document.querySelector("#profileAddForm");
profileAddForm.addEventListener("submit", addElement);
const popupEditSave = document.querySelector("#popupEditSave");
const popupAddCreate = document.querySelector("#popupAddCreate");

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
  newElement.querySelector(".element__image").src = newPlaceImgLinkParameter;
  newElement.querySelector(".element__bottom-text").textContent =
    newPlaceNameParameter;
  newElement
    .querySelector(".element__image")
    .addEventListener("click", apearImgPopup);
  newElement
    .querySelector(".element__delete")
    .addEventListener("click", deleteElement);
  newElement
    .querySelector(".element__bottom-like")
    .addEventListener("click", updateLike);
  console.log(newPlaceImgLinkParameter);
  console.log(newPlaceNameParameter);
  return newElement;
}

function addElement(event) {
  event.preventDefault();
  elementsContainer.prepend(
    createElement(
      newPlaceImgLinkInput.value,
      newPlaceNameInput.value
    )
  );
  closeAddPopup();
}
