function solve(args) {
    let map = new Map();

    let res = args.join(' ').toLowerCase().split(/[^\w]+/)
        .filter(w => w !== "").forEach(word => {
            if (!map.has(word)) {
                map.set(word, 0);
            }
            map.set(word, map.get(word) + 1);
        });

    let sortedKeys = Array.from(map.keys()).sort();

    for (const key of sortedKeys) {
        console.log(`'${key}' -> ${map.get(key)} times`);
    }

    console.log(sortedKeys);

}

solve(['Fat too slow, you\'re far too slow.']);