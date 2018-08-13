function concatAndReversed(args){
    let allStrings = args.join();
    let chars = Array.from(allStrings);

    let revChars = chars.reverse();
    let revStr = revChars.join('');

    console.log(chars);
}

concatAndReversed(['I', 'am', 'student']);