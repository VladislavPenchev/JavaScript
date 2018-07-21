function printNumbers(arr){
    let start = arr.shift();

    console.log(arr.slice(0,start));
    console.log(arr.slice(arr.length - start,start + 1));
    


}

printNumbers([3, 6, 7, 8, 9]);