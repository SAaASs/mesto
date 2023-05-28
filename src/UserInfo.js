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
        this._userName.textContent = this._userName
        this._userWork.textContent = this._userName
    }
}