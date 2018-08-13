function findViriable(str){
    let regex = /_[a-zA-Z0-9]+/g;
    let result = str.match(regex).map(x => x = x.replace("_",""));

    // for(let el of result){
    //     el = el.replace("_","");
    //     console.log(el);
    // }

    console.log(result);

}

findViriable('The _id and __age variables are both integers.');