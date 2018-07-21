function modifyNumber(number){
    let str = `${number}`;
    let sum = 0;

    for(let cur of str){
        if(cur === '"'){
            continue;
        }
        sum += Number(cur);
    }

    while(sum/str.length < 5){
        sum += 9;
        str += 9;
    }

    console.log(str);
}

modifyNumber(101);