'use strict';

const Teacher = require('./Teacher');
const Student = require('./Student');

let newTeacher = new Teacher();
let newStudent = new Student();

newStudent.question(newTeacher);
newTeacher.teach(newStudent);