function capitWord(text){
    let result =  text.split(' ');

        //STRING IMMUTABLE

    // for(let i = 0; i < result.length; i++){
    //     for(let j = 0; j < result[i].length; j++){
    //         //console.log(result[i][j]);
    //         if(result[i][0] !== result[i][0].toUpperCase()){
    //             result[i][0].toUpperCase();
    //         }

    //         if(result[i][0] === result[i][0].toUpperCase() && result[i][j] !== result[i][j].toLowerCase()){
    //             result[i][j].toLowerCase();
    //         }else{
    //             continue;
    //         }
    //     }
    // }

    

    console.log(result);
}

capitWord('Capitalize these words');