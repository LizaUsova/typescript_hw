import User from './User.js';
class Teacher extends User {
    constructor() {
        super(...arguments);
        this.subjects = ['JS', 'TS', 'PHP'];
    }
    addSubject(subject) {
        this.subjects.push(subject);
    }
}
export default Teacher;
