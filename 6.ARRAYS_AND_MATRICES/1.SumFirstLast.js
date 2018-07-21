function printArray(arr){
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());

    console.log(firstElement + lastElement);
}

printArray(['20', '30', '40']);