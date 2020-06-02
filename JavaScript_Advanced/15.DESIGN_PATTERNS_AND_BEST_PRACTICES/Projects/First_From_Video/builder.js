const SystemMessage = require('./system-message');

class SystemMessageBuilder {
    constructor(){
        this.state = {};
    }
    addUserId(userId){
        this.state.userId = userId;
    }
    addExamId(examId){
        this.state.examId = examId
    }

    build() {
        const {userId, examId} = this.state;
        return new SystemMessage(userID, examId, ".......");
    }
}

const SystemMessage = new SystemMessageBuilder()
    .addExamId(1)
    .addExamId(2)
    .build();

const sm = new SystemMessage();

sm.userId = 3;
sm.examId = 7;