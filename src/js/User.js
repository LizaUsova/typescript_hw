import BaseModel from "./BaseModel.js";

class User extends BaseModel{
    static #currentId = 1;

    static userTypes = {
        STUDENT: 'student',
        TEACHER: 'teacher',
        DEFAULT: 'user'
    }

    static passwordStrength = Object.freeze({
        WEAK: 'weak',
        MEDIUM: 'medium',
        STRONG: 'strong'
    })

    static passwordValidations = {
        [User.passwordStrength.WEAK]: (value) => {
            return true;
        },
        [User.passwordStrength.MEDIUM]: (value) => {
            return true;
        },
        [User.passwordStrength.STRONG]: (value) => {
            return true;
        }
    }

    constructor({name, email, type}) {
        super();
        this.name = name;
        this.email = email;
        this.#id = User.#currentId;

        if(Object.values(User.userTypes).includes(type)) {
            this.#type = type;
        }

        User.#currentId +=1;
    }

    #id = 0;
    #pass = null;
    #type = User.userTypes.default;
    #email = null;

    name = null;

    set email(value) {
        if(value.includes('@')) {
            this.#email = value;
        } else {
            throw new Error('Email is invalid')
        }
    }

    get email() {
        return this.#email;
    }

    get type() {
        return this.#type;
    }

    get id() {
        return this.#id;
    }

    get info() {
        return JSON.stringify({
            name: this.name,
            id: this.id,
            email: this.email,
        })
    }

    set #password(newPassword) {
        this.#pass = atob(newPassword);
    }

    changePassword(
        newPassword,
        strength = User.passwordStrength.WEAK
    ) {
        if(typeof newPassword !== 'string') return;

        if(!Object.values(User.passwordStrength).includes(strength)) {
            throw new Error('Pass strength is wrong')
        }

        if(!User.passwordValidations[strength](newPassword)) {
            throw new Error('Password is too weak for ' + strength);
        }

        this.#password = newPassword;
    }
}



export default User