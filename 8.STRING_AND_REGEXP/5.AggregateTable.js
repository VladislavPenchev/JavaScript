function aggregateTable(args){
    let result = [];
    let sum = 0;
    for(let i = 0; i < args.length; i++){
        let tokens = args[i].split("|");
        result.push(tokens[1].trim());
        sum += Number(tokens[2].trim());
        }

    console.log(result);
    console.log(sum);

}

aggregateTable([
'| Sofia          | 300',
'| Veliko Tarnovo | 500',
'| Yambol         | 275'
]);