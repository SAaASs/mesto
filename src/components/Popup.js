export class Popup {
    constructor(selector){
        this._selector = document.querySelector(selector)
    }
    _openPopup (){
        console.log(this)
        this._selector.classList.add("popup_opened")
        this._selector.querySelector(".popup__save").setAttribute("disabled", "disabled")
        this._selector.querySelector(".popup__save").classList.add("popup__save_disabled")
        document.addEventListener("keydown",this._handleEscClose)
    }
    _closePopup () {
        this._selector.classList.remove("popup_opened")
        document.removeEventListener("keydown",this._handleEscClose)
    }
    setEventListeners() {
        this._selector.querySelector(".popup__close-button").addEventListener("click", this._closePopup.bind(this))
        this._selector.addEventListener("mousedown", (evt) => {
            if (evt.currentTarget === evt.target) {
                this._closePopup()
            }
          })
    }
    _handleEscClose = (e) => {
        if (e.key === "Escape") {
            this._closePopup();
        }
    }
} 