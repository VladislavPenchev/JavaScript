function solve(args){
    let map = new Map();
    for(let i = 0; i < args.length; i++){
        if(args[i] === "Ave Cesar"){
            break;
        }        
        // let line = args[i].split(/\s*->\s*/g);

        // let name = line[0];
        // let technique = line[1];
        // let skill = line[2];
        

        let [name, technique, skill] = args[i].split(/\s*->\s*/g);
       

        if(!map.has(name)){
            map.set(name,new Map());
        }
        map.set(map.get(name),map.set(technique,skill));

    }
    console.log(map);
}

solve([
'Pesho -> BattleCry -> 400',
'Gosho -> PowerPunch -> 300',
'Stamat -> Duck -> 200',
'Stamat -> Tiger -> 250',
'Ave Cesar'
])