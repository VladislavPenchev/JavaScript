function checkString(text, word){
    // let result = text.toLowerCase().indexOf('fun');

    // if(result > - 1){
    //     console.log("true");
    // }else{
    //     console.log("false");
    // }

    console.log(text.endsWith(word) ? "true" : "false");

}

checkString('This sentence ends with fun?','fun?');