import Teacher from './Teacher.js';
import Student from './Student.js';
class CourseManager {
    constructor() {
        this.users = [];
        this.courses = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    addCourse(course) {
        this.courses.push(course);
    }
    findCourse(courseId) {
        return this.courses.find((course) => course.id === courseId);
    }
    assignTeacherToCourse(courseId, teacherId) {
        const course = this.findCourse(courseId);
        const teacher = this.users.find((user) => user.id === teacherId && user instanceof Teacher);
        if (!course)
            throw new Error(`Course ${courseId} not found`);
        if (!teacher)
            throw new Error(`Teacher ${teacherId} not found`);
        course.teacher = teacher;
    }
    enrollStudentToCourse(courseId, studentId) {
        const course = this.findCourse(courseId);
        if (!course) {
            throw new Error(`Course ${courseId} not found`);
        }
        const student = this.users.find((user) => user.id === studentId && user instanceof Student);
        if (!student) {
            throw new Error(`Student ${studentId} not found`);
        }
        course.addStudent(student);
        student.courses.push(course);
    }
    generateReport() {
        const usersReport = this.generateUsersReport();
        const coursesReport = this.generateCoursesReport();
        return {
            users: usersReport,
            courses: coursesReport,
        };
    }
    generateUsersReport() {
        return this.users
            .map((user) => {
            if (user instanceof Teacher) {
                return `Teacher: ${user.name}, Email: ${user.email}, Subjects: ${user.subjects.join(', ')}`;
            }
            if (user instanceof Student) {
                return `Student: ${user.name}, Email: ${user.email}`;
            }
        })
            .join(' ');
    }
    generateCoursesReport() {
        return this.courses
            .map((course) => {
            const teacher = course.teacher
                ? `Teacher: ${course.teacher.name}, Email: ${course.teacher.email}`
                : 'No teacher assigned';
            const students = course
                .listStudents()
                .map((s) => s.name)
                .join(', ');
            return `Course: ${course.name}, ${teacher}, Students: ${students}`;
        })
            .join('\n');
    }
}
export default CourseManager;
