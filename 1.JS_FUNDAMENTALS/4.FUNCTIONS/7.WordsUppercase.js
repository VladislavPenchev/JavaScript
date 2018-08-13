function allWordsToUpper(arg){
    console.log(arg.split(/\W+/).filter(w => w !== '')
            .map(w => w.toUpperCase()).join(', '));
}   

allWordsToUpper('Hi, how are you?');