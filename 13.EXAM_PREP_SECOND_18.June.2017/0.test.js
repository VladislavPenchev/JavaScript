function solve(args) {
    let obj = {}
    let str = JSON.stringify(args);
    let res = str.split(/[\[\]{},]/g).filter(w => w !== "");
    let lenObj = 0;
    
    //store
    for(let i = 0; i < res.length; i+=3){
        let system = res[i].split(":")[1].split('"')[1];
        let candidate = res[i + 1].split(":")[1].split('"')[1];
        let votes = res[i + 2].split(":")[1];
        
        if(!obj.hasOwnProperty(system)){
            obj[system] = {};
            obj[system][candidate] = Number(votes);
            obj[system]['__total__'] = Number(votes);
        }else{
            if(!obj[system].hasOwnProperty(candidate)){
                obj[system][candidate] = Number(votes);
                obj[system]['__total__'] += Number(votes);
            }else{
                obj[system][candidate] += Number(votes);
                obj[system]['__total__'] += Number(votes);
            }
        }
        lenObj++;
    }

    
    for(const cur of obj){
        console.log(cur);
    }


    //sort
    let sortedSystems = Object.keys(obj)
            .sort((s1,s2) => {
                
        let diffInVotes = obj[s2]['__total__'] - obj[s1]['__total__'];
        return diffInVotes;
    })

    //console.log(sortedSystems);

}

solve([
    { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow', votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau', candidate: 'Space Cow', votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow', votes: 60 },
    { system: 'Tau', candidate: 'Flying Shrimp', votes: 150 }
]);