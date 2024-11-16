"use strict";
const universityRecord = {
    students: {
        "001": {
            id: "001",
            name: "Liza",
            age: 20,
        },
        "002": {
            id: "002",
            name: "Alex",
            age: 22,
        },
        "003": {
            id: "003",
            name: "Sophia",
            age: 19,
        },
        "004": {
            id: "004",
            name: "John",
            age: 21,
        },
    },
    grades: {
        "001": {
            Math: 95,
            Science: 88,
            Literature: 90,
            History: 85,
        },
        "002": {
            Math: 80,
            Science: 92,
            Literature: 85,
            History: 78,
        },
        "003": {
            Math: 87,
            Science: 91,
            Literature: 95,
            History: 88,
        },
        "004": {
            Math: 70,
            Science: 85,
            Literature: 89,
            History: 90,
        },
    },
};
let getStudentGrades = (universityRecord, studentId) => {
    if (universityRecord.grades[studentId]) {
        return universityRecord.grades[studentId];
    }
    return null;
};
const grades = getStudentGrades(universityRecord, "001");
let getAverageGrade = (universityRecord, subject) => {
    let totalGrade = 0;
    let studentCount = 0;
    for (const studentId in universityRecord.grades) {
        if (universityRecord.grades.hasOwnProperty(studentId)) {
            const grades = universityRecord.grades[studentId];
            totalGrade += grades[subject];
            studentCount++;
        }
    }
    if (studentCount === 0) {
        return 0;
    }
    return totalGrade / studentCount;
};
const averageMathGrade = getAverageGrade(universityRecord, "Math");
