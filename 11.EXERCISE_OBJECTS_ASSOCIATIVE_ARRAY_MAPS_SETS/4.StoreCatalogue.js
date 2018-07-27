function solve(args) {
    let firstLetterSet = new Set();
    args.map(x => x = x[0]).forEach(x => firstLetterSet.add(x));
    let map = new Map();

    for (const ind of firstLetterSet) {

        if (!map.has(ind)) {
            map.set(ind, "");
        }
        map.set(ind, map.get(ind) + args);
    }

    console.log(map);


    //console.log(firstLetter);
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])