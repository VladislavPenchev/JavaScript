function firstAndLastKNumbers(arr){
    let gettingNumbers = arr.shift();

    for(let row = 0; row < gettingNumbers; row++){
        for(let col = 0; col < gettingNumbers[row];col++){
            console.log(arr[row][col]);
        }
    }

}

firstAndLastKNumbers([2,
    7, 8, 9]
   );