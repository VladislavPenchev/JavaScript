function convertIntToFoot(number){
    let result = Math.floor(number / 12);
    let afterPoint = number%12;

    console.log(`${result}'-${afterPoint}"`);
    
}

convertIntToFoot(11);