
export class API {
    constructor(setProfile, cardClass, cardTemplate, cardPopup, getNewProfileValues, getNewCardValues, deletePopup) {
        this.setProfile = setProfile
        this.cardClass = cardClass
        this.cardTemplate = cardTemplate
        this.cardPopup = cardPopup
        this.getNewProfileValues = getNewProfileValues
        this.getNewCardValues = getNewCardValues
        this.deletePopup = deletePopup
        this.userId = ""
        this.avatar = document.querySelector(".profile__avatar")
    }
    getUser() {
        fetch('https://mesto.nomoreparties.co/v1/cohort-68/users/me', {
            headers: {
                authorization: '051fb33f-0728-4468-b1b3-22d15f3b12d4'
            }
            }).then(res => res.json()).then((result) => {
                this.setProfile(result.name, result.about)
                this.userId = result._id
                this.avatar.src = result.avatar
              }); 
    }
    getCards() {
        fetch('https://mesto.nomoreparties.co/v1/cohort-68/cards', {
            headers: {
                authorization: '051fb33f-0728-4468-b1b3-22d15f3b12d4'
            }
            }).then(res => res.json()).then((result) => {
                const cont =document.querySelector(".elements")
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
                    const newCard = new this.cardClass(this.cardTemplate, this.cardPopup.openPopup.bind(this.cardPopup), this.deletePopup.openPopup.bind(this.deletePopup), result[i], this.userId, this, likeState)
                    cont.prepend(newCard._createElement())
                }
              }); 
    }
    updateProfile(target) {
        const savebtn = target.querySelector(".popup__save")
        savebtn.textContent = "Сохранение..."
        fetch('https://mesto.nomoreparties.co/v1/cohort-68/users/me', {
            method: 'PATCH',
            headers: {
                authorization: '051fb33f-0728-4468-b1b3-22d15f3b12d4',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.getNewProfileValues().name_input,
                about: this.getNewProfileValues().work_input
            })
            }).then(()=> {
                this.getUser()
                savebtn.textContent = "Сохранить"
            });
    }
    createCard(target) {
        const savebtn = target.querySelector(".popup__save")
        savebtn.textContent = "Сохранение..."
        fetch('https://mesto.nomoreparties.co/v1/cohort-68/cards', {
            method: 'POST',
            headers: {
                authorization: '051fb33f-0728-4468-b1b3-22d15f3b12d4',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.getNewCardValues().newPlaceName,
                link: this.getNewCardValues().newPlaceImgLink
            })
            }).then(()=> {
                this.getCards()
                savebtn.textContent = "Создать"
            });
    }
    deleteCard (cardId, target){
        const savebtn = target.querySelector(".popup__save")
        savebtn.textContent = "Сохранение..."
        const currentContext = this
        fetch(`https://mesto.nomoreparties.co/v1/cohort-68/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: '051fb33f-0728-4468-b1b3-22d15f3b12d4',
                'Content-Type': 'application/json'
            },
            }).then(()=>{
                currentContext.getCards()
                savebtn.textContent = "Да"
            })
    }
    stealLike (cardId) {
        const currentContext = this
        fetch(`https://mesto.nomoreparties.co/v1/cohort-68/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: '051fb33f-0728-4468-b1b3-22d15f3b12d4',
                'Content-Type': 'application/json'
            },
            }).then(()=> {
                currentContext.getCards()
            });
    }
    giveLike (cardId) {
        const currentContext = this
        fetch(`https://mesto.nomoreparties.co/v1/cohort-68/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: '051fb33f-0728-4468-b1b3-22d15f3b12d4',
                'Content-Type': 'application/json'
            },
            }).then(()=> {
                currentContext.getCards()
            });
    }
    updateAvatar(avatarLink, target) {
        const savebtn = target.querySelector(".popup__save")
        savebtn.textContent = "Сохранение..."
        fetch(`https://mesto.nomoreparties.co/v1/cohort-68/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: '051fb33f-0728-4468-b1b3-22d15f3b12d4',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatarLink
            })
            }).then(()=>{
                this.getUser()
                savebtn.textContent = "Сохранить"
            })
        }
}