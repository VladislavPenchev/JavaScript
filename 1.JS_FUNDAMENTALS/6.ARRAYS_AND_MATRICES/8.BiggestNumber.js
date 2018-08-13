// //First solution
// function biggestEl(args){
//     let max = Number.NEGATIVE_INFINITY;
//     for(let row = 0; row < args.length; row++){
//         for(let col = 0; col < args[row].length; col++){
//             if(args[row][col] > max){
//                 max = args[row][col];
//             }
//         }
//     }        

//     console.log(max);
// }

//Second solution

function biggestEl(args){
    let max = Number.NEGATIVE_INFINITY;

    args.forEach(
        r => r.forEach(
            c => max = Math.max(max, c)
        )
    );

    return max;
}

let result = biggestEl([
    [20, 50, 10],
    [8, 33, 145]
]);

console.log(result);


biggestEl([
    [20, 50, 10],
    [8, 33, 145]
])