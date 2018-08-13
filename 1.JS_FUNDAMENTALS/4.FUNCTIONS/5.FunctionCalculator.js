function funcCalculator(firstNumber,secondNumber,sign) {
    /*
    let firstNumber = arr[0];
    let secondNumber = arr[1];
    let sign = arr[2];
    */
    let calc = function (firstNumber, secondNumber, sign) { return sign(firstNumber + secondNumber) };
    let add = function (firstNumber, secondNumber) { return firstNumber + secondNumber };
    let substract = function (firstNumber, secondNumber) { return firstNumber - secondNumber };
    let multiply = function (firstNumber, secondNumber) { return firstNumber * secondNumber };
    let divide = function (firstNumber, secondNumber) { return firstNumber / secondNumber };

    switch(sign){
        case '+': return calc(firstNumber,secondNumber,add);
        case '-': return calc(firstNumber,secondNumber,substract);
        case '*': return calc(firstNumber,secondNumber,multiply);
        case '/': return calc(firstNumber,secondNumber,divide);
    }
}

console.log(funcCalculator(2, 4, '+'));