export class Popup {
    constructor(selector){
        this._selector = document.querySelector(selector)
    }
    openPopup (){
        this._selector.classList.add("popup_opened")
        document.addEventListener("keydown",this._handleEscClose)
    }
    closePopup () {
        this._selector.classList.remove("popup_opened")
        document.removeEventListener("keydown",this._handleEscClose)
    }
    setEventListeners() {
        this._selector.querySelector(".popup__close-button").addEventListener("click", this.closePopup.bind(this))
        this._selector.addEventListener("mousedown", (evt) => {
            if (evt.currentTarget === evt.target) {
                this.closePopup()
            }
          })
    }
    _handleEscClose = (e) => {
        if (e.key === "Escape") {
            this.closePopup();
        }
    }
} 