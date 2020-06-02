function townsToJSON(input){

    let arr = [];

    let town = {};

    for(let i = 0; i < input.length; i++){
        
        let currentRec = input[i];

        let arrWithRecs = currentRec
                                .split('|')
                                .filter(el => el !== '')
                                
        if(i === 0){
            let tempRec = '';

            for(let j = 0; j < arrWithRecs.length; j++){
                if(arrWithRecs[j].includes(' ')){
                    tempRec = arrWithRecs[j].split(" ").join("");
                    town[tempRec] = '';
                }
            }
        }else{
            let tempRec = '';

            for(let j = 0; j < arrWithRecs.length; j++){
                if(arrWithRecs[j].includes(' ')){
                    tempRec = arrWithRecs[j].split(" ").join("");
                    if(!typeof(tempRec) == 'number'){
                        town[tempRec] = ;
                    }
                    town[tempRec] = '';
                }
            }
        }
        
        console.log(town);

    }

}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);