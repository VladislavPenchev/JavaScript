function solve(args){
    let arrayOfNums = args.join(' ').split(' ');
    for(let i = 0; i < arrayOfNums.length; i++){
        if(arrayOfNums[i] === '32656' && arrayOfNums[i + 1] === '19759' && arrayOfNums[i + 2] === '32763'){
            let lengthOfWord = Number(arrayOfNums[i + 4]);
            let copy = arrayOfNums.slice(i + 6,i + 6 + lengthOfWord);
            console.log(copy.map(st => String.fromCharCode(st)).join(''));
        }
    }

}

solve([
    '32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0'
]);