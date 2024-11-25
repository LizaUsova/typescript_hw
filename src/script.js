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

class Course {
    static nextId = 1;
    #students
    constructor(name, teacher) {
        this.id = Course.nextId++;
        this.name = name;
        this.teacher = teacher;
        this.#students = [];
    }

    addStudent(student) {
        if (!this.#students.some(s => s.id === student.id)) {
            this.#students.push(student);
        } else {
            console.log(`Student "${student.name}" is already enrolled in the course "${this.name}"`);
        }
    }

    removeStudent(studentId) {
        const initialLength = this.#students.length;
        this.#students = this.#students.filter(student => student.id !== studentId);

        if (this.#students.length < initialLength) {
            console.log(`Student with ID: ${studentId} removed from the course "${this.name}".`);
        } else {
            console.log(`Student with ID: ${studentId} is not found in the course "${this.name}".`);
        }
    }

    listStudents() {
        if (this.#students.length === 0) {
            console.log(`No students are enrolled in the course "${this.name}".`);
        } else {
            console.log(`Students enrolled in the course "${this.name}":`);
            this.#students.forEach(student => console.log(`- ${student.info}`));
        }
    }
}