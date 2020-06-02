function nonDecreasingSubsequence(arr){
    let result = [];

    result.push(arr[0]);

    //console.log(result[result.length - 1]);
    
    for(let i = 0; i < arr.length; i++){
        if(result[result.length - 1] <= arr[i]){
            result.push(arr[i]);
        }
    }

    result.shift();

    console.log(result.join('\n'));
}

nonDecreasingSubsequence(
    [1, 
        3, 
        2, 
        15,
        6, 
        21]
        
    );