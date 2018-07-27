function neighborsEl(args){
    let count = 0;
    for(let row = 0; row < args.length; row++){
        for(let col = 0; col < args.length; col++){
            if(args[row][col] === args[row][col + 1]){
                count++;
            }

            if(args[row] && args[row][col] === args[row + 1][col]){
                count++
            }
        }
    }

    console.log(count);
}

neighborsEl([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);