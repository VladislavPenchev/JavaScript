function evenElements(arr){
    let result = [];

    arr = arr.map(Number);

    for(let i = 0; i < arr.length; i+=2){
        result.push(arr[i]);
    }

    console.log(result.join(' '));
}

evenElements(['5', '10', '5', '10', '5', '10']);