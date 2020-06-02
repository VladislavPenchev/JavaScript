function isTheSame(number){
    
    let numToStr = number.toString();

    let isSame = false;

    let sum = 0;
    

    for(let i = 1; i < numToStr.length; i++){

        if(numToStr[0] === numToStr[i]){
            isSame = true;
        }else{
            isSame = false;
        }

        sum += +numToStr[i];
    }

    sum += +numToStr[0];

    console.log(isSame);
    console.log(sum);
}

isTheSame(2222222);