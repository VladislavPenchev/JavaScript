function shuffleElem(arr){

    let result = [];
    for(let i in arr){
        if(arr[i] < 0){
            result.unshift(arr[i]);
        }
        else{
            result.push(arr[i]);
        }
    }   
    console.log(result);
}

shuffleElem([7, -2 ,8 , 9]);