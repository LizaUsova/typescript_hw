import Teacher from "./Teacher.js";
import Student from "./Student.js";
import BaseModel from "./BaseModel.js";

class Course extends BaseModel {
    static #currentId = 1;
    static isCourse(obj) {
        return obj instanceof Course;
    }

    #id = 0;
    #students = [];
    #teacher = null;
    name = '';


    constructor(name, teacher) {
        super();
        if(typeof name === 'string' && name.trim() !== '') {
            this.name = name;
        }

        this.changeTeacher(teacher)

        this.#id += Course.#currentId;
        ++Course.#currentId;
    }

    get students() {
        return [...this.#students]
    }

    get id() {
        return this.#id;
    }

    get teacher() {
        return this.#teacher;
    }

    addStudent(studentInstance) {
        this.#validateStudent(studentInstance)

        this.#students.push(studentInstance);

        return this.#students.length;
    }
    removeStudent(studentInstance) {
        this.#validateStudent(studentInstance)

        const {id: studentId} = studentInstance;
        const studentIndex = this.#students.findIndex(id => id === studentId);
        const [removedStudent] = this.#students.splice(studentIndex, 1);

        return removedStudent;
    }

    #validateStudent(student) {
        if(Student.isStudent(student)) return true;
        throw new Error('you must pass a Student class instance');
    }

    changeTeacher(teacher) {
        if(Teacher.isTeacher(teacher)) {
            this.#teacher = teacher;
        } else {
            throw new Error('you must pass a Teacher class instance');
        }
    }
}

export default Course;