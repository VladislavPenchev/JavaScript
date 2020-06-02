function circleArea(side){
    let inputType = typeof(side); 
    if(inputType === 'number'){
        return (Math.PI * (side**2)).toFixed(2);
    }else{
        return `We can not calculate the circle area, because we receive a ${inputType}.`;
    }
}


console.log(circleArea(5));
