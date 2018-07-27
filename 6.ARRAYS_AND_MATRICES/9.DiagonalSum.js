function sumOfDiaglonal(args){

    let sumOfLeftDiagonal =0, sumOfRightDiagonal = 0;
    
    for(let row = 0; row < args.length; row++){
        sumOfLeftDiagonal += args[row][row];
        sumOfRightDiagonal += args[row][args.length - row - 1];
    }

    console.log(sumOfLeftDiagonal + ' ' + sumOfRightDiagonal);
}

sumOfDiaglonal([
    [20, 40],
    [10, 60]
]);