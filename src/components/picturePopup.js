import { Popup } from "./Popup"
import { imgPopupImg } from "../utils/constants"
import { imgPopupName } from "../utils/constants"
export class PopupWithImage extends Popup{
    constructor(re) {
        super(re)
    }
    openPopup(e) {
        super.openPopup()
        imgPopupImg.src =e.target.src
        const imgText = e.target.closest(".element").querySelector(".element__bottom-text").textContent
        imgPopupImg.alt = imgText
        imgPopupName.textContent = imgText
    }
}