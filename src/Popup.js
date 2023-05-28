class Popup {
    constructor(selector){
        this._selector = document.querySelector(selector)
    }
    _openPopup() {
        this._selector.classlist.add("popup_opened")
        
        document.addEventListener("keydown", this._handleEscClose)
    }
    _closePopup = () => {
        document.removeEventListener("keydown", this._handleEscClose)
        console.log("_closePopup", this._selector.classList)
        this._selector.classList.remove("popup_opened")
    }
    _handleEscClose = (e) => {
        console.log(87364386499639)
        if (e.key === "Escape") {
            this._closePopup();
        }
    }
    setEventListeners() {
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
    _openPopup = (e) => {
        document.addEventListener("keydown", this._handleEscClose)
        this._selector.classList.add("popup_opened")
        imgPopupImg.src = e.target.src;
        const imageName = e.target.closest(".element").querySelector(".element__bottom-text").textContent;
        imgPopupImg.alt = imageName;
        imgPopupName.textContent = imageName;
      };
}
export class PopupWithForm extends Popup{
    constructor(re, formSubmiter) {
        super(re)
        this._formSubmiter = formSubmiter
        this._inputsMass = this._selector.querySelectorAll(".popup__input")
    }
    _getInputValues = () => {
        let dataMass = []
        dataMass.push(this._inputsMass[0].value)
        dataMass.push(this._inputsMass[1].value)
        return dataMass
    }
    _closePopup = () => {
        document.removeEventListener("keydown", this._handleEscClose)
        this._selector.classList.remove("popup_opened")
        let inputsMass = this._selector.querySelectorAll("popup__input")
        this._inputsMass[0].value = ""
        this._inputsMass[1].value = ""
    }
    setEventListeners = () => {
        this._selector.addEventListener("mousedown", (evt) => {
            if (evt.currentTarget === evt.target) {
                this._closePopup()
            }
          })
        this._selector.querySelector(".popup__form").addEventListener("submit", this._formSubmiter)
    }
}
const imgPopup = document.querySelector(".full-image-popup");
const imgPopupImg = imgPopup.querySelector("#full-image-popup__img");
const imgPopupName = imgPopup.querySelector(".full-image-popup__img-name");