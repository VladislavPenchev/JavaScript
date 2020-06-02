function computeGCD(...input){

    let gcd;

    for(let i = 1; i <= Math.min(+input[0], +input[1]); i++){
        if(+input[0] % i === 0 && +input[1] % i === 0){
            gcd = i;
        }
    }

    return gcd;
}

console.log(computeGCD(15, 5));