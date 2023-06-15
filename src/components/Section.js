export class Section {
    constructor({items}, selector, setProfile, cardClass, cardTemplate, cardPopup, getNewProfileValues, getNewCardValues, deletePopup, api) {
        this._items = items,
        this._selector = document.querySelector(selector)
        //ДЛя api
        this.setProfile = setProfile
        this.cardClass = cardClass
        this.cardTemplate = cardTemplate
        this.cardPopup = cardPopup
        this.getNewProfileValues = getNewProfileValues
        this.getNewCardValues = getNewCardValues
        this.deletePopup = deletePopup
        this.userId = ""
        this.avatar = document.querySelector(".profile__avatar")
        this.api = api
    }
    renderUser(result){
        this.setProfile(result.name, result.about, result.avatar)
        this.userId = result._id
        this.avatar.src = result.avatar
    }
    renderCards(result) {
        const cont = document.querySelector(".elements")
        cont.innerHTML = ""
                for(let i =0; i<result.length;i++){
                    const isIn = (element) => element._id == this.userId
                    let likeState = ""
                    if (result[i].likes.some(isIn)) {
                        likeState = true
                    }
                    else {
                        likeState = false
                    }
                    const newCard = new this.cardClass(this.cardTemplate, this.cardPopup.openPopup.bind(this.cardPopup), this.deletePopup.openPopup.bind(this.deletePopup), result[i], this.userId, this.api, likeState, this)
                    cont.prepend(newCard._createElement())
                }
    }
    addItem(itemsToAdd) {
        for(let i =0; i<itemsToAdd.length;i++){
            this._selector.prepend(itemsToAdd[i]._createElement())
        }
    }
}
