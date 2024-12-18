import BaseModel from './BaseModel.js';
class User extends BaseModel {
    changePassword(newPassword) {
        if (!newPassword || !newPassword.trim()) {
            throw new Error('Password must be a string');
        }
        this._password = newPassword;
    }
    get info() {
        return `ID: ${this.id}; name: ${this.name}; Email: ${this.email}`;
    }
    constructor(name, _email) {
        super();
        this.name = name;
        this._email = _email;
        this.name = name;
        this.email = _email;
        this._password = '';
        this.id = User.idCounter;
        User.idCounter += 1;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        if (!email.includes('@') || !email.trim()) {
            throw new Error('Invalid email');
        }
        else {
            this._email = email;
        }
    }
    set password(NewPassword) {
        this._password = atob(NewPassword);
    }
}
User.idCounter = 0;
export default User;
