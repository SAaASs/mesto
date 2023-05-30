import { Popup } from "./Popup"
export class PopupWithImage extends Popup{
    constructor(re) {
        super(re)
    }
    _openPopup(e) {
        super._openPopup()
        this._selector.querySelector("#full-image-popup__img").src =e.target.src
        this._selector.querySelector(".full-image-popup__img-name").textContent =e.target.closest(".element").querySelector(".element__bottom-text").textContent
    }
}