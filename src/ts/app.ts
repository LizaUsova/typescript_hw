import User from './User.js';
import Teacher from './Teacher.js';
import Course from './Course.js';
import Student from './Student.js';
import CourseManager from './CourseManager.js';

const s1 = new Student('Alice', 'alice@gmail.com');
const s2 = new Student('John', 'john@gmail.com');

const t1: Teacher = new Teacher('Vova', 'vova@gmail.com');
const t2: Teacher = new Teacher('Alex', 'alex@gmail.com');

const c1 = new Course("React.js", t1);
const c2 = new Course("Vue.js", t2);

const cm = new CourseManager()

cm.addCourse(c1)
cm.addCourse(c2)

cm.addUser(s1)
cm.addUser(s2)
cm.addUser(t1)
cm.addUser(t2)

console.log(cm)

cm.assignTeacherToCourse(1, 4)
cm.assignTeacherToCourse(2, 3)

cm.enrollStudentToCourse(1, 1)
cm.enrollStudentToCourse(1, 2)

cm.enrollStudentToCourse(2, 1)
cm.enrollStudentToCourse(2, 2)