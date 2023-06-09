import { Popup } from "./Popup"
export class PopupWithForm extends Popup{
    constructor(re, formSubmiter) {
        super(re)
        this._formSubmiter = formSubmiter
        this._inputsMass = this._selector.querySelectorAll(".popup__input")
        this._form = this._selector.querySelector(".popup__form")
    }
    getInputValues = () => {
        this._formValues = {};
        for(let i=0;i<this._inputsMass.length;i++) {
            this._formValues[this._inputsMass[i].name] = this._inputsMass[i].value
        }
        return this._formValues
    }
    setEventListeners ()  {
        super.setEventListeners()
        this._form.addEventListener("submit", this._formSubmiter)
    }
    closePopup(){
        super.closePopup()
        this._form.reset()
    }
}