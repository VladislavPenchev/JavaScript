function fruit(fruit, quantity, pricePerKilo){
    let kilograms = quantity / 1000;

    let money = kilograms * pricePerKilo;

    console.log(`I need $${money.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms orange.`)
}

fruit('orange', 2500, 1.80);