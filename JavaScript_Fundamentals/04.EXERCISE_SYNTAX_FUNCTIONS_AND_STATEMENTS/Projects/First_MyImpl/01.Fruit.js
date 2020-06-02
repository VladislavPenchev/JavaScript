function calcMoneyFruit(...input){

    let fruitName = input[0];
    let weightInKg = +input[1] / 1000;
    let pricePerKg = input[2];

    let moneyToPaid = weightInKg * pricePerKg;

    return `I need $${moneyToPaid.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitName}.`;

}

console.log(calcMoneyFruit('orange', 2500, 1.80));