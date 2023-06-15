
export class API {
    constructor({baseUrl, headers},setProfile, cardClass, cardTemplate, cardPopup, getNewProfileValues, getNewCardValues, deletePopup, getNewAvatarValue) {
        this._baseUrl = baseUrl
        this._headers = headers
        this.setProfile = setProfile
        this.cardClass = cardClass
        this.cardTemplate = cardTemplate
        this.cardPopup = cardPopup
        this.getNewProfileValues = getNewProfileValues
        this.getNewCardValues = getNewCardValues
        this.deletePopup = deletePopup
        this.userId = ""
        this.avatar = document.querySelector(".profile__avatar")
        this.getNewAvatarValue = getNewAvatarValue
    }
    getUser() {
        return fetch(this._baseUrl+'users/me', {
            headers: this._headers
            }).then(res => res.json())
    }
    getCards() {
        return fetch(this._baseUrl+'cards', {
            headers: this._headers
            }).then(res => res.json())
    }
    updateProfile() {
        return fetch(this._baseUrl+'users/me', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: this.getNewProfileValues().name_input,
                about: this.getNewProfileValues().work_input
            })
            }).then(res => res.json())
    }
    sendCard() {
        return fetch(this._baseUrl+'cards', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: this.getNewCardValues().newPlaceName,
                link: this.getNewCardValues().newPlaceImgLink
            })
            }).then(res => res.json())
    }
    deleteCard (cardId){
        return fetch(this._baseUrl+`cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
            })
    }
    stealLike (cardId) {
        return fetch(this._baseUrl+`cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers,
            })
    }
    giveLike (cardId) {
        return fetch(this._baseUrl+`cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers,
            })
    }
    updateAvatar() {
        return fetch(this._baseUrl+`users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: this.getNewAvatarValue().newPlaceAvatarLink
            })
            }).then(res => res.json())
        }
}