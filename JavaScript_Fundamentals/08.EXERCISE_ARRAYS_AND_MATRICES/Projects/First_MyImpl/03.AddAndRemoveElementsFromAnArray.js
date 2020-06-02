function addOrRemove(arr){
    let arrOfNumbers = [];

    let numberIncrease = 1;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'add'){
            arrOfNumbers.push(numberIncrease);
        }else{
            arrOfNumbers.pop();
        }

        numberIncrease++;
    }

    if(arrOfNumbers.length > 0){
        console.log(arrOfNumbers.join('\n'));
    }else{
        console.log("Empty");
    }

}

addOrRemove(['add', 
'add', 
'remove', 
'add', 
'add']

);