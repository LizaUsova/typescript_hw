import User from "./User.js";
import Course from "./Course.js";

class Student extends User {
    static isStudent(obj) {
        if(typeof obj !== 'object') {
            return false;
        }

        return obj instanceof Student;
    }

    #courses = [];

    constructor({name,email}) {
        super({
            name,
            email,
            type: User.userTypes.STUDENT
    });
    }

    get courses() {
        return Object.freeze(this.#courses);
    }

    enroll(course) {
        if(!Course.isCourse(course)) {
            throw new Error('course should be an instance of class Course')
        }
        this.#courses.push(course)
    }
}

export default Student;