import User from './User.js';
class Student extends User {
    constructor() {
        super(...arguments);
        this.courses = [];
    }
    enroll(course) {
        if (this.validateEnroll(course)) {
            throw new Error(`Course already enrolled`);
        }
        this.courses.push(course);
    }
    validateEnroll(course) {
        return this.courses.includes(course);
    }
    getEnrolledCourses() {
        return this.courses;
    }
}
export default Student;
