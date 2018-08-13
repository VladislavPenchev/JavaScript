//motorway -130
//interstate -90;
//city-50
//residential- 20

function radar(args){
    let currentSpeed = args[0];
    let zone = args[1];
    let limit = getLimitByZone(zone);
    getInfraction(currentSpeed,limit);

}

function getInfraction(currentSpeed,limit){
    let overSpeed = currentSpeed - limit;
    if(overSpeed < 0){
        return false;
    }else if(overSpeed > 20){
        console.log("speeding");
    }else if(overSpeed > 40){
        console.log("excessive speed");
    }else{
        console.log("reckless driving");
    }
}

function getLimitByZone(zone){
    switch(zone){
        case 'motorway': return 130;
        case 'interstate': return 90;
        case 'city' : return 50;
        case 'residential' : return 20;
    }
    
}

radar([120, 'interstate']);