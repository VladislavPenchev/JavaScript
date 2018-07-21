//x1 y1 x2 y2
//2 4 5 0

//TO DO: NOT WORK

function distance(x1, y1 , x2 , y2){
    let firstCated = x2 - x1 ;
    let secondCated = y1;
    let hypotenuse;
    hypotenuse = Math.sqrt((firstCated**2) + (secondCated**2));

    console.log(hypotenuse);
}

distance(2,34,15.66,-13.55,-2.9885);