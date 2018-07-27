function solve(arr){
    let map = new Map();
    for(const str of arr){
        let [town,population] = str.split(/\s*<->\s*/)
        if(!map.has(town)){
            map.set(town,0);
        }
        map.set(town, map.get(town) + +population);
    }

    for(const [key,value] of map){
        console.log(`${key} : ${value}`);
    }
}

solve([
    'Instanbul <-> 10000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Instanbul <-> 1000' 
])