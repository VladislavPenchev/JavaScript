function addAndRemove(args){
    let array = [];
    let increment = 0;

    args
        .forEach(x => x === "add"? array.push(++increment) : array.pop());

    array.forEach(x => console.log(x));

}

addAndRemove(["add","add","remove","add","add"]);