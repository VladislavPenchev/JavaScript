const SystemMessage = require('./system-message');


class SystemMessageFactory {
    createUpcomingExam(userId, examId){
        return new SystemMessage(
            userId,
            examId,
            "Hello, you have an exam EXAM_ID",
            "IMPORTANT"
        );
    }
}

const factory = new SystemMessageFactory();

console.log(factory.createUpcomingExam(1, 8));
console.log(factory.createUpcomingExam(1, 8));
console.log(factory.createUpcomingExam(1, 8));
console.log(factory.createUpcomingExam(1, 8));