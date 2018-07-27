function splitWithDelimiter(text,delimiter){
    let result = text.split(delimiter).join('\n');
    console.log(result);
}

splitWithDelimiter('One-Two-Three-Four-Five', '-'
);