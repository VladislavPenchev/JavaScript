function sumFirstLast(arr){

    arr = arr.map(Number);
    let first = arr.shift();
    let last = arr.pop();

    let sum = first + last;

    console.log(sum);

}

sumFirstLast(['20', '30', '40']);