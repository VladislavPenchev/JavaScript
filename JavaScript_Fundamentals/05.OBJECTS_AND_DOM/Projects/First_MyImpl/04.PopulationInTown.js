function populationsToJSON(...input){
   
    let obj = {};

    for(let i = 0; i < input.length; i++){
        let currentRecParts = input[i].split(' <-> ');

        if(!obj[currentRecParts[0]]){
            obj[currentRecParts[0]] = 0;
        }

        obj[currentRecParts[0]] += Number(currentRecParts[1]);
    }

    console.log(JSON.stringify(obj));
}

populationsToJSON("Istanbul <-> 100000", "Honk Kong <-> 2100004", "Jerusalem <-> 2352344", "Mexico City <-> 23401925", "Istanbul <-> 1000");