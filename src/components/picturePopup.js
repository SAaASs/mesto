import { Popup } from "./Popup"
export class PopupWithImage extends Popup{
    constructor(re) {
        super(re)
        this._imgPopupImg = document.querySelector("#full-image-popup__img")
        this._imgPopupName = document.querySelector(".full-image-popup__img-name")
    }
    openPopup(e) {
        super.openPopup()
        this._imgPopupImg.src =e.target.src
        const imgText = e.target.closest(".element").querySelector(".element__bottom-text").textContent
        this._imgPopupImg.alt = imgText
        this._imgPopupName.textContent = imgText
    }
}