function emplData(args){
    let regex = /^([A-Z][a-z]*)\s*-\s*([1-9][0-9]*)\s*-\s*([a-zA-Z0-9 -]+)$/g

    for(const str of args){
        let exec = regex.exec(str);
        
        if(exec){
            console.log(`Name: ${exec[1]}\n` +
            `Position: ${exec[3]}\n` + 
            `Salary: ${exec[2]}`);
        } 
        
    }
}

emplData(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']);