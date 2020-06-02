function cooking(input){
    let number = +input[0];

    for(let i = 1; i < input.length; i++){

        switch(input[i]){
            case 'chop':
                console.log(number = number / 2);
                break;
            case 'dice':
                console.log(number = Math.sqrt(number));
                break;
            case 'spice': 
                console.log(number = number + 1);
                break;
            case 'bake':
                console.log(number = number * 3);
                break;
            case 'fillet': 
                console.log(number = number - (number *20 /100));
                break;    
        }
    }
}

cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);