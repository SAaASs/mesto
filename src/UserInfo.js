export class UserInfo{
    constructor({userName, userWork}) {
        this._userName = document.querySelector(userName)
        this._userWork = document.querySelector(userWork)
    }
    getUserInfo = () => {
        const dataMass = [this._userName.textContent, this._userWork.textContent]
        return dataMass
    }
    setUserInfo() {
        profileName.textContent = profilePopup._getInputValues()[0]
        profileWork.textContent = profilePopup._getInputValues()[1]
    }
}