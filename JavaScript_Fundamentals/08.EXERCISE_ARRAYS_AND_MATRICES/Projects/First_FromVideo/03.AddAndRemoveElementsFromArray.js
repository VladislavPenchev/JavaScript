function addOrRemove(arrOfComments){
    let arrOfNumbers = [];

    let number = 1;

    for(let i = 0; i < arrOfComments.length; i++){
        
        let command = arrOfComments[i];
        
        if(command === "add"){
            arrOfNumbers.push(number)
        }else{
            arrOfNumbers.pop();
        }

        number++;
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
            'add'])