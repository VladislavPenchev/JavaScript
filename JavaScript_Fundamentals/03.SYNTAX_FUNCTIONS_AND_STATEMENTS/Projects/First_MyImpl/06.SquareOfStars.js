function starSquare(number = 5){
    
    let result = '';

    for(let i = 0; i < number; i++){
        result += '*'.repeat(number).split('').join(' ') + '\r\n';    
    }

    return result;
}

const a = starSquare();

console.log(a);