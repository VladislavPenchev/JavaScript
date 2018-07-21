function processNumbers(arr){
    let result = arr
    .filter((e,i) => i % 2 === 1)
    .map(e => e * 2)
    .reverse()
    .join(', ');
    
    console.log(result);
}

processNumbers([10, 15, 20, 25]);