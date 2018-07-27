function solve(args) {
    let arr = [];
    for (let hero of args) {
        let [name, level, items] = hero.split(/\s*\/\s*/);
        
        items = items.split(',').map(w => '"' + w + '"').join(", ");

        let heroObj = `{"name":"${name}","level":${level},"Items":[${items}]}`

        arr.push(heroObj);
    }

    console.log(arr);

    let result = JSON.stringify(arr);
    console.log(result);
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);