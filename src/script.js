'use strict'

class User {
    static nextId = 1;
    #password;
    constructor(id, name, email, password) {
        this.id = User.nextId++;
        this.name = name;
        this.email = email;
        this.#password = password
    }

    changePassword(newPassword) {
        this.#password = newPassword;
    }

    get info() {
        return `ID: [${this.id}], Name: [${this.name}], Email: [${this.email}]`
    }
}