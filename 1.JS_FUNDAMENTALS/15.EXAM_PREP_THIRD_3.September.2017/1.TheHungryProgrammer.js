function solve(products,operations){

    let eaten = [];

    for(const cur of operations){
        if(cur === 'End'){
            break;
        }
        select(cur,products);
    }

    function select(command,arrWithProducts){
        switch(command){
            case 'Serve': return console.log(`${arrWithProducts.pop()} served!`);
            case 'Eat': {
                eaten.push(arrWithProducts[0]);
                return console.log(`${arrWithProducts[0]} eaten`);
            }
            case 'Add': arrWithProducts.unshift(arrWithProducts.pop());
        }

        if(command.includes('Consume')){
            let [firstPosition,secondPosition] = command.split(' ').slice(1,3);
            let res = arrWithProducts.splice(firstPosition,secondPosition).forEach(x => eaten.push(x));
        }

        if(command.includes('Shift')){
            let [firstPosition,secondPosition] = command.split(' ').slice(1,3);

            
            function swap(f1, f2){
                let tempVar = arrWithProducts[firstPosition];
                arrWithProducts[firstPosition] = arrWithProducts[secondPosition];
                arrWithProducts[secondPosition] = tempVar;
            }

            return swap(firstPosition,secondPosition);                
        }

        console.log(eaten);
        
    }

    

}

solve(
    ['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    ['Add spaghetti',
     'Shift 0 1',
     'Consume 1 4',
     'End']    
);
