import User from "./User.js";
import Course from "./Course.js";

class Teacher extends User {
    static isTeacher(obj) {
        if(typeof obj !== 'object') {
            return false;
        }

        return obj instanceof Teacher;
    }

    constructor({name, email}) {
        super({
            name,
            email,
            type: User.userTypes.TEACHER
    });
    }

    #subjects = [];

    get subjects() {
        return this.#subjects;
    }

    addSubject(subject) {
        if (!Course.isCourse(subject)) {
            throw new Error('Subject is not valid');

            this.#subjects.push(subject);
        }
    }
}

export default Teacher;