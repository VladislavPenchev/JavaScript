function isMagicMatrix(matrix){

    let arrWithSums = [];
    let sum = 0;

    for(let row = 0; row < matrix.length; row++){
        for(col = 0; col < matrix.length; col++){
            sum += matrix[row][col];
        }
        arrWithSums.push(sum);
        sum = 0;
    }

        for(let row = 0; row < matrix.length; row++){
        for(col = 0; col < matrix.length; col++){
            sum += matrix[col][row];
        }
        arrWithSums.push(sum);
        sum = 0;
    }

    let countOfArr = arrWithSums.filter((x, i, a) => a.indexOf(x) == i);

    if(countOfArr.length === 1){
        console.log("true");
    }else{
        console.log("false");
    }

}
isMagicMatrix(
[[4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]]
   );