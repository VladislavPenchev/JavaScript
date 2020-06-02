function largest(a, b, c){
    // if(a > b){
    //     if(a > c){
    //         return a;
    //     }else{
    //         return c;
    //     }
    // }else{
    //     if(b > c){
    //         return b;
    //     }else{
    //         return c;
    //     }
    // }

    return Math.max(a, b, c)
}

console.log(`The largest number is ${largest(5,-3,18)}`);