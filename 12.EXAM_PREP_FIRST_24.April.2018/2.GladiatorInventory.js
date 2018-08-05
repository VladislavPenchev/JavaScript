function solve(args){
    let inventory = [];
    args[0].split(' ').map(x => inventory.push(x));

    for(let i  = 1; i < args.length; i++){
        let line = args[i].split(' ');
        let comand = line[0];
        let item = line[1];
        let isExist  = 0;

        if(comand === "Upgrade"){
            let upgradeItem = item.split("-");
            item = `${upgradeItem[0]}:${upgradeItem[1]}`
            isExist = inventory.indexOf(upgradeItem[0]);
        }else{
            isExist = inventory.indexOf(item);
        }
        



        switch(comand){
            case "Buy": if(isExist >= 0){
                continue;
            }else{
                inventory.push(item);
            }
                break;
            case "Trash": if(isExist >= 0){                
                inventory.splice(i - 1,1);
            }else{
                continue;
            }
                break;
            case "Repair": if(isExist >= 0){
                inventory.splice(isExist,1);
                inventory.push(item);
            }else{
                continue;
            }
                break;
            case "Upgrade": if(isExist >= 0){
                inventory.splice(isExist + 1,0,item);
            }else{
                continue;
            }
                break;
        }
        
    }

    console.log(inventory.join(" "));



}

solve([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Fight!'
]);