function matchWord(args){
    let regExp = args.match(/\w+/g);

    console.log(regExp.join('|'));
    //console.log(regExp);
}

matchWord('A Regular Expression needs to have the global flag in order to match all occurrences in the text');