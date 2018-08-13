function extractText(args){
    let arr = [];
    let start = args.indexOf("(");
    let end = args.indexOf(")", start + 1);
    let subStr;

    while(start > -1 && end > -1){
        subStr = args.substring(start + 1, end);
        arr.push(subStr);
        start = args.indexOf("(", start + 1);
        end = args.indexOf(")", end + 1);
    }

    console.log(arr.join(', '));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');