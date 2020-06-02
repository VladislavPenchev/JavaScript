function composeObject(input){
    let obj = {};

    for(let i = 0; i < input.length; i+=2){
        obj[input[i]] = +input[i + 1];
    }

    return obj;
}

console.log(composeObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]));