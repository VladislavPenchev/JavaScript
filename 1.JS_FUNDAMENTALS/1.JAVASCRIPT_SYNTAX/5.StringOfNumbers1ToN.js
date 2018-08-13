function printNumbers(count){
    let countAsNumber = parseInt(count);
    let current = 0;
    for(let i = 1; i <= countAsNumber;i++){
        current += i.toString();
    }
    console.log(`"${current}"`);
}

printNumbers('11');