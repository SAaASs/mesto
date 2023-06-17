export class Section {
    constructor({selector, renderer}) {
        this._selector = document.querySelector(selector)
        this._renderer = renderer
    }
    renderCards(result) {
        const elementsToRender = this._renderer(result)
        for(let i =0; i<elementsToRender.length; i++) {
            this._selector.append(elementsToRender[i])
        }
    }
    renderCardsPrepend(result){
        const elementsToRender = this._renderer(result)
        for(let i =0; i<elementsToRender.length; i++) {
            this._selector.prepend(elementsToRender[i])
        }
    }
}
