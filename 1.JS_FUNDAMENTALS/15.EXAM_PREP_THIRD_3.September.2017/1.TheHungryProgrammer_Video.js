function snatchMeals([meals,commands]){
    let mealsEaten = 0;
    let actions = {
        Serve: () => {
            console.log(`${meals.pop()} served!`);
        },
        Add: ([meal]) => {
            if(meal != '')
            meals.unshift(meal);
        },
        Shift: ([startIdx,endIdx]) => {
            let hasValidIndexes = startIdx && endIdx && startIdx >= 0 && endIdx < meals.length - 1 && startIdx < endIdx;
            if(hasValidIndexes){
                let temp = meals[startIdx];
                meals[startIdx] = meals[endIdx];
                meals[endIdx] = temp;
            }
        },
        Eat: () => {
            if(meals.length > 0){
                console.log(`${meals.shift()} eaten`);
                mealsEaten++;
            }
        },
        Consume: ([startIdx,endIdx]) => {
            let hasValidIndexes = startIdx && endIdx && startIdx >= 0 && endIdx < meals.length - 1 && startIdx < endIdx;
            if(hasValidIndexes){
                let portionsCount = endIdx - startIdx;
                meals.splice(startIdx,portionsCount);
                mealsEaten +=portionsCount;
                console.log('Burp!')
            }
        },
        End: () => {
            if(meals.length > 0){
                console.log(`Meals left: ${meals.join(', ')}`);
            }else{
                console.log(`The food is gone`);
            }
            console.log(`Meals eaten ${mealsEaten}`);
        }
    }


    for(const commandsArgs of commands){
        let commandParams = commandsArgs.split(' ');
        let action = commandParams.shift();
        if(actions[action]){
            actions[action](commandParams);
            if(action === 'End'){
                break;
            }
        }

        
    }
}

let input1 = [
['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
['Add spaghetti',
 'Shift 0 1',
 'Consume 1 4',
 'End']
];

snatchMeals(input1);