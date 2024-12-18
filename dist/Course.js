import BaseModel from './BaseModel.js';
class Course extends BaseModel {
    constructor(name, teacher) {
        super();
        this.name = name;
        this._students = [];
        this._teacher = null;
        this.name = name;
        this._teacher = teacher;
        this.id = Course.id;
        Course.id += 1;
    }
    addStudent(student) {
        if (!this._students.some((s) => s.id === student.id)) {
            this._students.push(student);
        }
    }
    removeStudent(studentId) {
        const index = this._students.findIndex((user) => user.id === studentId);
        if (index !== -1) {
            this._students.splice(index, 1);
        }
        else {
            throw new Error('Error with ID student');
        }
    }
    get teacher() {
        return this._teacher;
    }
    set teacher(teacher) {
        this._teacher = teacher;
    }
    listStudents() {
        return [...this._students];
    }
}
Course.id = 20;
export default Course;
