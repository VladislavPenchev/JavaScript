//start A
//V1 , V2
//T 3600sec = 3600
//s = v.t

function n(firstSpeed,secondSpeed,time){
    let firstRsult = time/firstSpeed;
    let secondResult = time/secondSpeed;
    let result = firstRsult-secondResult;
    console.log(result);
}

n(11,10,120);