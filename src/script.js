'use strict'

class User {
    static nextId = 1;
    #password;
    constructor(name, email, password) {
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

class Student extends User {
    constructor(name, email, password) {
        super(name, email, password);
        this.courses = [];
    }

    enroll(course) {
    if (!this.courses.includes(course)) {
            this.courses.push(course)
        } else {
            return console.log(`this course ${course} already exists`)
        }
    }
}

class Teacher extends User {
constructor(name, email, password) {
    super(name, email, password);
    this.subjects = [];
}

    addSubject(subject) {
        if (!this.subjects.includes(subject)) {
            this.subjects.push(subject)
        } else {
            return console.log(`this subject ${subject} already exists`)
        }
    }
}