class SystemMessage {
    constructor(userId, examId, textTemplate){
        this.userId;
        this.examId = examId;
        this.textTemplate = textTemplate;
    }
}

module.exports = SystemMessage;