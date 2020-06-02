function sameNumbers(number){
    number = number.toString();

    let isSame = true;

    let firstNum = number[0];
    let sumOfDigits = +firstNum;


    for(let i = 1; i < number.length; i++){
        if(!firstNum === number[i]){
            isSame = false;
        }

        sumOfDigits += + number[i];
    }

    console.log(isSame);
    console.log(sumOfDigits);
}

sameNumbers(2222222);