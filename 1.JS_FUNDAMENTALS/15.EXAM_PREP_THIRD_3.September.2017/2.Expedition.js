function solve(primaryMatrix,secondoryMatrix,targetCoordinates,startCoordinates){
    let steps = 0;
    for(const coordinate of targetCoordinates){
        modifyPrimaryMatrix(coordinate);
    }

    //da si namapnem matricata

    let currentPosition = primaryMatrix[startCoordinates[0]][startCoordinates[1]]
    
    let previousDirection;
    //iterate over the only possible path up,down
     while(true){
        let currentRow = currentPosition[0];
        let currentCol = currentPosition[1];
        
        //down
        if(currentRow + 1 < primaryMatrix.length 
            && primaryMatrix[currentRow + 1][currentCol] == 0 
            && priviousDirection != 'up'){
            previousDirection = 'down';
            currentRow++;
        }
        //right
        else if(currentCol + 1 < primaryMatrix[0].length 
            && primaryMatrix[currentRow][currentCol + 1] == 0 
            && priviousDirection != 'left'){
                previousDirection = 'right';
                currentCol++;
        }
        //up
        else if(currentRow - 1 >= 0 
            && primaryMatrix[currentRow - 1][currentCol] == 0
            && priviousDirection != 'down'){
                previousDirection = 'up';
                currentRow--;
        }
        //left
        else if(currentCol - 1 >= 0 
            && primaryMatrix[currentRow][currentCol - 1] == 0
            && priviousDirection != 'right'){
                previousDirection = 'left';
                currentCol--;
        }else{
            breal;
        }
        //none
        steps++;
     }
    //where have we reached

    console.log(steps);
    definePosition(currentPosition);

    function modifyPrimaryMatrix([targerRow,targetCol]){

    }

    function definePosition([endRow,endCol]){
        let output = ``;
        
        if(endRow == 0){
            output = `Top`;
        } else if(endCol == 0){
            output = `Left`;
        } else if(endRow == primaryMatrix.length - 1){
            output = `Bottom`;
        } else if(endCol == primaryMatrix[0].length - 1){
            output = `Right`;
        } else if(endRow < primaryMatrixLength / 2 && endCol > primaryMatrix[0].length){
            output = `Dead end 1`
        } else if(endRow < primaryMatrixLength / 2 && endCol <= primaryMatrix[0].length){
            output = `Dead end 2`
        } else if(endRow >= primaryMatrixLength / 2 && endCol > primaryMatrix[0].length){
            output = `Dead end 3`
        } else if(endRow >= primaryMatrixLength / 2 && endCol >= primaryMatrix[0].length){
            output = `Dead end 4`
        }
        console.log(output);
    }
}

solve(
[[1, 1, 0, 1, 1, 1, 1, 0],
 [0, 1, 1, 1, 0, 0, 0, 1],
 [1, 0, 0, 1, 0, 0, 0, 1],
 [0, 0, 0, 1, 1, 0, 0, 1],
 [1, 0, 0, 1, 1, 1, 1, 1],
 [1, 0, 1, 1, 0, 1, 0, 0]],
[[0, 1, 1],
 [0, 1, 0],
 [1, 1, 0]],
[[1, 1],
 [2, 3],
 [5, 3]],
[0, 2]

);