export class UserInfo{
    constructor({userName, userWork}) {
        this._userName = document.querySelector(userName)
        this._userWork = document.querySelector(userWork)
    }
    getUserInfo = () => {
        const data = {name: this._userName.textContent, work: this._userWork.textContent}
        return data
    }
    setUserInfo(name,work) {
        this._userName.textContent = name
        this._userWork.textContent = work
    }
}