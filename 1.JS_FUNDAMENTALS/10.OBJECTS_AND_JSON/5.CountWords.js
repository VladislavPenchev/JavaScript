function solve(args){
    let result = {};
    let cur = args.join(' ').split(/[^\w]+/)
        .filter(w => w !== "").forEach(s => {
            if(!result.hasOwnProperty(s)){
                result[s] = 0;
            }
            result[s]++;
        });

    console.log(JSON.stringify(result));
}

solve(['Fat too slow, you\'re far too slow.']);