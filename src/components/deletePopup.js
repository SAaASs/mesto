import { Popup } from "./Popup";
export class DeletePopup extends Popup {
    constructor(selector, submitter) {
        super(selector)
        this.submitter = submitter
        this._targetCardId =""
        this._targetCard = ""
    }
    openPopup(e) {
        super.openPopup()
        this._targetCardId = e.target.getAttribute("data-id")
        this._targetCard = e.target.closest(".element")
    }
    setEventListeners() {
        super.setEventListeners()
        document.querySelector(".popup__form_delete").addEventListener("submit", this.submitter.bind(this))
    }
}