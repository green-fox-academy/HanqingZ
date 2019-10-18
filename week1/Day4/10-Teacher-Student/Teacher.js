class Teacher {
    teach(student){
        student.learn();
    }

    answer(){
        console.log('Teacher try hard to answer questions');
    }
}

module.exports = Teacher;