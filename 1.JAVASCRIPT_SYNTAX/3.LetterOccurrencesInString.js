function countOfChar(word,char){
    let count = 0;
    for(let current of word){
        if(current === char){
            count++;
        }
    }

    console.log(count);
}

countOfChar("hello","l");