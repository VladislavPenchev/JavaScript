function calculateRoots(...arr){
    let desc = (arr[1]**2) - 4* arr[0] * arr[2];
    if(desc > 0){
        let firstRoot = (-arr[1] + Math.sqrt(desc))/ 2 * arr[0];
        let secondRoot = (-arr[1] - Math.sqrt(desc))/ 2 * arr[0];

        if(firstRoot > secondRoot){
            console.log(secondRoot);
            console.log(firstRoot);
        }else{
            console.log(firstRoot);
            console.log(secondRoot);
        }

    }
    else if(desc === 0){    
        let doubleRoots = -arr[1]/ 2 * arr[0];
    }
    else{
        console.log("No");
    }
}

calculateRoots(6,11,-35);