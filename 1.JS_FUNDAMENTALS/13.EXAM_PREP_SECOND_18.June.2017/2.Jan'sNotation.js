function solve(args){
    let arrOfNumbers = [];
    for(const item of args){
        if(Number.isInteger(item)){
            arrOfNumbers.push(item);
        }else{
            if(arrOfNumbers.length >= 2){
                let firstNumber = arrOfNumbers.pop();
                let secondNumber = arrOfNumbers.pop();
                let result;

                switch(item){
                    case '+': result = secondNumber + firstNumber;
                        break;
                    case '-': result = secondNumber - firstNumber;
                        break;
                    case '*': result = secondNumber * firstNumber;
                        break;
                    case '/': result = secondNumber / firstNumber;
                        break;
                }
                arrOfNumbers.push(result);

            }else{
                //TODO: can't execute operation
            }
        }
    }
    console.log(arrOfNumbers);
}

solve([5,3,4,'*','-']);
