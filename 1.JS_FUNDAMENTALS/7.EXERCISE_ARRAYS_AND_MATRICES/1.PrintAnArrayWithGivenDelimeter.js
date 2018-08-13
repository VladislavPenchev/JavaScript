function printWithDelimiter(args){
    let delimiter = args.pop();

    let result = args.join(delimiter);

    console.log(result);
}

printWithDelimiter(["One","Two","Three","Four","-"]);