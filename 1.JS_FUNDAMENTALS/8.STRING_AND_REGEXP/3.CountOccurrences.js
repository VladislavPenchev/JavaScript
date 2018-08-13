function countWord(args){
    let word = args[0];
    let text = args[1];
    let index = text.indexOf(word);
    let count = 0;

    while(index > -1){
        count++;
        index = text.indexOf(word, index + 1);
    }

    console.log(count);


}

countWord(['the', 'The quick brown fox jumps over the lay dog.']);