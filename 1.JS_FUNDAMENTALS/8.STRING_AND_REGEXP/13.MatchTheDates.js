function matchDatesInText(args){
    let regex = /\b([0-9]{1,2})-([A-z][a-z]{2})-(\d{4})\b/g
    let exec;
    for(const str of args){
        while(exec = regex.exec(str)){
            console.log(`${exec[0]} (Day: ${exec[1]}, Month: ${exec[2]}, Year: ${exec[3]})`);
        }
    }
}

matchDatesInText(["I am born on 30-Dec-1994.",
    "This is not date: 512-Jan-1996.",
    "My father is born on the 29-Jul-1955."]);