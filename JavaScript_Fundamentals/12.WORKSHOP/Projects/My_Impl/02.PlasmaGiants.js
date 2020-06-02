function giants(...input){

    const sizeCut = input[1];

    let firstGiant = input[0].slice(0, input[0].length / 2);
    let secondGiant = input[0].slice(input[0].length / 2);

    let firstGiantLife = 0;
    let secondGiantLife = 0;

    while(firstGiant.length > 0 && secondGiant.length > 0){
        firstGiantLife += firstGiant.splice(0, sizeCut).reduce((a, b) => a * b);
        secondGiantLife += secondGiant.splice(0, sizeCut).reduce((a, b) => a * b);
    }

    let damagePerHit = Math.min(...input[0]);
    let deadLine = Math.max(...input[0]);
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

giants([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);