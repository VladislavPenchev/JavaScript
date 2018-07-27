function printLetters(args){
    for(let i = 0; i < args.length; i++){
        console.log(`str[${i}] -> ${args[i]}`);
    }
}

printLetters('Hello, World!');