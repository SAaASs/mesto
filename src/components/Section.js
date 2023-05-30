export class Section {
    constructor({items, renderer}, selector) {
        this._items = items,
        this._renderer = renderer,
        this._selector = document.querySelector(selector)
    }
    addItem(itemsToAdd) {
        for(let i =0; i<itemsToAdd.length;i++){
            this._selector.prepend(itemsToAdd[i]._createElement())
        }
    }
    renderer = (items) =>{
        return this._renderer(items)
    }
}
