function solve(args){
    let map = new Map();
    let arr = [];

    for(const product of args){
        let [juice, amount] = product.split(/=>/);

        if(!map.has(juice)){
            map.set(juice,0);
        }
        map.set(juice,map.get(juice) + +amount);
    }

//TODO : print

    arr = Array.from(map);
    arr = arr.map(p => p[1] = p[1] / 1000);

    console.log(arr);
    /*
    for(let el of arr){
        if(el[1] === 0){
            continue;
        }else{
            console.log(`${el[0]} => ${el[1]}`);
        }
    }
    */
}

solve(["Orange=>2000",
        "Peach=>1432",
        "Banana=>450",
        "Peach=>600",
        "Strawberry=>549"]);