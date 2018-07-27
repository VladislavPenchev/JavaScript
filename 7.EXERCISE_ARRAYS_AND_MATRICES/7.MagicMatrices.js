function isMatrixMagic(args){
    let sum = 0;
    let arrWithSums = [];
    

    
    for(let row = 0; row < args.length; row++){
        for(let col = 0; col < args[row].length; col++){
            sum += args[row][col];
        }
        arrWithSums.push(sum);
        sum = 0;
    }
    

    /*
    //TODO:
    args
        .forEach(r =>
            r.forEach(
                c => sum += c && arrWithSums.push(sum)
            ));

    console.log(arrWithSums);
    */


    let result = !!arrWithSums.reduce((f,s) => f === s ? f : NaN);

    console.log(result);

}

isMatrixMagic([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);