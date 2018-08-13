function solve(args) {
    let con = {};
    
    for (const obj of args) {

        if (!con.hasOwnProperty(obj.system)) {
            con[obj.system] = {};
            con[obj.system][obj.candidate] = obj.votes;
            con[obj.system]['__total__'] = obj.votes;
        } else {
            if(!con[obj.system].hasOwnProperty(obj.candidate)){
                con[obj.system][obj.candidate] = obj.votes;
                con[obj.system]['__total__'] += obj.votes;
            }else{
                con[obj.system][obj.candidate] += obj.votes;
                con[obj.system]['__total__'] += obj.votes;
            }

        }
    }
    

    //console.log(con);
    console.log(con.length)
    //for(const res of con[])

    //sort
    let sortedSystem = Object.keys(con)
            .sort((s1,s2) => {
                diffInVotes = con[s2]['__total__'] - con[s1]['__total__'];
                return diffInVotes;
            })

    //console.log(sortedSystem);
}

solve([
    { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow', votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau', candidate: 'Space Cow', votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow', votes: 60 },
    { system: 'Tau', candidate: 'Flying Shrimp', votes: 150 }
]);