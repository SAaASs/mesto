export class Section {
    constructor({selector, renderer}) {
        this._selector = document.querySelector(selector)
        this._renderer = renderer
    }
    renderCards(result) {
        this._renderer(result)
    }
}
