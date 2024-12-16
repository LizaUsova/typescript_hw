import Teacher from "./Teacher.js";
import Student from "./Student.js";
import Course from "./Course.js";

class CourseManager {
    users = [];
    courses = [];


    addUser(user) {
        if(!Teacher.isTeacher(user) && !Student.isStudent(user)) {
            return false
        }

        this.users.push(user);
    }

    addCourse(course) {
        if(!Course.isCourse(course)) {
            return false
        }

        this.courses.push(course);
    }

    getCourseById(courseId) {
        return this.courses.find(({id}) => id === courseId)
    }

    getUserById(userId) {
        return this.users.find(({id}) => id === userId);
    }
    assignTeacherToCourse(courseId, teacherId) {
        const selectedCourse = this.getCourseById(courseId)
        const selectedTeacher = this.getUserById(teacherId)
        selectedCourse.changeTeacher(selectedTeacher)
    }

    enrollStudentToCourse(courseId, studentId) {
        const selectedCourse = this.getCourseById(courseId)
        const selectedStudent = this.getUserById(studentId)
        selectedCourse.addStudent(selectedStudent)
    }

    generateReport() {
        return {
            users: JSON.stringify(this.users),
            courses: JSON.stringify(this.courses)
        }
    }
}

export default CourseManager;