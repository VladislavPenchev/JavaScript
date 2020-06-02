function sumOfNumbers(...parm){
    let result = 0;

    for(let i = +parm[0]; i <= +parm[1]; i++){
        result += i;
    }

    console.log(result);
}
sumOfNumbers('1', '5');