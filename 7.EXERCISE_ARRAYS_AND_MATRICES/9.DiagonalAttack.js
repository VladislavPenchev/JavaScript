function checkDiagonals(args){

    let matrix = [];
    let primaryDiagonal = 0;
    let secondoryDiagonal = 0;

    for(let i = 0; i < args.length;i++){
        matrix.push(args[i].split(' ').map(Number));
    }

    for(let row = 0; row < matrix.length; row++){
        primaryDiagonal += matrix[row][row];
        secondoryDiagonal += matrix[row].length - row;
    }       

    if(primaryDiagonal === secondoryDiagonal){
        for(row = 0; row < matrix.length; row++){
            for(col = 0; col < matrix.length; col++){
                if(row !== col && col !== matrix[row].length - row - 1){
                    matrix[row][col] = primaryDiagonal;
                }
            }
        }
    }


    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

checkDiagonals([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);