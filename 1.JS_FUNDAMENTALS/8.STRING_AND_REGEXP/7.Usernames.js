function userNames(args){
    
    for(let ind of args){
        let [username, rest] = ind.split('@');

        console.log(username + '.' + rest.split('.').map(x => x[0]).join(''))

    }


}

userNames(['pesho@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);