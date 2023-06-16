
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
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
    getUser() {
        return fetch(this._baseUrl+'users/me', {
            headers: this._headers
            }).then(this._checkResponse)
    }
    getCards() {
        return fetch(this._baseUrl+'cards', {
            headers: this._headers
            }).then(this._checkResponse)
    }
    updateProfile(name_input,work_input) {
        return fetch(this._baseUrl+'users/me', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name_input,
                about: work_input
            })
            }).then(this._checkResponse)
    }
    sendCard(newPlaceName,newPlaceImgLink) {
        return fetch(this._baseUrl+'cards', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: newPlaceName,
                link: newPlaceImgLink
            })
            }).then(this._checkResponse)
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
            }).then(this._checkResponse)
    }
    giveLike (cardId) {
        return fetch(this._baseUrl+`cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers,
            }).then(this._checkResponse)
    }
    updateAvatar(newPlaceAvatarLink) {
        return fetch(this._baseUrl+`users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: newPlaceAvatarLink
            })
            }).then(this._checkResponse)
        }
}