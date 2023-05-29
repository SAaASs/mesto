import { UserInfo } from "./UserInfo"
class Popup {
    constructor(selector){
        this._selector = document.querySelector(selector)
    }
    _openPopup = () => {
        this._selector.classList.add("popup_opened")
        document.addEventListener("keydown", this._handleEscClose)
    }
    _closePopup = () => {
        document.removeEventListener("keydown", this._handleEscClose)
        this._selector.classList.remove("popup_opened")
    }
    _handleEscClose = (e) => {
        if (e.key === "Escape") {
            this._closePopup();
        }
    }
    setEventListeners  ()  {
        this._selector.querySelector(".popup__close-button").addEventListener("click", this._closePopup)
        this._selector.addEventListener("mousedown", (evt) => {
            if (evt.currentTarget === evt.target) {
                this._closePopup()
            }
          })
    }
} 
export class PopupWithImage extends Popup{
    constructor(re) {
        super(re)
    }
    _openPopup = (e)=> {
        this._selector.classList.add("popup_opened")
        document.addEventListener("keydown", this._handleEscClose)
        imgPopupImg.src = e.target.src;
        const imageName = e.target.closest(".element").querySelector(".element__bottom-text").textContent;
        imgPopupImg.alt = imageName;
        imgPopupName.textContent = imageName;
      };
}
const profileInfo = new UserInfo({userName:".profile__name",userWork:".profile__work"})
const popupName = document.querySelector(".profile__name")
const popupWork = document.querySelector(".profile__work")
export class PopupWithForm extends Popup{
    constructor(re, formSubmiter) {
        super(re)
        this._formSubmiter = formSubmiter
        this._inputsMass = this._selector.querySelectorAll(".popup__input")
    }
    _getInputValues = () => {
        this._formValues = {};
        for(let i=0;i<this._inputsMass.length;i++) {
            this._formValues[this._inputsMass[i].name] = this._inputsMass[i].value
        }
        return this._formValues
    }
    _closePopup () {
        super._closePopup();
        for(let i=0;i<this._inputsMass.length;i++) {
            this._inputsMass[i].value = ""
        }

    }
    _openPopup = () =>{
        console.log(this._inputsMass[0])
        this._selector.classList.add("popup_opened")
        document.addEventListener("keydown", this._handleEscClose)
        this._inputsMass[0].value = document.querySelector("#profile__name").textContent
        this._inputsMass[1].value = document.querySelector("#profile__work").textContent
        document.querySelector("#newPlaceName").value = ""
        document.querySelector("#newPlaceImgLink").value = ""
    }
    setEventListeners ()  {
        super.setEventListeners()
        this._selector.querySelector(".popup__form").addEventListener("submit", this._formSubmiter)
    }

}
const imgPopup = document.querySelector(".full-image-popup");
const imgPopupImg = imgPopup.querySelector("#full-image-popup__img");
const imgPopupName = imgPopup.querySelector(".full-image-popup__img-name");












































class Popup1 {
    constructor(selector){
        this._selector = document.querySelector(selector)
    }
    _someShit =() => {
        console.log("1")
    }
    _openPopup = () => {
        this._selector.classList.add("popup_opened")
        document.addEventListener("keydown", this._handleEscClose)
    }
    _closePopup = () => {
        document.removeEventListener("keydown", this._handleEscClose)
        this._selector.classList.remove("popup_opened")
    }
    _handleEscClose = (e) => {
        if (e.key === "Escape") {
            this._closePopup();
        }
    }
    setEventListeners = () => {
        this._selector.querySelector(".popup__close-button").addEventListener("click", this._closePopup)
        this._selector.addEventListener("mousedown", (evt) => {
            if (evt.currentTarget === evt.target) {
                this._closePopup()
            }
          })
    }
} 

class AA {
    t= 10;

    _someShit() {
        console.log("1")
    }
}
const o1 = new Popup;
console.log("LIST", Object.getOwnPropertyNames(o1))
