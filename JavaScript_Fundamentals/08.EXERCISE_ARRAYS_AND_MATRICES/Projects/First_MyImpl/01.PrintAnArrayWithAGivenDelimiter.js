function printWithDelimiter(arr){
    let delimiter = arr.pop();

    return arr.join(delimiter);

}

console.log(printWithDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
));