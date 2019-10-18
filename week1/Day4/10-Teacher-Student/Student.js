class Student {
    learn(){
        console.log('Student don\'t wanna learn anything');
    }

    question(teacher){
        teacher.answer();
    }
}

module.exports = Student;