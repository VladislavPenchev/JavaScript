function allOddEl(arr){
    let result = [];
    for(let index in arr){
        if(index % 2 === 0){
            result.push(arr[index]);
            result.slice();
        }
    }

    console.log(result);
}

allOddEl(['20', '30', '40']);