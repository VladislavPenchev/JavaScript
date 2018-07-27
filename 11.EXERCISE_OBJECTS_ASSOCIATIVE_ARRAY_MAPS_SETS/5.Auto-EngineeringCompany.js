function solve(args){
    let map = new Map();
    
    for(const car of args){
        let [carBrand,carModel,producedCars] =  car.split(/\s*\|\s*/).filter(x => x !== "");
    
        if(!map.has(carBrand)){
            map.set(carBrand, new Map());
        }
        map.get(carBrand).set(carModel,producedCars);
    }
    
    for(const [key,value] of map){
        console.log(`${key}`)
        for(const keyElement of value){
            console.log(`###${keyElement[0]}->${keyElement[1]}`);
        }
    }



}

solve([
'Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'
]);