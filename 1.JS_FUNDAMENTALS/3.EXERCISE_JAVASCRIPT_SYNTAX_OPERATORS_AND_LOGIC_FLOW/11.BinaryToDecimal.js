function binaryToDec(arr){
    let sum = 0;
    let j = 7;
    for(let i = 0; i <= 7; i++){
        sum += arr[i] * (2**j);
        j--;
    }

    console.log(sum);
}

binaryToDec("11110000");