function areaOfTrainingleByThreeSides(first,second,third){
    let halfPerimeter = (first + second + third)/2;
    let result = Math.sqrt(halfPerimeter*(halfPerimeter - first)*(halfPerimeter - second) * (halfPerimeter - third));
    console.log(result);
}

areaOfTrainingleByThreeSides(2,3.5,4);