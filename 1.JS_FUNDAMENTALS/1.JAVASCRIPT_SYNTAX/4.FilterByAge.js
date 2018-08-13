function oldestPerson(numberOfMinAge,firstName,firstAge,secondName,secondAge){
    if(numberOfMinAge > firstAge || numberOfMinAge > secondAge){
        console.log(`Number of age is can't be less then ${numberOfMinAge}`);
    }
    let person;
        if(firstAge > secondAge){
            person = {name:firstName,age:firstAge};
        }
        else{
            person = {name:secondName,age:seecondAge};
        }
        
    console.log(person);
    
}

oldestPerson(12,"Ivan",15,"Asenn",9);