function coffeemachine(input){
    
    const coffeeCaffeine = 0.80;
    const coffeeDecaf = 0.90;
    const tea = 0.80;

    let totalSum = 0;


    for(let i = 0;i < input.length; i++){
        let currentArr = input[i].split(", ");
        
        let moneyInMachine = +currentArr[0];
        let drink = currentArr[1];

        let typeOfCoffee = '';
        let milk = '';
        let suggar = 0;

        let sum = 0;

        if(drink === 'coffee'){
            typeOfCoffee = currentArr[2];
            if('milk' === currentArr[3]){
                milk = currentArr[3];
                suggar = +currentArr[4];

            }else{
                suggar = +currentArr[3];
            }
        }else{
            if('milk' === currentArr[2]){
                milk = currentArr[2];
                suggar = +currentArr[3];
            }else{
                suggar = +currentArr[2];
            }
        }

        switch(drink){
            case'coffee':
                    if(typeOfCoffee === 'caffeine'){
                        sum += coffeeCaffeine;
                        if(milk !== ''){
                            sum += +(coffeeCaffeine * (10 / 100)).toFixed(1);
                        }

                        if(suggar !==null && suggar > 0){
                            sum += 0.10;
                        }
                    }else{
                        sum += coffeeDecaf;
                        if(milk !== ""){
                            sum += (coffeeDecaf * (10 / 100)).toFixed(1);
                        }

                        if(suggar !== null && suggar > 0){
                            sum += 0.10;
                        }
                    }
                break;
            case 'tea':
                    sum += tea;
                    if(milk !== ""){
                        sum += +(tea * (10 / 100)).toFixed(1);
                    }

                    if(suggar !==null && suggar > 0){
                        sum += 0.10;
                    }
                break
            default:
                break;
        }

        if(moneyInMachine - sum > 0 || moneyInMachine - sum === 0){
            console.log(`You ordered ${drink}. Price: $${sum.toFixed(2)} Change: $${(moneyInMachine - sum).toFixed(2)}`);

            totalSum += sum;
        }else{
            console.log(`Not enough money for ${drink}. Need $${(sum - moneyInMachine).toFixed(2)} more.`);
        }


    }

    console.log(`Income Report: $${totalSum.toFixed(2)}`);
}

coffeemachine(['8.00, coffee, decaf, 4', '1.00, tea, 2']);