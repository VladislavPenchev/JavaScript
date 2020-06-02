function mathOperations(...params){

    switch(params[2]){
        case '+': 
            return params[0] + params[1];
        case '-': 
            return params[0] - params[1];    
        case '*': 
            return params[0] * params[1];
        case '/': 
            return params[0] / params[1];
        case '%': 
            return params[0] % params[1];
        case '**': 
            return params[0] ** params[1];
            
    }
}

console.log(mathOperations(5, 6, '+'));