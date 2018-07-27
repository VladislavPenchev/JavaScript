function checkStr(text, word){
    // let str = text.toLowerCase().indexOf('how');

    // if(str > -1){
    //     console.log("true");
    // }else{
    //     console.log("false");
    // }

    console.log(text.startsWith(word) ? "true" : "false");

}

checkStr('How have you been?','how');