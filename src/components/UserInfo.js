export class UserInfo{
    constructor({userName, userWork, userAvatar}) {
        this._userName = document.querySelector(userName)
        this._userWork = document.querySelector(userWork)
        this._userAvatar = document.querySelector(userAvatar)
        this._userId = ""
    }
    getUserInfo = () => {
        const data = {name: this._userName.textContent, work: this._userWork.textContent}
        return data
    }
    setUserInfo(name,work, avatar) {
        this._userName.textContent = name
        this._userWork.textContent = work
        this._userAvatar.src = avatar
    }
    renderUser(result){
        this.setUserInfo(result.name, result.about, result.avatar)
        this._userId = result._id
    }
}