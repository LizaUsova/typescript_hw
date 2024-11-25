
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

class CourseManager {
    constructor() {
        this.users = [];
        this.courses = [];
    }

    addUser(user) {
        if (user instanceof User) {
            this.users.push(user);
            console.log(`User added: ${user.info}`);
        } else {
            console.log("Invalid user type. Only instances of User or its subclasses are allowed.");
        }
    }

    addCourse(course) {
        if (course instanceof Course) {
            this.courses.push(course);
            console.log(`Course added: ${course.name}`);
        } else {
            console.log("Invalid course type. Only instances of Course are allowed.");
        }
    }

    assignTeacherToCourse(courseId, teacherId) {
        const course = this.courses.find(c => c.id === courseId);
        const teacher = this.users.find(u => u.id === teacherId && u instanceof Teacher);

        if (!course) {
            console.log(`Course with ID: ${courseId} not found.`);
            return;
        }

        if (!teacher) {
            console.log(`Teacher with ID: ${teacherId} not found.`);
            return;
        }

        course.teacher = teacher;
        console.log(`Teacher ${teacher.name} assigned to course "${course.name}".`);
    }

    enrollStudentToCourse(courseId, studentId) {
        const course = this.courses.find(c => c.id === courseId);
        const student = this.users.find(u => u.id === studentId && u instanceof Student);

        if (!course) {
            console.log(`Course with ID: ${courseId} not found.`);
            return;
        }

        if (!student) {
            console.log(`Student with ID: ${studentId} not found.`);
            return;
        }

        course.addStudent(student);
        student.enroll(course.name);
        console.log(`Student ${student.name} enrolled in course "${course.name}".`);
    }

    static generateReport(courses) {
        if (!courses || courses.length === 0) {
            console.log("No courses available to generate a report.");
            return;
        }

        console.log("Courses Report:");
        courses.forEach(course => {
            console.log(`\nCourse ID: ${course.id}, Name: "${course.name}"`);
            console.log(`Teacher: ${course.teacher ? course.teacher.name : "Not assigned"}`);
            course.listStudents();
        });
    }
}