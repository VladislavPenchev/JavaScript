function negativeNumbers(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            let currentEl = Number(arr.splice(i,1).join(''));
            arr.unshift(currentEl);
        }
    }

    console.log(arr);
}

negativeNumbers([7, -2, 8, 9]);