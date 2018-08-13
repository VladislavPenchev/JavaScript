function repeatStr(text,countOfRep){
    //console.log(text.repeat(countOfRep));
    let result = '';
    for(let i = 0; i < countOfRep; i++){
        result += text;
    }

    console.log(result);
}

repeatStr('repeat',5);