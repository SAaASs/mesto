import { Popup } from "./Popup";
export class DeletePopup extends Popup {
    constructor(selector, submitter) {
        super(selector)
        this.submitter = submitter
        this._targetCardId =""
    }
    openPopup(e) {
        super.openPopup()
        this._targetCardId = e.target.getAttribute("data-id")
        console.log(this._targetCardId)
    }
}