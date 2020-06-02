function gaints(inputArray, cutSize){

    let firstPart = inputArray.slice(0, inputArray.length / 2);
    let secondPart = inputArray.slice(inputArray.length / 2);

    let firstGiantLife = 0;
    let secondGiantLife = 0;
    
    while(firstPart.length > 0 && secondPart.length > 0){
        firstGiantLife += firstPart.splice(0, cutSize).reduce((a, b) => a * b);
        secondGiantLife += secondPart.splice(0, cutSize).reduce((a, b) => a * b);
    }

    let damagePerHit = Math.min(...inputArray);
    let deadLine = Math.max(...inputArray);
    let rounds = 1;
    let minLife = Math.min(firstGiantLife, secondGiantLife);
    let pointsToDead = minLife - deadLine;

    if(pointsToDead <= damagePerHit){
        let hitsCounter = 1;
        if(pointsToDead % damagePerHit === 0){
            hitsCounter = pointsToDead / damagePerHit;
        }else{
            hitsCounter = Matj.ceil(pointsToDead / damagePerHit);
        }
    }

    if(damagePerHit !== 0){
        while(firstGiantLife > deadLine && secondGiantLife > deadLine){
            firstGiantLife -= damagePerHit;
            secondGiantLife -= damagePerHit;
            rounds++;
        }
    }

    if(firstGiantLife === secondGiantLife){
        console.log(`Its a draw ${firstGiantLife} - ${secondGiantLife}`)
    }else if(firstGiantLife > secondGiantLife){
        console.log(`First Giant defeated Second Giant with result ${firstGiantLife} - ${secondGiantLife} in ${rounds} rounds`);
    }else{
        console.log(`Second Giant defeated First Giant with result ${secondGiantLife} - ${firstGiantLife} in ${rounds} rounds`);
    }

}

gaints([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2)