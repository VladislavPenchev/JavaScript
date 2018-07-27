function solve(args) {
    let townWithProducts = new Map();
    for(let sale of args){
        let [town,product,quantityPrice] = sale.split(/\s*->\s*/);
        let [quantity,price] = quantityPrice.split(/\s*:\s*/);
        if(!townWithProducts.has(town))
            townWithProducts.set(town,new Map());
        let income = quantity * price;
        let oldIncome = townWithProducts.get(town).get(product);
        if(oldIncome) income += oldIncome;
        townWithProducts.get(town).set(product, income);
        //console.log(oldIncome);
    }
    for(let [key,value] of townWithProducts){
        console.log(`Town - ${key}`);
        for(const keyElement of value){
            //console.log(keyElement);
            console.log(`$$$${keyElement[0]} : ${keyElement[1]}`)
        }
    }
    
}

solve([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Montana -> Oranges -> 200000 : 1',
    'Montana -> Cherries -> 1000 : 0.3',
    'Sofia -> Audi Q7 -> 200 : 100000'
]);

