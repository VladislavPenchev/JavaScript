function censor(text,arr){

    for(const el of arr){
        let replaced = '-'.repeat(el.length);
        while(text.indexOf(el) > -1){
            text = text.replace(el,replaced);
        }
    }
    console.log(text);
}

censor('roses are red, violets are blue', [', violets are', 'red']);