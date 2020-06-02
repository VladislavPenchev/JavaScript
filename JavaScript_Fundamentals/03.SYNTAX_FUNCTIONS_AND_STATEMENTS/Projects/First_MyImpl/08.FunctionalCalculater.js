function calculator(f, s, oper){

    let calc = function(f, s, oper){
        return oper(f, s);
    }

    let add = function(f, s){
        return f + s;
    }

    let substract = function (f, s){
        return f - s;
    }

    let multiply = function(f, s){
        return f * s;
    }

    let divide = function(f, s){
        return f / s;
    }

    switch(oper){
        case '+': return calc(f,s, add);
        case '-': return calc(f,s, substract);
        case '*': return calc(f,s, multiply);
        case '/': return calc(f,s, divide);
    }
}

console.log(calculator);