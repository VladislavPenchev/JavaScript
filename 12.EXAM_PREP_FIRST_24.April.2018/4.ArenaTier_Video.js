function solve(args) {
    let result = {};
    for (const str of args) {
        if (str.includes(" -> ")) {

            let [name, technique, skill] = str.split(/\s*->\s*/g);

            if (!result.hasOwnProperty(name)) {
                result[name] = {};
                result[name][technique] = Number(skill);
                result[name]['__total__'] = Number(skill);
            } else {
                if (!result[name].hasOwnProperty(technique)) {
                    result[name][technique] = Number(skill);
                    result[name]['__total__'] += Number(skill);
                } else {
                    if (result[name][technique] < Number(skill)) {
                        result[name]['__total__'] -= result[name][technique];
                        result[name]['__total__'] += Number(skill);
                        result[name][technique] = Number(skill);
                    }
                }
            }

        } else if (str.includes(" vs ")) {
            let [gladiator1,gladiator2] = str.split(' vs ');
            if(result.hasOwnProperty(gladiator1) && result.hasOwnProperty(gladiator2)){
                for(const g1Item in result[gladiartor1]){
                    let g1Score = result[gladiator1][g1Item];
                    let g2Score = result[gladiator2][g1Item];
                    if(g1Score && g2Score){
                        if(g1Score > g2Score && g1Item !== '__total__'){
                            delete result[gladiator2];
                            break;
                        }else{
                            delete result[gladiator1];
                            break;
                        }
                    }
                }
            }
        } else {
            break;
        }
    }
    //Sort
    let sortedGladiators = Object.keys(result).sort((g1, g2) => {
        let diffInScore = result[g2]['__total__'] - result[g1]['__total__'];
        console.log(diffInScore);
        if (diffInScore === 0) {
            return g1.localeCompare(g2);
        }
        return diffInScore;
    })

    for (const gl of sortedGladiators) {
        console.log(`${gl}: ${result[gl]['__total__']} skill`);
        let gladiatorsKeys = Object.keys(result[gl])
            .filter(gl => gl !== "__total__")
            .sort((t1, t2) => {
                let diffInTechnique = result[gl][t2] - result[gl][t1];
                if (diffInTechnique === 0) {
                    return t1.localeCompare(t2);
                }
                return diffInTechnique;
            })
        for (const tech of gladiatorsKeys) {
            console.log(`- ${tech} <!> ${result[gl][tech]}`);
        }
    }


}

solve([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
])