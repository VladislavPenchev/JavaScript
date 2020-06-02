function determinesSpeedLimit(input){
    let speed = +input[0];
    let area = input[1];

    const motorway = 130;
    const interstate = 90;
    const city = 50;
    const residential = 20;

    let result = function(speed, area){
        let overTheLimit = speed - area;

        if(overTheLimit > 0){
            if(overTheLimit > 0 && overTheLimit <= 20){
                return 'speeding';
            }else if(overTheLimit > 20 && overTheLimit <= 40){
                return 'excessive speeding';
            }else{
                return 'reckless driving';
            }
        }else{
            return '';
        }
    }

    switch(area){
        case 'motorway':
            return result(speed,motorway);
        case 'interstate':
            return result(speed,interstate);
        case 'city': 
            return result(speed,city);
        case 'residential':
            return result(speed,residential);
        default:
            break;                
    }
}

console.log(determinesSpeedLimit([21, 'residential']));